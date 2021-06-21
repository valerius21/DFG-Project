import React, { FC } from 'react'
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";

import Photo from "./Photo";

import "antd/dist/antd.css"
import { gql, useMutation } from '@apollo/client';

interface ImageFormInterface {
	imgURL: string,
	imageID: string,
	isPrivate: boolean,
}

const INSERT_ANSWER = gql`mutation InsertAnswer($object: results_insert_input!) {
  insert_results_one(object: $object) {
    id
  }
}
`

const ImageForm: FC<ImageFormInterface> = ({ imgURL, isPrivate, imageID }) => {
	const router = useRouter()
	const { user } = router.query
	const [insertAnswer] = useMutation(INSERT_ANSWER)
	const questionOneOptions = ['sehr privat', 'privat', 'unentscheidbar', 'nicht privat']
	const questionTwoOptions = ['Freunden', 'Bekannten', 'Kollegen', 'Familie']
	return (
		<div>
			<Photo imgURL={imgURL} />
			<Formik
				initialValues={{
					questionOne: '',
					questionTwo: []
				}}
				onSubmit={async (answers) => {
					if (Array.isArray(user)) {
						alert('User unknown! Please login again.')
						return
					}
					if (answers.questionOne === '' || answers.questionTwo.length === 0) {
						alert('Some information is missing!')
						return
					}

					const checkboxes = `{${answers.questionTwo.reduce((accumulator, currentValue) => `${accumulator},${currentValue}`)}}`

					insertAnswer({
						variables: {
							object: {
								answers_questionOne: answers.questionOne,
								answers_questionTwo: checkboxes,
								photo_imageID: imageID,
								photo_imgURL: imgURL,
								photo_isPrivate: isPrivate,
								user
							}
						}
					}).then(() => router.reload()).catch(() => alert('Database connection error!'))
				}}
			>
				{({ values: answers }) => (
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
						<button className="primaryBtn" type="submit">Weiter</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default ImageForm
