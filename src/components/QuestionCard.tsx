import React,{FC} from "react";
import styles from './QuestionCard.module.scss'
import { Button,Divider,Space,Tag,Popconfirm, Modal } from "antd";
import {EditOutlined,LineChartOutlined,StarOutlined,DeleteOutlined,CopyOutlined,StarFilled,ExclamationCircleOutlined} from '@ant-design/icons'
import { useNavigate ,Link} from "react-router-dom";



type PropsType = {
    _id: string
    title: string 
    isPublished: boolean 
    isStar:boolean
    answerCount:number
    createTime:string
}
const QuestionCard:FC<PropsType>=(props:PropsType)=>{
    function duplicate(){
        alert("Do Copying")
    }
    const {confirm} = Modal
    function delQ(){
        confirm({
            title:"Are you sure to delete it?",
            icon:<ExclamationCircleOutlined/>,
            onOk:()=>alert("Delete")
        })
    }
    const {_id,title,createTime,answerCount,isPublished,isStar} = props
    const nav = useNavigate()
    return <div className={styles.container}>
        <div  className={styles.title}>
            <div className={styles.left}>
                <Link to={isPublished?`/question/statistic/${_id}`:`/question/edit/${_id}`}>
                    <Space>
                        {isStar && <StarOutlined style={{color:"red"}}/>}
                        {_id} {title}
                    </Space>
                </Link>
            </div>
            <div className={styles.right}>
                <Space>
                    {isPublished ? <Tag color="green">Published</Tag>:<Tag color="volcano">NotPublished</Tag>}
                    <Tag color="pink">Answerd:{answerCount}</Tag>
                    <Tag color="purple">{createTime}</Tag>
                </Space>
            </div>
        </div>
        <Divider style={{borderColor:"transparent",margin:"2px  0"}} ></Divider>
        <div className={styles['button-container']}>
            <div className={styles.left}>
                <Space>
                    <Button 
                    icon={<EditOutlined/>} 
                    type="text" 
                    size="small" 
                    onClick={()=>nav(`/question/edit/${_id}`)} 
                    >edit</Button>
                    <Button 
                    icon={<LineChartOutlined/>} 
                    type="text" 
                    size="small" 
                    onClick={()=>nav(`/question/statistic/${_id}`) } 
                    disabled={!isPublished}>statistic</Button>
                </Space> 
            </div>
            <div className={styles.right}>
                <Space>
                    <Button 
                    icon={isStar?<StarFilled/>:<StarOutlined/>} 
                    type="text" 
                    size="small"
                    >
                        {isStar ? "marked" :"mark"}
                    </Button>
                    <Popconfirm
                        title="Do you want to copy it?"
                        okText="Yes"
                        cancelText="No"
                        onConfirm={duplicate}
                    >
                        <Button  type="text" size="small" icon={<CopyOutlined/>}>copy</Button>
                    </Popconfirm>
                    <Button  type="text" size="small" icon={<DeleteOutlined/>} onClick={()=>{delQ()}}>delete</Button>
                </Space>
            </div>
        </div>
    </div>
}
export default QuestionCard