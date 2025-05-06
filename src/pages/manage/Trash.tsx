import { FC, useState } from 'react'
import styles from './Common.module.scss'
import { Empty, Typography, Table, Tag, Button, Space, Spin } from 'antd'
import ListSearch from '../../components/ListSearch'
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'

const Trash: FC = () => {
  //const questionListData = [{}]
  const { Title } = Typography
  const { data = {}, loading } = useLoadQuestionListData({ isDeleted: true })
  const { list = [], total = 0 } = data
  const tableColumn = [
    {
      title: 'questionaire',
      dataIndex: 'title',
    },
    {
      title: 'AnsweredCount',
      dataIndex: 'answerCount',
    },
    {
      title: 'Created',
      dataIndex: 'createTime',
    },
    {
      title: 'Status',
      dataIndex: 'isPublished',
      render: (isPublished: boolean) => {
        return isPublished ? (
          <Tag color="green">Published</Tag>
        ) : (
          <Tag color="volcano">NotPublished</Tag>
        )
      },
    },
  ]
  const [selectIds, setSelectedIds] = useState<string[]>([])
  function cplDelete() {
    if (window.confirm('CHeck Again？')) {
      console.log('Checked!')
      alert('删除' + selectIds)
    } else {
      console.log('Cancled!')
    }
  }
  function restore() {}
  const ContentElement = (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button danger disabled={selectIds.length === 0} onClick={cplDelete}>
            Comoletely Delete
          </Button>
          <Button type="primary" disabled={selectIds.length === 0} onClick={restore}>
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
          rowKey={(q: any) => q.id}
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
      <div className={styles.footer}>Pages</div>
    </div>
  )
}

export default Trash
