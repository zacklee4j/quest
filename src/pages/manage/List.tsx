import { FC } from 'react'
// import mockData from "../../mockInfo/mockData"
import styles from './Common.module.scss'
import QuestionCard from '../../components/QuestionCard'
// import { useSearchParams } from "react-router-dom"
import { Typography, Spin } from 'antd'
import ListSearch from '../../components/ListSearch'
// import { getQuestionListService } from "../../services/question"
// import { useRequest } from 'ahooks'
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'

const List: FC = () => {
  // const [list, setList] = useState([])
  // const [total, setTotal] = useState(0)
  // useEffect(() => {
  //     async function load() {
  //         const data = await getQuestionListService()
  //         const { list = [], total = 0 } = data
  //         console.log(data)
  //         setList(list)
  //         setTotal(total)

  //     }
  //     load()
  // }, [])
  // console.log(list.length)

  const { data = {}, loading } = useLoadQuestionListData()
  const { list = [], total = 0 } = data
  const { Title } = Typography
  // const [searchParams] = useSearchParams()
  // console.log("kkk",searchParams.get("kkk"))
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>My-Questionare</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {/* check list not null */}
        <div>
          {loading && (
            <div style={{ textAlign: 'center' }}>
              <Spin />
            </div>
          )}
        </div>
        {!loading &&
          list.length > 0 &&
          list.map((q: any) => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })}
      </div>
      <div className={styles.footer}>load more...</div>
    </div>
  )
}
export default List
