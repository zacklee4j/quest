import { useLoaderData } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {
  isLoginOrRegistered,
  isNoNeedUserInfo,
  LOGIN_PATH,
  MANAGE_LIST_PATH,
} from '../router'
import useGetUserInfo from './useGetUserInfo'

function useNavPage(waitingUserData: boolean) {
  const { username } = useGetUserInfo()
  const { pathname } = useLocation()
  const nav = useNavigate()
  useEffect(() => {
    if (waitingUserData) return
    // login
    if (username) {
      if (isLoginOrRegistered(pathname)) {
        nav(MANAGE_LIST_PATH)
      }
      return
    }
    // logout
    if (isNoNeedUserInfo(pathname)) {
      return
    } else {
      nav(LOGIN_PATH)
    }
  }, [waitingUserData, username, pathname])
}
export default useNavPage
