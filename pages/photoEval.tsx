import React, { FC } from 'react'
import Link from 'next/link'
import { Slider, Checkbox, Radio } from 'antd'

import { Picture } from './feed'
import { tmpQuestionsConfig as tmpForm } from "../Config";
import styles from '../styles/Eval.module.css'
import CheckMarkBtn from '../components/CheckMarkBtn'
import ArrowButton from '../components/ArrowButton'
import yaml from 'js-yaml'

type InputType = 'slider' | 'radio' | 'checkbox'

interface SliderInputInterface {
    targetGroup: string
    className?: string
    inputType?: InputType
}


const Input: FC<SliderInputInterface> = ({ targetGroup, className, inputType = 'checkbox' }) => {
    const element = {
        ['radio']: <Radio >{targetGroup}</Radio>,
        ['checkbox']: <Checkbox>{targetGroup}</Checkbox>,
        ['slider']: <div><p className="text-center text-base">{targetGroup}</p><Slider /></div>
    }

    return (
        <div className="py-3">
            {element[inputType]}
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
            <div className="page border-2 rounded-md mx-5">
                <Input targetGroup="Friends" inputType="radio" />
                <Input targetGroup="Family" inputType="radio" />
                <Input targetGroup="Collegues" inputType="slider" />
                <Input targetGroup="Public" />
            </div>
        </div>
    )
}

export default PhotoEval
