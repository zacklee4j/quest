import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Spin } from 'antd'
import useLoadUserData from '../hooks/useLoadUserData'
import useNavPage from '../hooks/useNavPage'
import Edit from '../pages/question/Edit'
const QuestionLayout: FC = () => {
  const { waitingUserData } = useLoadUserData()
  useNavPage(waitingUserData)
  return (
    <div style={{ height: '100vh' }}>
      <Edit />
      {/* {!waitingUserData?<div style={{textAlign:'center',marginTop:'60PX'}}><Spin/></div> :<Outlet />} */}
    </div>
  )
}

export default QuestionLayout
