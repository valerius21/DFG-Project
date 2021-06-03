import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import React from 'react'


import { Config } from "../Config";

const Start = () => {
  return (
    <>
      <div className={styles.page}>
        <Link href='/login'>
          <button className={styles.login}>Login as Admin</button>
        </Link>
        <br />
        <h1 className={styles.h1}>{Config.title.toUpperCase()}</h1>

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
        <Link href="/feed">
          <button className={styles.start}>Start</button>
        </Link>


        {/* TODO: Add reactangles */}
        {/* <div className={styles.backR}></div> */}
        {/* <div className={styles.frontR}></div> */}
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#B92151" fillOpacity="1" d="M0,128L30,112C60,96,120,64,180,58.7C240,53,300,75,360,106.7C420,139,480,181,540,192C600,203,660,181,720,192C780,203,840,245,900,250.7C960,256,1020,224,1080,186.7C1140,149,1200,107,1260,117.3C1320,128,1380,192,1410,224L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      <div style={{ width: '100%', height: '20vh', background: '#B92151' }}></div>
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
