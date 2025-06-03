import React, { FC } from 'react'
import { Space, Button, Tooltip } from 'antd'
import { DeleteFilled, EyeInvisibleOutlined } from '@ant-design/icons'
import {
  deleteSelectedComponent,
  hiddenSelectedComponent,
} from './../../../store/componentsReducer'
import { useDispatch } from 'react-redux'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'

const ToolBars: FC = () => {
  const dispatch = useDispatch()
  const { selectedId } = useGetComponentInfo()
  function handleDeleteComponent() {
    dispatch(deleteSelectedComponent())
  }

  function handleHiddenComponent() {
    dispatch(hiddenSelectedComponent({ fe_id: selectedId, isHidden: true }))
  }
  return (
    <Space direction="horizontal">
      <Tooltip title="delete">
        <Button
          shape="circle"
          icon={<DeleteFilled />}
          onClick={() => handleDeleteComponent()}
        ></Button>
      </Tooltip>

      <Tooltip title="hide">
        <Button
          shape="circle"
          icon={<EyeInvisibleOutlined />}
          onClick={() => handleHiddenComponent()}
        ></Button>
      </Tooltip>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
    </Space>
  )
}

export default ToolBars
