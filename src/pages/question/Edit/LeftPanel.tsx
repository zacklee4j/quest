import React, { FC } from 'react'
import { Tabs } from 'antd'
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import Lib from './Lib'

const LeftPanel: FC = () => {
  const leftTableItem = [
    {
      key: 'ComponentLib',
      label: (
        <span>
          <AppstoreOutlined />
          componentLib
        </span>
      ),
      children: (
        <div>
          <Lib />
        </div>
      ),
    },
    {
      key: 'Coverage',
      label: (
        <span>
          <BarsOutlined />
          ComponentCoveraged
        </span>
      ),
      children: <div>coverage</div>,
    },
  ]
  return <Tabs defaultActiveKey="ComponentLib" items={leftTableItem} />
}
export default LeftPanel
