import React, { FC } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'

const Statistic: FC = () => {
  const { loading, data } = useLoadQuestionData()
  return (
    <div>
      <p>Statistic Page</p>
      <div>{loading ? <>loading</> : JSON.stringify(data)}</div>
    </div>
  )
}

export default Statistic
