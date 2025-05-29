import { useSelector, UseSelector } from 'react-redux'
import { StateType } from '../store'
import { UserInfoType } from '../store/userReducer'

function useGetUserInfo() {
  const { username, nickname } = useSelector<StateType>(
    state => state.userInfo
  ) as UserInfoType
  return { username, nickname }
}

export default useGetUserInfo
