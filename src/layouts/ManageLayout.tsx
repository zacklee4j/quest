import { FC } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import styles from './ManageLayout.module.scss'
import { Button, Space, Divider, message } from 'antd'
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons'
import { createQuestionService } from '../services/question'
import { DYNAMIIC_EDIT_PATH } from '../router'
import { useRequest } from 'ahooks'

const ManageLayout: FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()
  // const [loading, setLoading] = useState(false)
  // async function handleCreateQuestion() {
  //     setLoading(true)
  //     const data = await createQuestionService()
  //     const { id } = data || {}
  //     if (id) {
  //         nav(`${DYNAMIIC_EDIT_PATH}/${id}`)
  //         message.success('Successfully Created!')
  //     }
  //     setLoading(false)
  // }
  const {
    loading,
    error,
    run: handleCreateQuestion,
  } = useRequest(createQuestionService, {
    manual: true,
    onSuccess: result => {
      nav(`${DYNAMIIC_EDIT_PATH}/${result.id}`)
      message.success('Successfully Created!')
    },
  })
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left}>
          <Space direction="vertical">
            <Button
              type="primary"
              size="large"
              icon={<PlusOutlined />}
              onClick={handleCreateQuestion}
              disabled={loading}
            >
              Add
            </Button>
            <Divider style={{ borderTop: 'transparent', margin: '2px  0' }} />
            <Button
              type={pathname.startsWith('/manage/list') ? 'default' : 'text'}
              size="large"
              icon={<BarsOutlined />}
              onClick={() => {
                nav('/manage/list')
              }}
            >
              Questionaire
            </Button>
            <br />
            <Button
              type={pathname.startsWith('/manage/star') ? 'default' : 'text'}
              size="large"
              icon={<StarOutlined />}
              onClick={() => {
                nav('/manage/star')
              }}
            >
              Star
            </Button>
            <br />
            <Button
              type={pathname.startsWith('/manage/trash') ? 'default' : 'text'}
              size="large"
              icon={<DeleteOutlined />}
              onClick={() => {
                nav('/manage/trash')
              }}
            >
              Trash
            </Button>
            <br />
          </Space>
        </div>
        <div className={styles.right}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default ManageLayout
