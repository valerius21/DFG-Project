import React from 'react'
import { Picture } from './feed'

import styles from '../styles/Eval.module.css'
import CheckMarkBtn from '../components/CheckMarkBtn'
import ArrowButton from '../components/ArrowButton'

const PhotoEval = () => {
    const tmpQuestion = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et'
    return (
        <div>
            <div className={styles.pictureCanvas}>
                <Picture src={'/stock_1.jpg'} className={styles.picture} />
                <div className={styles.btnGroup}>
                    <div className={styles.back}>
                        <ArrowButton />
                    </div>
                    <div />
                    <div />
                    <div className={styles.check}>
                        <CheckMarkBtn />
                    </div>
                    <p className={styles.question}>{tmpQuestion}</p>
                </div>
            </div>
        </div>
    )
}

export default PhotoEval
