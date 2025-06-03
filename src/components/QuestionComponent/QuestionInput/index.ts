/**
 * @description questionaire's Input component
 *
 */
import Component from './Components'
import PropsComponent from './InputComponentProps'
import { QuestionInputDefaultProps } from './Interface'
// to do what?
export * from './Interface'

export default {
  title: 'InputBox',
  type: 'InputComponent', // should be the same with backend
  Component,
  PropsComponent,
  defaultProps: QuestionInputDefaultProps,
}
