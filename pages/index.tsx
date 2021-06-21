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
      <footer className={styles.footer}>
      </footer>
    </div >
  )
}

export default Start
