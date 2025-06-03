export type QuestionInputPropsType = {
  title?: string
  placeholder?: string

  onChange?: (newProps: QuestionInputPropsType) => void
}

export const QuestionInputDefaultProps: QuestionInputPropsType = {
  title: 'Input Box',
  placeholder: 'Default Value',
}
