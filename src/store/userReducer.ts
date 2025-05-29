import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserInfoType = {
  username: string
  nickname: string
}
const INIT_USER_STATE: UserInfoType = {
  username: '',
  nickname: '',
}
export const userSlice = createSlice({
  name: 'userReducer',
  initialState: INIT_USER_STATE,
  reducers: {
    loginReducer: (state: UserInfoType, act: PayloadAction<UserInfoType>) => {
      return act.payload
    },
    logoutReducer: () => INIT_USER_STATE,
  },
})
export const { loginReducer, logoutReducer } = userSlice.actions
export default userSlice.reducer
