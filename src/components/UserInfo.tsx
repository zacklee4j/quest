import { FC } from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_PATH } from '../router/index'
import { removeToken } from '../utils/userToken'
import { getUserInfoService } from '../services/user'
import { useRequest } from 'ahooks'
import { UserOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const UserInfo: FC = () => {
  const { data } = useRequest(getUserInfoService)
  const { username, nickname } = data || {}
  const nav = useNavigate()
  function logOut() {
    removeToken()
    nav(LOGIN_PATH)
  }
  const UserInfo = (
    <div>
      <span style={{ color: 'white' }}>
        <UserOutlined /> {nickname}
      </span>
      <Button type="link" onClick={logOut}>
        Logout
      </Button>
    </div>
  )
  const Login = (
    <div>
      <Link to={LOGIN_PATH}>Login</Link>
    </div>
  )
  return <>{username ? UserInfo : Login}</>
}

export default UserInfo
