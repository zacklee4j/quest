/**
 * @description
 * @author JM
 *
 */
import { Tag } from 'antd'
export const TRASH_TABLE_TITLE = [
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
