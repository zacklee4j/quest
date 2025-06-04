import React, { FC } from 'react'
import { Space, Button, Tooltip } from 'antd'
import {
  DeleteFilled,
  EyeInvisibleOutlined,
  LockOutlined,
  CopyOutlined,
  BlockOutlined,
} from '@ant-design/icons'
import {
  deleteSelectedComponent,
  hiddenSelectedComponent,
  lockSelectedComponent,
  copySelectedComponent,
  pasteCopiedComponent,
} from './../../../store/componentsReducer'
import { useDispatch } from 'react-redux'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'

const ToolBars: FC = () => {
  const dispatch = useDispatch()
  const { selectedId, selectedComponent, copiedComponent } =
    useGetComponentInfo()
  const { isLocked } = selectedComponent || {}
  function handleDeleteComponent() {
    dispatch(deleteSelectedComponent())
  }

  function handleHiddenComponent() {
    dispatch(hiddenSelectedComponent({ fe_id: selectedId, isHidden: true }))
  }
  function handleLockComponent() {
    dispatch(lockSelectedComponent({ fe_id: selectedId }))
  }
  function handleCopyComponent() {
    dispatch(copySelectedComponent())
  }
  function handlePasteComponent() {
    dispatch(pasteCopiedComponent())
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
      <Tooltip title="lock">
        <Button
          shape="circle"
          icon={<LockOutlined />}
          onClick={() => handleLockComponent()}
          type={isLocked ? 'primary' : 'default'}
        ></Button>
      </Tooltip>

      <Tooltip title="copy">
        <Button
          shape="circle"
          icon={<CopyOutlined />}
          onClick={() => handleCopyComponent()}
        ></Button>
      </Tooltip>
      <Tooltip title="paste">
        <Button
          shape="circle"
          icon={<BlockOutlined />}
          onClick={() => handlePasteComponent()}
          disabled={copiedComponent === null}
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
    </Space>
  )
}

export default ToolBars
