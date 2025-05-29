import { FC } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'
import styles from './index.module.scss'
import EditCanvas from './EditCanvas'
const Edit: FC = () => {
  const { loading, data } = useLoadQuestionData()
  return (
    <div className={styles.container}>
      <div style={{ backgroundColor: 'white', height: '50px' }}>Header</div>
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>left</div>
          <div className={styles.main}>
            <div
              className={styles['canvas-wrapper']}
              style={{ backgroundColor: 'white' }}
            >
              <div style={{ height: '1000px' }}>
                <EditCanvas />
              </div>
            </div>
          </div>
          <div className={styles.right}>right</div>
        </div>
      </div>
    </div>
  )
}

export default Edit
