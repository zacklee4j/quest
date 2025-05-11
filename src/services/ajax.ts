import axios from 'axios'
import { message } from 'antd'
import { getToken } from '../utils/userToken'

const ajaxInstance = axios.create({
  timeout: 10 * 1000,
})
// set user token to request header
const userToken = getToken() || ''
ajaxInstance.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer ${userToken}`
    return config
  },
  error => {
    Promise.reject(error)
  }
)
// reponse intercept
ajaxInstance.interceptors.response.use(res => {
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
export default ajaxInstance

// resdata type
export type ResType = {
  errno: number
  data?: ResDataType
  msg?: string
}
// supplement type
export type ResDataType = {
  [key: string]: any
}
