import React, { FC } from 'react'
import styles from './EditCanvas.module.scss'
import QuestionTitle from '../../../components/QuestionComponent/QuestionTitle/Components'
import QuestionInput from '../../../components/QuestionComponent/QuestionInput/Components'

const EditCanvas: FC = () => {
  return (
    <div className={styles.canvas}>
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionTitle />
        </div>
      </div>
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionInput />
        </div>
      </div>
    </div>
  )
}

export default EditCanvas
