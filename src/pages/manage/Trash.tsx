import { FC, useEffect, useState } from 'react'
import styles from './Common.module.scss'
import {
  Empty,
  Typography,
  Table,
  Button,
  Space,
  Spin,
  message,
  Modal,
} from 'antd'
import ListSearch from '../../components/ListComponent/ListSearch'
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'
import ListPage from '../../components/ListComponent/ListPage'
import { TRASH_TABLE_TITLE } from '../../const/trashTitle'
import {
  updateQuestionService,
  deleteCompletelyService,
} from '../../services/question'
import { useRequest } from 'ahooks'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const { confirm } = Modal
const Trash: FC = () => {
  //const questionListData = [{}]
  const { Title } = Typography
  const {
    data = {},
    loading,
    refresh,
  } = useLoadQuestionListData({ isDeleted: true })
  const { list = [], total = 0 } = data
  const tableColumn = TRASH_TABLE_TITLE
  const [selectIds, setSelectedIds] = useState<string[]>([])
  const { run: restoreQuestion } = useRequest(
    async function (_id) {
      for await (const _id of selectIds) {
        await updateQuestionService(_id, { isDelete: false })
      }
    },
    {
      manual: true,
      debounceWait: 500,
      onSuccess() {
        message.success('Restore Question Successfully!')
        refresh()
        setSelectedIds([])
      },
    }
  )
  const { run: completeleDelete } = useRequest(
    async () => {
      await deleteCompletelyService(selectIds)
    },
    {
      manual: true,
      onSuccess() {
        message.success('Completely Deleted!')
        refresh()
        setSelectedIds([])
      },
    }
  )
  function delQ() {
    confirm({
      title: 'This Option Can Not Cancle!',
      icon: <ExclamationCircleOutlined />,
      onOk: completeleDelete,
    })
  }

  const ContentElement = (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button danger disabled={selectIds.length === 0} onClick={delQ}>
            Comoletely Delete
          </Button>
          <Button
            type="primary"
            disabled={selectIds.length === 0}
            onClick={restoreQuestion}
          >
            Restore
          </Button>
        </Space>
      </div>
      <div>
        <Table
          rowSelection={{
            type: 'checkbox',
            onChange: seletedRowKeys => {
              setSelectedIds(seletedRowKeys as string[])
            },
          }}
          dataSource={list}
          columns={tableColumn}
          pagination={false}
          rowKey={(q: any) => q._id}
        />
      </div>
    </>
  )
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>Trash</Title>
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
          ContentElement
        )}
      </div>
      <div className={styles.footer}>
        <ListPage total={total} />
      </div>
    </div>
  )
}

export default Trash
