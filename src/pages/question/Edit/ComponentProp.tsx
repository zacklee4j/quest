import React, { FC } from 'react'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import {
  ComponentPropsType,
  getComponentConfByType,
} from '../../../components/QuestionComponent'
import { useDispatch } from 'react-redux'
import { changeComponentProps } from '../../../store/componentsReducer'

const NoReply: FC = () => {
  return <div style={{ textAlign: 'center' }}> No Component selected !</div>
}

const ComponentProp: FC = () => {
  const { selectedComponent } = useGetComponentInfo()
  const dispatch = useDispatch()
  if (!selectedComponent) return <NoReply />
  const { type, props } = selectedComponent
  const componentConf = getComponentConfByType(type)
  if (!componentConf) return <NoReply />
  const { PropsComponent } = componentConf

  function changeProps(newProps: ComponentPropsType) {
    if (!selectedComponent) return null
    const { fe_id } = selectedComponent
    dispatch(changeComponentProps({ fe_id, newProps }))
    console.log('newProps', newProps)
  }

  return <PropsComponent {...props} onChange={changeProps} />
}
export default ComponentProp
