import React, { FC } from 'react'
import styles from './Common.module.scss'
import QuestionCard from '../../components/QuestionCard'
import { Empty, Typography, Spin } from 'antd'
import ListSearch from '../../components/ListSearch'
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'

const Star: FC = () => {
  //const questionListData = [{}]
  const { Title } = Typography
  const { data = {}, loading } = useLoadQuestionListData({ isStar: true })
  const { list = [], total = 0 } = data
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>Star</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {/* check list not null */}
        {loading ? (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        ) : list.length < 1 ? (
          <Empty description="Nothing Here."></Empty>
        ) : (
          list.map((q: any) => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })
        )}
      </div>
      <div className={styles.footer}>Pages</div>
    </div>
  )
}

export default Star
