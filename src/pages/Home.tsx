import React,{FC} from "react";
import { useNavigate } from "react-router-dom";
import {Button,Typography} from 'antd'
import {LoginOutlined} from '@ant-design/icons'
import { MANAGE_LIST_PATH } from "../router";
import styles from '../components/Home.module.scss'

const Home:FC=()=>{
    const nav = useNavigate()
    const {Title,Paragraph} = Typography
    // function clickLoginHandler(){
    //     //nav("/login?m=21")
    //     nav({
    //         pathname:"/login",
    //         search:"t=33"
    //     })
    // }
    //<Divider style={{borderColor:"transparent"}}/>
    return <div className={styles.container}>
                <div className={styles.info}>
                    <Title >JM-Questionaire | Online-Voting</Title>
                    <Paragraph>created 100+  published 50+  recieve 2000+</Paragraph>
                    <div className={styles.Button}> 
                    <Button type="primary" size="large"   icon={<LoginOutlined/>} onClick={()=>{nav(MANAGE_LIST_PATH)}} >Started</Button>
                    </div>
                </div>
    </div>
}

export default Home