import {FC,useState} from "react";
import mockData from "../../mockInfo/mockData";
import styles from './Common.module.scss'
import { Empty,Typography,Table,Tag,Button,Space } from "antd";
import ListSearch from "../../components/ListSearch";

const Trash:FC=()=>{
    const questionListData = mockData.questionListMockInfo
    //const questionListData = [{}]
    const {Title} = Typography
    const [questionList,setQuestionList] = useState(questionListData)
    const tableColumn = [
        {title:"questionaire",
            dataIndex:"title"
        },
        {title:"AnsweredCount",
            dataIndex:"answerCount"
        },
        {title:"Created",
            dataIndex:"createTime"
        },
        {title:"Status",
            dataIndex:"isPublished",
            render:(isPublished:boolean) =>{
                return isPublished? <Tag color="green">Published</Tag>:<Tag color="volcano">NotPublished</Tag>
            }
        },
    ]
    const [selectIds,setSelectedIds] = useState<string[]>([])
    function cplDelete(){
        if(window.confirm("CHeck Again？")){
            console.log("Checked!")
            alert('删除'+ selectIds)
        }else{
            console.log("Cancled!")
        }
    }
    function restore(){}
    const ContentElement = <>
        <div style={{marginBottom:"16px"}}>
            <Space>
                <Button danger disabled={selectIds.length === 0} onClick={cplDelete}>Comoletely Delete</Button>
                <Button type="primary" disabled={selectIds.length === 0} onClick={restore}>Restore</Button>
            </Space>
        </div>
        <div>
            <Table 
                rowSelection={{
                    type:"checkbox",
                    onChange: seletedRowKeys=>{
                        setSelectedIds(seletedRowKeys as string[])
                    }
                }}
                dataSource={questionList} 
                columns={tableColumn} 
                pagination={false} 
                rowKey={q =>q._id}
            />
        </div>
        
    </>
    return <div>
    <div className={styles.header}>
        <div className={styles.left}>
            <Title level={3}>My-Questionare</Title>
        </div>
        <div className={styles.right}>
            <ListSearch/>
        </div>
    </div>
    <div className={styles.content}>
        {/* check list not null */}
        {questionList.length <1 && <Empty description="Nothing Here."></Empty> }
        {questionList.length >= 4 &&  ContentElement
        }
    </div>
    <div className={styles.footer}>Pages</div>
</div>
}

export default Trash