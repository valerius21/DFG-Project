import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { nanoid } from 'nanoid'
import { useTranslation } from "react-i18next";
import { UserOutlined } from '@ant-design/icons'
import { Input, Button, Typography } from 'antd'


import { Config } from "../Config";
import { useRouter } from "next/router";

const { Title, Paragraph } = Typography

const Start = () => {
  const [userID, setUserID] = useState(nanoid())
  const [loading, setLoading] = useState(false)
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <div>
      <div className={styles.page}>
        <br />
        <Title className={styles.h1}>{t('title')}</Title>

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
          {t('description')}
        </Paragraph>

        <br />
        <Input onChange={event => {
          event.preventDefault()
          setUserID(event.target.value)
        }} size="large" placeholder={t('uid')} prefix={<UserOutlined />} />
        <br />
        <br />
        <Button onClick={() => {
          setLoading(true)
          router.push(`/${userID}`)
        }}
          type="primary"
          size="large"
          loading={loading}
        >{t('start')}</Button>
      </div>
      <footer className={styles.footer}>
      </footer>
    </div >
  )
}

export default Start
