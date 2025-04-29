import React,{FC, useEffect} from "react";
import { Link } from "react-router-dom";
import styles from '../components/Login.module.scss'
import { Typography,Space,Form,Input,Button,Checkbox } from "antd";
import {UserAddOutlined} from '@ant-design/icons'
import {REGISTER_PATH} from '../router'

const {Title} = Typography
const USERNAME = 'USERNAME'
const PASSWORD = 'PASSWORD'
function rememberUserInfo(username:string,password:string){
    localStorage.setItem(USERNAME,username)
    localStorage.setItem(PASSWORD,password)
}
function clearUserInfo(){
    localStorage.removeItem(USERNAME)
    localStorage.removeItem(PASSWORD)
}
function getUserInfo(){
    return {
        username:localStorage.getItem(USERNAME),
        password:localStorage.getItem(PASSWORD)
    }
}

const Login:FC=()=>{
    const [form] = Form.useForm()
    useEffect(()=>{
        const {username,password} = getUserInfo()
        form.setFieldsValue({username,password})
    },[])
    const onFinish = (values:any)=>{
        console.log(values)
        if(values.remember){
            // remember
            rememberUserInfo(values.username,values.password)
            
        }else{
            // clear
            clearUserInfo()
        }

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
                //initialValues={}
                form={form}
            >
                <Form.Item
                    label='username'
                    name='username'
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label='password'
                    name='password'
                >
                    <Input.Password></Input.Password>
                </Form.Item>
                <Form.Item
                    name='remember'
                    valuePropName='checked'
                    wrapperCol={{offset:6,span:6}}
                >
                    <Checkbox>remember</Checkbox>
                </Form.Item>
                <Form.Item
                    wrapperCol={{offset:6,span:6}}
                >
                    <Space>
                        <Button
                        type="primary" 
                        htmlType="submit">
                            Login
                        </Button>
                        <Link to={REGISTER_PATH}>Register</Link>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    </div>
}

export default Login