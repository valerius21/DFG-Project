import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import React from 'react'


import { Config } from "../Config";

const Start = () => {
  return (
    <>
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
        <Link href="/pick">
          <button className={styles.start}>Start</button>
        </Link>


        {/* TODO: Add reactangles */}
        {/* <div className={styles.backR}></div> */}
        {/* <div className={styles.frontR}></div> */}
      </div>
      {/* <svg className={styles.svg} width="100%" height="290" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="5000" height="70%"
          // <rect x="-0.398621" width="5000" height="368"
          // transform="rotate(21.1205 -0.398621 0)" 
          fill="#B92151" />
      </svg> */}
    </>
  )
}

export default Start
