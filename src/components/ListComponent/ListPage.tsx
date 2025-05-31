import React, { FC, useState, useEffect } from 'react'
import { Pagination } from 'antd'
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom'
import {
  LIST_PAGE_SIZE,
  LIST_PAGESIZE_PARAM_KEY,
  LIST_PAGE_PARAM_KEY,
} from '../../const/serchconstant'

type PropsType = {
  total: number
}
const ListPage: FC<PropsType> = (props: PropsType) => {
  const { total } = props
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPageSize, setCurrentPageSize] = useState(LIST_PAGE_SIZE)
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const tempPage = parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || '') || 1
    const tempPageSize =
      parseInt(searchParams.get(LIST_PAGESIZE_PARAM_KEY) || '') ||
      LIST_PAGE_SIZE
    setCurrentPage(tempPage)
    setCurrentPageSize(tempPageSize)
  }, [searchParams])
  // reset url when page and pageSize change
  const nav = useNavigate()
  const { pathname } = useLocation()
  function pageChangeHandler(page: number, pageSize: number) {
    searchParams.set(LIST_PAGE_PARAM_KEY, page.toString())
    searchParams.set(LIST_PAGESIZE_PARAM_KEY, pageSize.toString())
    nav({
      pathname,
      search: searchParams.toString(),
    })
    console.log('now:', page, '  ', pageSize)
  }
  return (
    <>
      <Pagination
        current={currentPage}
        total={total}
        pageSize={currentPageSize}
        onChange={pageChangeHandler}
      />
    </>
  )
}

export default ListPage
