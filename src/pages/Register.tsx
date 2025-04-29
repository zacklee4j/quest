import React,{FC} from "react";
import { Link } from "react-router-dom";
import { Typography,Space,Form,Input,Button } from "antd";
import {UserAddOutlined} from '@ant-design/icons'
import styles from '../components/Register.module.scss'
import { LOGIN_PATH } from "../router";

const {Title} = Typography
const Register:FC=()=>{
    const onFinish = (value:any)=>{
        console.log(value)

    }
    return <div className={styles.container}>
        <div>
            <Space>
                <Title>{<UserAddOutlined/>}Register Page</Title>
            </Space>
        </div>
        <div>
            <Form   
                labelCol={{span:6}}
                wrapperCol={{span:16}}
                onFinish={onFinish}
            >
                <Form.Item  
                    label="username"
                    name="username"
                >
                    <Input/>
            </Form.Item>
            <Form.Item  
                    label="password"
                    name="password"
                >
                    <Input.Password/>
            </Form.Item>
            <Form.Item  
                    label="confirm"
                    name="confirm"
                >
                    <Input.Password/>
            </Form.Item>
            <Form.Item  
                    label="nickname"
                    name="nickname"
                >
                    <Input/>
            </Form.Item>
            <Form.Item  
                    label="email"
                    name="email"
                >
                    <Input/>
            </Form.Item>
            <Form.Item 
                wrapperCol={{offset:6,span:16}}
            >
                <Space>
                    <Button 
                        type="primary" 
                        htmlType="submit"
                        
                    >
                        Register
                    </Button>
                    <Link to={LOGIN_PATH}>Registered</Link>
                </Space>
            </Form.Item>
            </Form>
        </div>
    </div>
}

export default Register