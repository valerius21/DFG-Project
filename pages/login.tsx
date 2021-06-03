import React from 'react'
import Link from 'next/link'
import ArrowBtn from '../components/ArrowButton'
import { LoginForm } from '../components/LoginForm'
import styles from '../styles/Login.module.css'

const Login = () => {
    return (
        <div>
            <div className={styles.upperPage}>
                <Link href="/">
                    <div>
                        <ArrowBtn />
                    </div>
                </Link>
                <h1 className={styles.title}>Dashboard</h1>
                <img className={styles.picture} src="/login.png" alt="login logo" />
            </div>

            <div className={styles.lowerPage}>
                <LoginForm className={styles.login} />
            </div>
        </div>

    )
}

export default Login
