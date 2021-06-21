import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { nanoid } from 'nanoid'
import { UserOutlined } from '@ant-design/icons'
import { Input, Button } from 'antd'


import { Config } from "../Config";
import { useRouter } from "next/router";

const Start = () => {
  const [userID, setUserID] = useState(nanoid())
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  return (
    <div>
      {/* // <div className={styles.wrapper}> */}
      {/* <div className={styles.content}> */}
      <div className={styles.page}>
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
        <Input onChange={event => {
          event.preventDefault()
          setUserID(event.target.value)
        }} size="large" placeholder="User ID (optional)" prefix={<UserOutlined />} />
        <br />
        <br />
        <Button onClick={() => {
          setLoading(true)
          router.push(`/${userID}`)
        }}
          type="primary"
          size="large"
          loading={loading}
        >Start</Button>
      </div>

      {/* <div className={styles.footer}> */}

      <div className={styles.waves}>
        <svg id="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#B92151" fillOpacity="1" d="M0,128L30,112C60,96,120,64,180,58.7C240,53,300,75,360,106.7C420,139,480,181,540,192C600,203,660,181,720,192C780,203,840,245,900,250.7C960,256,1020,224,1080,186.7C1140,149,1200,107,1260,117.3C1320,128,1380,192,1410,224L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      </div>
      {/* // </div> */}
      {/* // </div> */}
      {/* <div style={{ width: '100%', height: '20vh', background: '#B92151' }}></div> */}
    </div >
  )
}

export default Start
