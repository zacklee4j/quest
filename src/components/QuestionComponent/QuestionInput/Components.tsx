import React, { FC } from 'react'
import { Typography, Input } from 'antd'
import { QuestionTitleDefaultProps, QuestiongInputPropsType } from './Interface'

const { Paragraph } = Typography
const QuestionInput: FC<QuestiongInputPropsType> = (
  props: QuestiongInputPropsType
) => {
  const { title = '', placeholder = '' } = {
    ...QuestionTitleDefaultProps,
    ...props,
  }
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <Input placeholder={placeholder}></Input>
      </div>
    </div>
  )
}

export default QuestionInput
