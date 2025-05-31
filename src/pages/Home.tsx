import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import { MANAGE_LIST_PATH } from '../router'
import styles from '../components/HomeComponent/Home.module.scss'

const Home: FC = () => {
  const nav = useNavigate()
  const { Title, Paragraph } = Typography
  // useEffect(() => {
  //     // fetch('/api/test').then(
  //     //     res => res.json()
  //     // ).then(
  //     //     data => console.log('fetch data', data)
  //     // )
  //     axios.get('/api/test')
  //         .then(res => console.log('axios result', res))

  //     // render completely then use this function
  // }, [])
  useEffect(() => {
    fetch('/api/test')
      .then(res => res.json())
      .then(data => console.log('fetch data', data))

    // render completely then use this function
  }, [])
  // function clickLoginHandler(){
  //     //nav("/login?m=21")
  //     nav({
  //         pathname:"/login",
  //         search:"t=33"
  //     })
  // }
  //<Divider style={{borderColor:"transparent"}}/>
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>JM-Questionaire | Online-Voting</Title>
        <Paragraph>created 100+ published 50+ recieve 2000+</Paragraph>
        <div className={styles.Button}>
          <Button
            type="primary"
            size="large"
            icon={<LoginOutlined />}
            onClick={() => {
              nav(MANAGE_LIST_PATH)
            }}
          >
            Started
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
