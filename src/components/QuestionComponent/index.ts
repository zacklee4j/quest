import type { FC } from 'react'
import QuestionInputConf, { QuestionInputPropsType } from './QuestionInput'
import QuestionTitleConf, { QuestionTitlePropsType } from './QuestionTitle'

// component props config
export type ComponentPropsType = QuestionInputPropsType & QuestionTitlePropsType

//cmponent config
export type ComponentConfType = {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  PropsComponent: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
}
// list of all conponents' props
const componentConfList: ComponentConfType[] = [
  QuestionInputConf,
  QuestionTitleConf,
]
export const componentGroup = [
  {
    groupId: 'Input',
    groupName: 'Input',
    components: [QuestionInputConf],
  },
  {
    groupId: 'Display',
    groupName: 'Display',
    components: [QuestionTitleConf],
  },
]
export function getComponentConfByType(type: string) {
  return componentConfList.find(c => c.type === type)
}
