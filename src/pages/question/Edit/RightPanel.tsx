import React, { FC } from 'react'
import { Tabs } from 'antd'
import { SettingOutlined, FileTextFilled } from '@ant-design/icons'
import ComponentProp from './ComponentProp'

const RightPanel: FC = () => {
  const rightTableItems = [
    {
      key: 'Propties',
      label: (
        <div>
          <FileTextFilled />
          Props
        </div>
      ),
      children: (
        <div>
          {' '}
          <ComponentProp />{' '}
        </div>
      ),
    },
    {
      key: 'Settings',
      label: (
        <div>
          <SettingOutlined />
          Settings
        </div>
      ),
      children: <div> setting </div>,
    },
  ]
  return <Tabs defaultValue="Propties" items={rightTableItems}></Tabs>
}

export default RightPanel
