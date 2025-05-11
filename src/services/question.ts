import axios, { ResDataType } from './ajax'

type searchOption = {
  keyword: string
  isStar: boolean
  isDeleted: boolean
  pageSize: number
  page: number
  ids: string[]
}
export async function getQuestionService(id: string): Promise<ResDataType> {
  const url = `/api/question/${id}`
  const data = (await axios.get(url)) as ResDataType
  return data
}
export async function createQuestionService(): Promise<ResDataType> {
  const url = `/api/question`
  const data = (await axios.post(url)) as ResDataType
  return data
}

export async function getQuestionListService(
  opt: Partial<searchOption> = {}
): Promise<ResDataType> {
  const url = `/api/question`
  const data = (await axios.get(url, { params: opt })) as ResDataType
  return data
}
export async function updateQuestionService(
  id: string,
  opt: { [key: string]: any }
): Promise<ResDataType> {
  const url = `/api/question/update/${id}`
  const data = await axios.patch(url, opt)
  return data
}
export async function duplicateQuestionService(
  id: string
): Promise<ResDataType> {
  const url = `/api/question/duplicate/${id}`
  const data = (await axios.post(url)) as ResDataType
  return data
}
export async function deleteCompletelyService(
  ids: string[]
): Promise<ResDataType> {
  const url = `/api/question`
  const data = (await axios.delete(url, { data: { ids } })) as ResDataType
  return data
}
