import { FC, useState, useEffect, useRef, useMemo } from 'react'
// import mockData from "../../mockInfo/mockData"
import styles from './Common.module.scss'
import QuestionCard from '../../components/QuestionCard'
import { useSearchParams } from 'react-router-dom'
import { Typography, Spin, Empty } from 'antd'
import ListSearch from '../../components/ListSearch'
import { getQuestionListService } from '../../services/question'
import { useDebounceFn, useRequest } from 'ahooks'
import {
  LIST_PAGE_SIZE,
  LIST_SEARCH_PARAM_KEY,
} from '../../const/serchconstant'
// import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'

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

  // loadmore don't use the way up here
  const [started, setStarted] = useState(false)
  const [page, setPage] = useState(1)
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  const couldLoadMore = total > list.length
  const [searchParams] = useSearchParams()
  //
  const containerReffer = useRef<HTMLDivElement>(null)
  const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
  //
  const { loading, run: load } = useRequest(
    async () => {
      const data = await getQuestionListService({
        page,
        pageSize: LIST_PAGE_SIZE,
        keyword,
      })
      return data
    },
    {
      manual: true,
      onSuccess(result) {
        const { list: l = [], total = 0 } = result
        setList(list.concat(l))
        setTotal(total)
        setPage(page + 1)
      },
    }
  )
  // loadmore function
  const { run: tryLoadMore } = useDebounceFn(
    () => {
      //console.log('loading more')
      const elem = containerReffer.current
      if (elem == null) return
      const domRect = elem.getBoundingClientRect()
      if (domRect == null) return
      const { bottom } = domRect
      if (bottom <= document.body.clientHeight) {
        load()
        setStarted(true)
      }
    },
    {
      wait: 1000,
    }
  )
  // when updating keyword, render page again
  useEffect(() => {
    setList([])
    setTotal(0)
    setPage(1)
    setStarted(false)
  }, [keyword])
  // when redering for the first time,call loadmore function--->useEffect
  useEffect(() => {
    tryLoadMore()
  }, [searchParams])
  // when scrolling bottom, call loadmore function--->useEffect + listen
  useEffect(() => {
    if (couldLoadMore) {
      window.addEventListener('scroll', tryLoadMore)
      return () => {
        window.removeEventListener('scroll', tryLoadMore)
      }
    }
  }, [searchParams, couldLoadMore])
  const LoadItem = useMemo(() => {
    if (!started || loading) return <Spin />
    if (total === 0) return <Empty />
    if (!couldLoadMore) return <span>no more data...</span>
    return <span>starting load</span>
  }, [loading, started, total, couldLoadMore])
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
        {/* <div>
          {
            loading && (
              <div style={{ textAlign: 'center' }}>
                <Spin />
              </div>
            )}
        </div> */}
        {list.length > 0 &&
          list.map((q: any) => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })}
      </div>
      {/* <div style={{ height: '2000px' }}></div> */}
      <div className={styles.footer}>
        <div ref={containerReffer}>{LoadItem}</div>
      </div>
    </div>
  )
}
export default List
