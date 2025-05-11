import { kMaxLength } from 'buffer'

/**
 * @description store user token
 * @auther JM
 *
 */
const KEY = 'userToken'
export function setToken(token: string) {
  localStorage.setItem(KEY, token)
}
export function getToken() {
  const token = localStorage.getItem(KEY) || ''
  return token
}
export function removeToken() {
  localStorage.removeItem(KEY)
}
