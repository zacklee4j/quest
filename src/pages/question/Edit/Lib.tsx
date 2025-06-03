import React, { FC } from 'react'
import { Typography } from 'antd'
import {
  ComponentConfType,
  componentGroup,
} from '../../../components/QuestionComponent'
import styles from './editStyle/ComponentsLib.module.scss'

import { nanoid } from 'nanoid'
import { addNewComponent } from '../../../store/componentsReducer/index'
import { useDispatch } from 'react-redux'

function GenComponent(c: ComponentConfType) {
  const { title, type, Component, defaultProps } = c
  const dispatch = useDispatch()

  function useHandleClickLeftPanel() {
    dispatch(
      addNewComponent({
        fe_id: nanoid(),
        title,
        type,
        props: defaultProps,
      })
    )
  }
  return (
    <div
      key={type}
      className={styles.wrapper}
      onClick={useHandleClickLeftPanel}
    >
      <div className={styles.component}>
        <Component />
      </div>
    </div>
  )
}
const { Title } = Typography
const Lib: FC = () => {
  return (
    <div>
      {componentGroup.map((item, index) => {
        const { groupName, groupId, components } = item
        return (
          <div key={groupId}>
            <Title
              level={3}
              style={{ fontSize: '16px', marginTop: index > 0 ? '20px' : '0' }}
            >
              {groupName}
            </Title>
            <div>{components.map(c => GenComponent(c))}</div>
          </div>
        )
      })}
    </div>
  )
}
export default Lib
