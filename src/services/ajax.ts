import axios from 'axios'
import { message } from 'antd'

const ajaxInterface = axios.create({
  timeout: 10 * 1000,
})

// reponse intercept
ajaxInterface.interceptors.response.use(res => {
  // convrt to {}
  const resData = (res.data || {}) as ResDataType
  const { errno, data, msg } = resData
  if (errno !== 0) {
    // error hint
    if (msg) {
      message.error(msg)
      // throw new Error(msg)
    }
  }
  return data as any
})
export default ajaxInterface

export type ResType = {
  errno: number
  data?: ResDataType
  msg?: string
}
// supplement type
export type ResDataType = {
  [key: string]: any
}
