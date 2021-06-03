import React, { FC } from 'react'
import Link from 'next/link'
import { Slider, Checkbox, Radio } from 'antd'

import { Picture } from './feed'
import styles from '../styles/Eval.module.css'
import CheckMarkBtn from '../components/CheckMarkBtn'
import ArrowButton from '../components/ArrowButton'
import yaml from 'js-yaml'

const tmpForm = `# element group
type: photo_evaluation

# Photo ID to map the evaluation to
id: '<study>:<username>'

# Question to be displayed
question: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et'

# Site title
label: 'Photo Evaluation'

# sites in question
pages:
  -
    type: 'page'
    id: '<photo>:<username>'
    label: '<question title>'
    # Question to be displayed
    question: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et'
    answers:
      -
        answer: 'Family'
        inputType: 'radioButton'
      -
        answer: 'Friends'
        inputType: 'checkBox'
      -
        answer: 'Collegues'
        inputType: 'slider'
`

type InputType = 'slider' | 'radio' | 'checkbox'

interface SliderInputInterface {
    targetGroup: string
    className?: string
    inputType?: InputType
}


const SliderInput: FC<SliderInputInterface> = ({ targetGroup, className, inputType = 'checkbox' }) => {

    return (
        <div className="py-3" style={{ margin: 'auto' }}>
            {inputType === 'slider' && (<><p className="text-center text-base">{targetGroup}</p><Slider /></>)}
            {inputType !== 'slider' && <div>
                {inputType === 'checkbox' ? <Checkbox>{targetGroup}</Checkbox> : <Radio >{targetGroup}</Radio>}
            </div>}
        </div>
    )
}


const convertForm = async (form: string) => await yaml.loadAll(form)

const PhotoEval = () => {
    const tmpQuestion = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et'

    return (
        <div>
            {/* <pre>{await convertForm(tmpForm)}</pre> */}
            <div className={styles.pictureCanvas}>
                <Picture src={'/stock_1.jpg'} className={styles.picture} />
                <div className={styles.btnGroup}>
                    <Link href='/'>
                        <div className={styles.back}>
                            <ArrowButton />
                        </div>
                    </Link>
                    <div />
                    <div />
                    <Link href='/done'>
                        <div className={styles.check}>
                            <CheckMarkBtn />
                        </div>
                    </Link>
                    <p className={styles.question}>{tmpQuestion}</p>
                </div>
            </div>
            <div className="mt-3" />
            <div className="page">
                <SliderInput targetGroup="Friends" />
                <SliderInput targetGroup="Family" />
                <SliderInput targetGroup="Collegues" />
                <SliderInput targetGroup="Public" />
            </div>
        </div>
    )
}

export default PhotoEval
