import React from 'react'
import styles from '../styles/Done.module.css'

const Done = () => {
    return (
        <div>
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
