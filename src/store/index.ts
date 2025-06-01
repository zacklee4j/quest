import { configureStore } from '@reduxjs/toolkit'
import userReducer, { UserInfoType } from './userReducer'
import componentReducer, { ComponentsStateType } from './componentsReducer'

export type StateType = {
  userInfo: UserInfoType
  components: ComponentsStateType
}

export default configureStore({
  reducer: {
    userInfo: userReducer,
    components: componentReducer,
  },
})
