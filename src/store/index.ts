import { configureStore } from '@reduxjs/toolkit'
import userReducer, { UserInfoType } from './userReducer'

export type StateType = {
  userInfo: UserInfoType
}

export default configureStore({
  reducer: {
    userInfo: userReducer,
  },
})
