/**
 * @description questionaire's Title component
 *
 */

import Component from './Components'
import { QuestionTitleDefaultProps } from './Interface'
import PropsComponent from './TitleComponentProps'
export * from './Interface'

export default {
  title: 'Title',
  type: 'TitleComponent',
  Component,
  PropsComponent,
  defaultProps: QuestionTitleDefaultProps,
}
