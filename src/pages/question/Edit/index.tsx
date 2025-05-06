import { FC } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'
const Edit: FC = () => {
  const { loading, data } = useLoadQuestionData()
  return (
    <div>
      <p>Edit Page</p>
      <div>{loading ? <>loading</> : JSON.stringify(data)}</div>
    </div>
  )
}

export default Edit
