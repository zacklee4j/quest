import React,{FC} from 'react';
import {Typography,Space} from 'antd'
import {FormOutlined} from '@ant-design/icons'
import styles from './Logo.module.scss'
import {Link } from 'react-router-dom'

const {Title} = Typography
const Logo:FC=()=>{

    return  <>
        <Link to="/">
            <Space className={styles.container}>
                <Title>
                    <FormOutlined />
                </Title>
                <Title>
                    JM-Questionaire 
                </Title>
            </Space>
        </Link>
    </>


}
export default Logo