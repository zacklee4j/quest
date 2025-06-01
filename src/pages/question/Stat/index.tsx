import React, { FC } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'

const Statistic: FC = () => {
  const { loading } = useLoadQuestionData()
  return (
    <div>
      <p>Statistic Page</p>
      <div>{loading ? <>loading</> : JSON.stringify('<----------->')}</div>
    </div>
  )
}

export default Statistic
