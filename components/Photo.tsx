import React, { FC, useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import NextImage from 'next/image'
import { Skeleton } from "antd"

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
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		checkImage(imgURL, () => { setImageExists(true); setTimeout(() => setLoading(false), 2000) }, () => { setImageExists(false); setLoading(false) })
	}, [])

	if (loading) return (
		<Skeleton.Button className="mb-10" style={{ width: 500, height: 500 }} active={true} />
	)
	return (
		<div className="mb-10">
			{imageExists ? <NextImage className="mx-auto block" alt="Please refresh the page" src={imgURL} placeholder="blur" height={500} width={500} />
				: <button onClick={() => router.reload()}>Image not found. Reload Image</button>}
		</div>
	)
}

export default Photo
