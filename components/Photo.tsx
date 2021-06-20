import React, { FC, useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import NextImage from 'next/image'

interface PhotoInterface {
	imgURL: string
}

const checkImage = (imageSrc, good, bad) => {
	let img = new Image();
	img.onload = good;
	img.onerror = bad;
	img.src = imageSrc
}

const Photo: FC<PhotoInterface> = ({ imgURL }) => {
	const router = useRouter()
	const [imageExists, setImageExists] = useState<boolean>(false)

	useEffect(() => {
		checkImage(imgURL, () => setImageExists(true), () => setImageExists(false))
	}, [])
	return (
		<div>

			{imageExists ? <NextImage alt="Please refresh the page" src={imgURL} placeholder="blur" height={500} width={500} />
				: <button onClick={() => router.reload()}>Image not found. Reload Image</button>}

		</div>
	)
}

export default Photo
