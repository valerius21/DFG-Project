import React from 'react'
import styles from '../styles/Done.module.css'

const Done = () => {
    return (
        <div>
            <div className={styles.item1}></div>
            <div className={styles.blob}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#830029" fill-opacity="1" d="M0,128L30,106.7C60,85,120,43,180,48C240,53,300,107,360,149.3C420,192,480,224,540,245.3C600,267,660,277,720,282.7C780,288,840,288,900,250.7C960,213,1020,139,1080,112C1140,85,1200,107,1260,122.7C1320,139,1380,149,1410,154.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>

            </div>
            <h1 className={styles.done}>Done! 🎉</h1>
            <img className={styles.logo} src="/done_logo.png" alt="done logo" />
            <p className={styles.thanks}>
                Thanks for participating!
                </p>
            <p className={styles.emoji}>
                😁 👋
            </p>
        </div>
    )
}

export default Done
