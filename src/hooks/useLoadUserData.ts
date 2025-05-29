import { useEffect, useState } from 'react'
import useGetUserInfo from './useGetUserInfo'
import { useRequest } from 'ahooks'
import { getUserInfoService } from '../services/user'
import { useDispatch } from 'react-redux'
import { loginReducer } from '../store/userReducer'

function useLoadUserData() {
  const [waitingUserData, setWaitingUserData] = useState(true)
  const dispatch = useDispatch()
  // AJAX load userinfo and put userinfo into redux,not to return userinfo
  const { run } = useRequest(getUserInfoService, {
    manual: true,
    onSuccess(result) {
      // store userinfo into reduxwith dispatch
      const { username, nickname } = result
      dispatch(loginReducer({ username, nickname }))
    },
    onFinally() {
      setWaitingUserData(false)
    },
  })
  const { username } = useGetUserInfo()
  useEffect(() => {
    // check is the userinfo exixted in redux store
    if (username) {
      // if there exists userinfo in redux,don't need to load userinfo again
      setWaitingUserData(false)

      return
    }
    run()
  }, [username])
  return { waitingUserData }
}

export default useLoadUserData
