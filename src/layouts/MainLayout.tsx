import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import 'antd/dist/reset.css'
import { Layout } from 'antd'
import styles from './MainLayout.module.scss'
import Logo from '../components/Logo'
import UserInfo from '../components/UserInfo'

const { Header, Content, Footer } = Layout
const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Content className={styles.mid}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>
        JM-Questionaire &copy; 2025 - present createrd by JM
      </Footer>
    </Layout>
  )
}

export default MainLayout
