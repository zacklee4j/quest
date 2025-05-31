import React, { FC, useEffect, useState } from 'react'
import { Typography, Space } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import styles from './Logo.module.scss'
import { Link } from 'react-router-dom'
import useGetUserInfo from '../../hooks/useGetUserInfo'
import { MANAGE_LIST_PATH } from '../../router/index'
const { Title } = Typography
const Logo: FC = () => {
  const { username } = useGetUserInfo()
  const [pathName, SetPathName] = useState('/')
  useEffect(() => {
    if (username) {
      SetPathName(MANAGE_LIST_PATH)
    }
  }, [username])
  return (
    <>
      <Link to={pathName}>
        <Space className={styles.container}>
          <Title>
            <FormOutlined />
          </Title>
          <Title>JM-Questionaire</Title>
        </Space>
      </Link>
    </>
  )
}
export default Logo
