import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React from 'react'


import { Config } from "../Config";

const Start = () => {
  return (
    <div className={styles.page}>
      <button className={styles.login}>Login as Admin</button>

      <br />
      <h1 className={styles.h1}>{Config.title}</h1>

      <br />
      <div className={styles.logo}>
        <Image
          src="/logo.png"
          alt="DFG Logo"
          width={137}
          height={205}
        />
      </div>

      <br />
      <button className={styles.start}>Start</button>
    </div>
  )
}

export default Start
