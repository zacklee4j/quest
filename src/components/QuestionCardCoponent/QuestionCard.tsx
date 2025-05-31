import React, { FC, useState } from 'react'
import styles from './QuestionCard.module.scss'
import { Button, Divider, Space, Tag, Popconfirm, Modal, message } from 'antd'
import {
  duplicateQuestionService,
  updateQuestionService,
} from '../../services/question'
import { useRequest } from 'ahooks'
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  DeleteOutlined,
  CopyOutlined,
  StarFilled,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import { useNavigate, Link } from 'react-router-dom'

type PropsType = {
  _id: string
  title: string
  isPublished: boolean
  isStar: boolean
  isDelete: boolean
  answerCount: number
  createTime: string
}
const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const { _id, title, createTime, answerCount, isPublished, isStar } = props
  const nav = useNavigate()
  const [isStarState, setIsStarState] = useState(isStar)
  const [isDeleteState, setIsDeleteState] = useState(false)
  // function duplicate() {
  //   alert('Do Copying')
  // }
  const { loading: duplicateLoading, run: duplicateQuestion } = useRequest(
    async function () {
      const data = await duplicateQuestionService(_id)
      return data
    },
    {
      manual: true,
      onSuccess(result) {
        message.success('duplicate successfully!')
        nav(`/question/edit/${result.id}`)
      },
    }
  )
  const { confirm } = Modal
  const { loading: deleteLoading, run: deleteQuestion } = useRequest(
    async function () {
      const data = await updateQuestionService(_id, { isDelete: true })
      return data
    },
    {
      manual: true,
      onSuccess() {
        message.success('Delete Successfully!')
        setIsDeleteState(true)
      },
    }
  )
  function delQ() {
    confirm({
      title: 'Are you sure to delete it?',
      icon: <ExclamationCircleOutlined />,
      onOk: deleteQuestion,
    })
  }
  const { loading: isStarLoading, run: updateIsStar } = useRequest(
    async () => {
      await updateQuestionService(_id, { isStar: !isStarState })
    },
    {
      manual: true,
      onSuccess() {
        setIsStarState(!isStarState)
        message.success('update successfully!')
      },
    }
  )
  if (isDeleteState) return null
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link
            to={
              isPublished
                ? `/question/statistic/${_id}`
                : `/question/edit/${_id}`
            }
          >
            <Space align="baseline">
              {isStarState && (
                <StarOutlined style={{ color: 'red', fontSize: '14px' }} />
              )}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPublished ? (
              <Tag color="green">Published</Tag>
            ) : (
              <Tag color="volcano">NotPublished</Tag>
            )}
            <Tag color="pink">Answerd:{answerCount}</Tag>
            <Tag color="purple">{createTime}</Tag>
          </Space>
        </div>
      </div>
      <Divider
        style={{ borderColor: 'transparent', margin: '2px  0' }}
      ></Divider>
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <Space>
            <Button
              icon={<EditOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/edit/${_id}`)}
            >
              edit
            </Button>
            <Button
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/statistic/${_id}`)}
              disabled={!isPublished}
            >
              statistic
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button
              icon={isStarState ? <StarFilled /> : <StarOutlined />}
              type="text"
              size="small"
              onClick={updateIsStar}
            >
              {isStarState ? 'marked' : 'mark'}
            </Button>
            <Popconfirm
              title="Do you want to copy it?"
              okText="Yes"
              cancelText="No"
              onConfirm={duplicateQuestion}
              disabled={duplicateLoading}
            >
              <Button type="text" size="small" icon={<CopyOutlined />}>
                copy
              </Button>
            </Popconfirm>
            <Button
              type="text"
              size="small"
              icon={<DeleteOutlined />}
              onClick={() => {
                delQ()
              }}
              disabled={deleteLoading}
            >
              delete
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
export default QuestionCard
