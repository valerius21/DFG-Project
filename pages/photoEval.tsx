import React, { FC } from 'react'
import Link from 'next/link'
import { Slider } from 'antd'

import { Picture } from './feed'
import styles from '../styles/Eval.module.css'
import CheckMarkBtn from '../components/CheckMarkBtn'
import ArrowButton from '../components/ArrowButton'

interface SliderInputInterface {
    targetGroup: string
    className?: string
}

const SliderInput: FC<SliderInputInterface> = ({ targetGroup, className }) => {

    return (
        <div className="py-3">
            <p className="text-center text-base">{targetGroup}</p>
            <Slider />
        </div>
    )
}

const PhotoEval = () => {
    const tmpQuestion = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et'
    return (
        <div>
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
