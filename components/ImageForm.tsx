import React, { FC } from 'react'
import Photo from "./Photo";

interface ImageFormInterface {
	imgURL: string,
}
const ImageForm: FC<ImageFormInterface> = ({ imgURL }) => {
	return (
		<div>
			<Photo imgURL={imgURL} />
		</div>
	)
}

export default ImageForm
