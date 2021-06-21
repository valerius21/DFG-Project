import React, { FC, useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import NextImage from 'next/image'
import { Skeleton, Space, Image as AImage } from "antd"

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
		<div className="mb-10 flex">
			{imageExists ? (
				<Space size={12} >
					<AImage
						className="self-auto"
						alt="Please refresh the page"
						src={imgURL}
						height={500}
						placeholder={<AImage preview={false} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200" height={500}
						/>} />
				</Space>
			)
				: <button onClick={() => router.reload()}>Image not found. Reload Image</button>}
		</div>
	)
}

export default Photo
