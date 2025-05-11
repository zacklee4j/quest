import { FC, useEffect, useState, ChangeEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../components/Login.module.scss'
import { Typography, Space, Form, Input, Button, Checkbox, message } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import { userLoginService } from '../services/user'
import { REGISTER_PATH, MANAGE_LIST_PATH } from '../router'
import { useRequest } from 'ahooks'
import { setToken } from '../utils/userToken'

const { Title } = Typography
const USERNAME = 'USERNAME'
const PASSWORD = 'PASSWORD'
function rememberUserInfo(username: string, password: string) {
  localStorage.setItem(USERNAME, username)
  localStorage.setItem(PASSWORD, password)
}
function clearUserInfo() {
  localStorage.removeItem(USERNAME)
  localStorage.removeItem(PASSWORD)
}
function getUserInfo() {
  return {
    username: localStorage.getItem(USERNAME),
    password: localStorage.getItem(PASSWORD),
  }
}

const Login: FC = () => {
  const [form] = Form.useForm()
  const nav = useNavigate()
  useEffect(() => {
    const { username, password } = getUserInfo()
    form.setFieldsValue({ username, password })
  }, [])
  const { run: userLogin } = useRequest(
    async values => {
      const { username, password } = values
      const data = await userLoginService(username, password)
      return data
    },
    {
      manual: true,
      onSuccess(result) {
        message.success('Login Successfully')
        const { token = '' } = result
        setToken(token)
        nav(MANAGE_LIST_PATH)
      },
    }
  )
  const onFinish = (values: any) => {
    userLogin(values)
    if (values.remember) {
      // remember
      rememberUserInfo(values.username, values.password)
    } else {
      // clear
      clearUserInfo()
    }
  }
  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title>{<UserAddOutlined />}Login Page</Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          //initialValues={}
          form={form}
        >
          <Form.Item label="username" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="password" name="password">
            <Input.Password></Input.Password>
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 6, span: 6 }}
          >
            <Checkbox>remember</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 6 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
              <Link to={REGISTER_PATH}>Register</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
