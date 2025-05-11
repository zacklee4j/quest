import React, { FC } from 'react'
import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { MANAGE_LIST_PATH } from '../router'

const NotFound: FC = () => {
  const nav = useNavigate()
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist!"
        extra={
          <Button
            size="large"
            type="primary"
            onClick={() => nav(MANAGE_LIST_PATH)}
          >
            Back Home
          </Button>
        }
      />
    </div>
  )
}

export default NotFound
