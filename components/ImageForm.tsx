import React, { FC, useState } from 'react'
import { Formik, Form } from "formik";
import { Checkbox, Radio, SubmitButton } from 'formik-antd'
import { useRouter } from "next/router";
import { Typography } from "antd";

import Photo from "./Photo";

import "antd/dist/antd.css"
import { gql, useMutation } from '@apollo/client';

const { Title } = Typography

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
	const [isSubmitting, setIsSubmitting] = useState(false)
	const questionOneOptions = ['sehr privat', 'privat', 'nicht privat', 'unentscheidbar']
	const questionTwoOptions = ['Freunden', 'Bekannten', 'Kollegen', 'Familie', 'mit Niemanden']
	return (
		<div className="px-5 mb-10">
			<Photo imgURL={imgURL} />
			<Formik
				initialValues={{
					questionOne: '',
					questionTwo: []
				}}
				onSubmit={async (answers, actions) => {
					if (Array.isArray(user)) {
						alert('User unknown! Please login again.')
						return
					}
					if (answers.questionOne === '' || answers.questionTwo.length === 0) {
						alert('Some information is missing!')
						return
					}

					setIsSubmitting(true)


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
					}).then(async () => {
						await router.push(`/${user}`)
						setIsSubmitting(false)
						actions.resetForm()
					}).catch(() => alert('Database connection error!'))
				}}
			>
				{({ values: answers }) => (
					<Form>
						<Title level={5} id="questionOne">
							Wie würden Sie die Empfindlichkeit des Bildes bewerten?
						</Title>
						<Radio.Group name="questionOne" >
							{questionOneOptions.map(q => <div key={q}>
								<Radio name="questionOne" value={q} >
									{q}</Radio>

							</div>)}
						</Radio.Group>
						<Title level={5} id="questionTwo" className="mt-5">
							Mit wem würden Sie dieses Foto teilen?
						</Title>
						<Checkbox.Group name="questionTwo">
							{questionTwoOptions.map(q => <div key={q}>
								<Checkbox name="questionTwo" value={q} >
									{q}</Checkbox>
							</div>)}
						</Checkbox.Group>
						<br />
						<div className="grid">
							<SubmitButton className="align-middle  mt-5" size="large" loading={isSubmitting}>Weiter</SubmitButton>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default ImageForm
