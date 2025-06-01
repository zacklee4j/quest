/**
 * @description questionaire's Input component
 *
 */
import Component from './Components'
import { QuestionInputDefaultProps } from './Interface'
// to do what?
export * from './Interface'

export default {
  title: 'InputBox',
  type: 'InputComponent', // should be the same with backend
  Component,
  defaultProps: QuestionInputDefaultProps,
}
