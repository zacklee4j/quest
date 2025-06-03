import React, { FC, MouseEvent } from 'react'
import styles from './editStyle/EditCanvas.module.scss'
// import QuestionTitle from '../../../components/QuestionComponent/QuestionTitle/Components'
// import QuestionInput from '../../../components/QuestionComponent/QuestionInput/Components'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { Spin } from 'antd'
import { getComponentConfByType } from '../../../components/QuestionComponent'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import {
  ComponentInfoType,
  changeSelectedId,
} from '../../../store/componentsReducer/index'

type EditCanvasType = {
  loading: boolean
}
// define a function  component genComponent uout of FC,genComponent will not register every single time when FC rerender.
function genComponent(componentInfo: ComponentInfoType) {
  const { type, props } = componentInfo
  const componentConf = getComponentConfByType(type)
  if (!componentConf) {
    return null
  } else {
    const { Component } = componentConf
    return (
      <div>
        <Component {...props} />
      </div>
    )
  }
}
const EditCanvas: FC<EditCanvasType> = ({ loading }) => {
  const { componentsList, selectedId } = useGetComponentInfo()
  const dispatch = useDispatch()
  function handleClick(event: MouseEvent, id: string) {
    event.stopPropagation()
    dispatch(changeSelectedId(id))
  }

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <Spin />
      </div>
    )
  }
  return (
    <div className={styles.canvas}>
      {componentsList
        .filter(c => !c.isHidden)
        .map(c => {
          // hide component when its hidden propty is true
          const { fe_id } = c
          const wrapperDefaultClassName = styles['component-wrapper']
          const selectedIdClassName = styles['selected']
          const wrapperClassName = classNames({
            [wrapperDefaultClassName]: true,
            [selectedIdClassName]: fe_id === selectedId,
          })

          return (
            <div
              key={fe_id}
              className={wrapperClassName}
              onClick={e => handleClick(e, fe_id)}
            >
              <div className={styles.component}>{genComponent(c)}</div>
            </div>
          )
        })}
    </div>
  )
}

export default EditCanvas
