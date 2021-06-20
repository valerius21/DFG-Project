import React from 'react'
import ImageForm from '../components/ImageForm'
import { useRouter } from 'next/router'
import { gql } from '@apollo/client'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import client from '../utils/apollo-client'

const Classifier = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	// UID
	const router = useRouter()
	const { user } = router.query

	const { imgURL, isPrivate, publicSubmissions, id } = data


	return (
		<div>
			<p>User ID: {user}</p>
			<p>Save your ID to continue later</p>

			<pre>{JSON.stringify(data, null, 2)}</pre>

			<ImageForm imgURL={imgURL} isPrivate={isPrivate} publicSubmissions={publicSubmissions} imageID={id} />
		</div>
	)
}

const getPublicImage = async (id: number): Promise<string> => {
	const { data } = await client.query({
		query: gql`query GetUnsplashImage {
			unsplash_photos(where: {id: {_eq: ${id}}}) {
				photo_id
				id
				photo_image_url
			}
		}
	`
	})
	return data.unsplash_photos[0].photo_image_url
}

const getPrivateImage = async (id: number): Promise<string> => {
	const { data } = await client.query({
		query: gql`query GetPrivateFlickrImage {
			flickr_private(where: {id: {_eq: ${id}}}) {
				destination
				id
			}
		}
	`
	})
	return data.flickr_private[0].destination
}

const getCount = async (db: 'unsplash' | 'flickr'): Promise<number> => {
	let count: number;
	if (db === 'flickr') {
		const { data, error } = await client.query({
			query: gql`query CountFlickrPrivatePhotos {
				flickr_private_aggregate {
					aggregate {
					count
					}
				}
			}
			`
		})
		if (error) {
			console.error(error);
		}
		count = data.flickr_private_aggregate.aggregate.count
	}
	else {
		const { data, error } = await client.query({
			query: gql`query CountUnsplashPhotos {
				unsplash_photos_aggregate {
					aggregate {
					count
					}
				}
			}
			`
		})
		if (error) {
			console.error(error);
		}
		count = data.unsplash_photos_aggregate.aggregate.count
	}

	return count
}

export const getServerSideProps: GetServerSideProps = async () => {
	const tmpPublicUserSubmissions: number = 150 // TODO: count user submission type in database

	let isPrivate: boolean = Math.random() <= 0.5
	if (tmpPublicUserSubmissions >= 200) isPrivate = true

	let imgURL: string
	let id: number;

	if (isPrivate) {
		id = Math.floor(Math.random() * (await getCount('flickr')))
		imgURL = await getPrivateImage(id)
	} else {
		id = Math.floor(Math.random() * (await getCount('unsplash')))
		imgURL = await getPublicImage(id)
	}

	return {
		props: {
			data: {
				imgURL,
				isPrivate,
				publicSubmissions: -1,
				id,
			}
		}
	}
}

export default Classifier
