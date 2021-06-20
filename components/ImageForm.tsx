import React, { FC } from 'react'
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";

import Photo from "./Photo";

import "antd/dist/antd.css"

interface ImageFormInterface {
	imgURL: string,
	imageID: string,
	isPrivate: boolean,
	publicSubmissions: number
}
const ImageForm: FC<ImageFormInterface> = ({ imgURL }) => {
	const router = useRouter()
	const questionOneOptions = ['sehr privat', 'privat', 'unentscheidbar', 'nicht privat']
	const questionTwoOptions = ['Freunden', 'Bekannten', 'Kollegen', 'Familie']
	// TODO: Form validation
	return (
		<div>
			<Photo imgURL={imgURL} />
			<Formik
				initialValues={{
					questionOne: '',
					questionTwo: []
				}}
				onSubmit={async (values) => {
					console.log(values)
					// TODO: after successful submission && not done
					router.reload()
				}}
			>
				{({ values }) => (
					<Form>
						<div id="question-one">
							Wie würden Sie die Empfindlichkeit des Bildes bewerten?
						</div>
						<div role="group" aria-labelledby="question-one">
							{questionOneOptions.map(q => <div key={q}>
								<label>
									<Field type="radio" name="questionOne" value={q} />
									{q}
								</label>

							</div>)}
						</div>
						<div id="question-two">
							Mit wem würden Sie dieses Foto teilen?
						</div>
						<div role="group" aria-labelledby="question-two">
							{questionTwoOptions.map(q => <div key={q}>
								<label>
									<Field type="checkbox" name="questionTwo" value={q} />
									{q}
								</label>
							</div>)}
						</div>
						<button type="submit">Next Image</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default ImageForm
