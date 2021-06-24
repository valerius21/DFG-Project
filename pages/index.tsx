import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { nanoid } from 'nanoid'
import { UserOutlined } from '@ant-design/icons'
import { Input, Button, Typography } from 'antd'


import { Config } from "../Config";
import { useRouter } from "next/router";

const { Title, Paragraph, Text } = Typography

const Start = () => {
  const [userID, setUserID] = useState(nanoid())
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  return (
    <div>
      <div className={styles.page}>
        <br />
        <Title className={styles.h1}>{Config.title.toUpperCase()}</Title>

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

        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus expedita voluptate aliquid omnis itaque, aliquam rerum soluta asperiores aut, nostrum velit tempora nisi architecto necessitatibus, atque impedit veritatis fuga? Ullam.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio illum, tempora illo, earum facilis aliquid minus at necessitatibus quaerat voluptatibus est totam. Labore aliquid impedit ea recusandae suscipit unde et?
        </Paragraph>

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
