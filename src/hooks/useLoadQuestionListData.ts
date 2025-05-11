import { useRequest } from 'ahooks'
import { useSearchParams } from 'react-router-dom'
import { getQuestionListService } from '../services/question'
import {
  LIST_SEARCH_PARAM_KEY,
  LIST_PAGESIZE_PARAM_KEY,
  LIST_PAGE_PARAM_KEY,
} from '../const/serchconstant'

type OptionType = {
  isStar: boolean
  isDeleted: boolean
  pageSize: number
  page: number
}

function useLoadQuestionListData(opt: Partial<OptionType> = {}) {
  const { isStar, isDeleted } = opt
  const [searchParams] = useSearchParams()
  const { data, loading, error, refresh } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
      const page = parseInt(searchParams.get(LIST_PAGE_PARAM_KEY) || '') || 1
      const pageSize =
        parseInt(searchParams.get(LIST_PAGESIZE_PARAM_KEY) || '') || 10
      const data = await getQuestionListService({
        keyword,
        isStar,
        isDeleted,
        page,
        pageSize,
      })
      return data
    },
    { refreshDeps: [searchParams] }
  )
  return { data, loading, error, refresh }
}
export default useLoadQuestionListData
