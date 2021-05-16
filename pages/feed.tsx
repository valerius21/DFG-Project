import React, { FC } from 'react'
import Link from 'next/link'
import ArrowBtn from '../components/ArrowButton'
import styles from '../styles/feed.module.css'

const UID = 'USER_ID_XXX'

interface PictureInterface {
    src: string,
    className: string
}

export const Picture: FC<PictureInterface> = ({ src, className }) => (
    <Link href={'/photoEval'}>
        <div>
            <img
                className={className}
                src={src}
            />
            <br />
        </div>
    </Link>
)

const Pick = () => {
    const tmpPics = ['/stock_1.jpg', '/stock_3.jpg', '/stock_2.jpg',]
    return (
        <div className="page">
            <div className="grid grid-cols-3 gap-4 mt-4">
                <Link href="/">
                    <div>
                        <ArrowBtn />
                    </div>
                </Link>
                <h3 className={styles.uid}>{UID}</h3>
                <div />
                <div className={styles.rect}>
                    <div className={styles.tap}>Tap a picture to get started! 😊</div>
                </div>
                <div className={styles.feed}>
                    {
                        tmpPics.map((s, i) =>
                            <Picture
                                className={styles.pictureCard}
                                key={i}
                                src={s} />)
                    }
                    {/* TODO: add picture list */}
                </div>
            </div>
        </div>
    )
}

export default Pick
