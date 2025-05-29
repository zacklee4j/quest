export type QusetionTitlePropsType = {
  text?: string
  level?: 1 | 2 | 3 | 4 | 5
  isCenter?: boolean
}
export const QuestionTitleDefaultProps: QusetionTitlePropsType = {
  text: '标题',
  level: 1,
  isCenter: true,
}
