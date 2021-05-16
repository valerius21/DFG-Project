import React from 'react'
import Image from 'next/image'
import ArrowBtn from '../components/ArrowButton'
import styles from '../styles/Pick.module.css'

const UID = 'USER_ID_XXX'

const Pick = () => {
    return (
        <div className="page">
            <div className="grid grid-cols-3 gap-4 mt-4">
                <ArrowBtn />
                <h3 className={styles.uid}>{UID}</h3>
                <div />
                <div className={styles.rect}>
                    <div className={styles.tap}>Tap a picture to get started! 😊</div>
                </div>
                <div className={styles.feed}>
                    <img
                        className={styles.pictureCard}
                        src='/stock_1.jpg'
                    />
                    <br />
                    <img
                        className={styles.pictureCard}
                        src='/stock_2.jpg'
                    />
                    <br />
                    <img
                        className={styles.pictureCard}
                        src='/stock_3.jpg'
                    />
                    <br />
                    {/* TODO: add picture list */}

                </div>
            </div>
        </div>
    )
}

export default Pick
