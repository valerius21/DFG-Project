import React, { FC, useState } from 'react'
import { Formik, Form } from "formik";
import { Checkbox, Radio, SubmitButton } from 'formik-antd'
import { useRouter } from "next/router";
import { Typography, Layout, Row, Col } from "antd";

import Photo from "./Photo";

import "antd/dist/antd.css"
import { gql, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';

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

interface Answer {
	value: string,
	en: string,
	de: string
}

const ImageForm: FC<ImageFormInterface> = ({ imgURL, isPrivate, imageID }) => {
	const router = useRouter()
	const { user } = router.query
	const { t, i18n } = useTranslation()
	const [insertAnswer] = useMutation(INSERT_ANSWER)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const questionOneOptions: Answer[] = [
		{
			value: 'sehr privat',
			de: 'sehr privat',
			en: 'TODO',
		},
		{
			value: 'privat',
			de: 'privat',
			en: 'TODO',
		},
		{
			value: 'nicht privat',
			de: 'nicht privat',
			en: 'TODO',
		},
		{
			value: 'unentscheidbar',
			de: 'unentscheidbar',
			en: 'TODO',
		}
	]

	const questionTwoOptions = [
		'Freunden',
		'Bekannten',
		'Kollegen',
		'Familie',
		'mit Niemanden'
	]

	return (
		<Row>
			<Col span={20} offset={2}>
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


						const checkboxes = answers.questionTwo.includes('mit Niemanden') ?
							'{mit Niemanden}' :
							`{${answers.questionTwo.reduce((accumulator, currentValue) => `${accumulator},${currentValue}`)}}`

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
								{t('questionOne')}
							</Title>
							<Radio.Group name="questionOne" >
								{questionOneOptions.map((q, i) =>
									<div key={i}>
										<Radio name="questionOne" value={q.value} >
											{i18n.language === 'de' ? q.de : q.en}</Radio>
									</div>
								)}
							</Radio.Group>
							<Title level={5} id="questionTwo" className="mt-5">
								{t('questionTwo')}
							</Title>
							<Checkbox.Group name="questionTwo">
								{questionTwoOptions.map(q => <div key={q}>
									<Checkbox name="questionTwo" value={q} >
										{q}</Checkbox>
								</div>)}
							</Checkbox.Group>
							<br />
							<div className="grid">
								<SubmitButton className="align-middle  mt-5" size="large" loading={isSubmitting}>{t('continue')}</SubmitButton>
							</div>
						</Form>
					)}
				</Formik>
			</Col>
		</Row>
	)
}

export default ImageForm
