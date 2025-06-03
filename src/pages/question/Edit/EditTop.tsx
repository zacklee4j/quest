import React, { FC } from 'react'
import styles from './editStyle/EditTop.module.scss'
import { useNavigate } from 'react-router-dom'
import { LeftSquareOutlined } from '@ant-design/icons'
import { MANAGE_LIST_PATH } from '../../../router'
import { Typography, Space } from 'antd'
import ToolBars from './ToolBars'

const { Title } = Typography
const EditTop: FC = () => {
  const nav = useNavigate()
  function backToList() {
    nav(MANAGE_LIST_PATH)
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.content} style={{ justifyItems: 'center' }}>
        <div className={styles.editLeft} onClick={() => backToList()}>
          <div>
            <Space>
              <LeftSquareOutlined />
              <Title className={styles.title}>QuestionTitle</Title>
            </Space>
          </div>
        </div>
        <div className={styles.editMain}>
          <ToolBars />
        </div>
        <div className={styles.editRight}>nihao</div>
      </div>
    </div>
  )
}

export default EditTop
