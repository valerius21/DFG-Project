import React from 'react'
import ImageForm from '../components/ImageForm'
import { useRouter } from 'next/router'
import { ApolloError, gql, useQuery } from '@apollo/client'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import client from '../utils/apollo-client'

const QUERY = gql`
query CountFlickrPublic {
  flickr_public_aggregate {
    aggregate {
      count
    }
  }
}`

const Classifier = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	// UID
	const router = useRouter()
	const { user } = router.query

	// BACKEND DATA
	// const { data, loading, error } = useQuery(QUERY)

	// if (error) {
	// console.error(error)
	// return null
	// }

	// if (loading) {
	// return <h2>Loading...</h2>
	// }

	// const { count } = data.flickr_public_aggregate.aggregate
	// if (!count) {
	// console.error("no count fetched")
	// 	return null
	// }
	// const nextID = Math.floor(Math.random() * count)

	return (
		<div>
			<p>User ID: {user}</p>
			<p>Save your ID to continue later</p>
			{/* {loading ? <h2>Loading...</h2> : <pre>{JSON.stringify(count, null, 2)}</pre>} */}

			{/* <pre>{JSON.stringify({ nextID }, null, 2)}</pre> */}
			<pre>{JSON.stringify(data, null, 2)}</pre>

			<ImageForm />
		</div>
	)
}

interface UserImageData {
	privateImageURL: string,
	publicImageURL: string,
	publicSubmissions: number,
}

const getPublicImage = async (id: number): Promise<string> => {
	console.log('request public img', id)
	throw "Unimplemented!"
}

const getPrivateImage = async (id: number): Promise<string> => {
	console.log('request private img', id)
	throw "Unimplemented!"
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

	let privatePic: boolean = Math.random() <= 0.5
	if (tmpPublicUserSubmissions >= 200) privatePic = true

	let imgURL: string

	if (privatePic) {
		const id = Math.floor(Math.random() * (await getCount('flickr')))
		imgURL = await getPrivateImage(id)
	} else {
		const id = Math.floor(Math.random() * (await getCount('unsplash')))
		imgURL = await getPublicImage(id)
	}

	return {
		props: {
			data: imgURL
		}
	}
}

export default Classifier
