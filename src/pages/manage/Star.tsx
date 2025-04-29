import React,{FC,useState} from "react";
import mockData from "../../mockInfo/mockData";
import styles from './Common.module.scss'
import QuestionCard from "../../components/QuestionCard";
import { Empty,Typography } from "antd";
import ListSearch from "../../components/ListSearch";


const Star:FC=()=>{
    const questionListData = mockData.questionListMockInfo
    //const questionListData = [{}]
    const {Title} = Typography
    const [questionList,setQuestionList] = useState(questionListData)
    return <div>
    <div className={styles.header}>
        <div className={styles.left}>
            <Title level={3}>Trash</Title>
        </div>
        <div className={styles.right}>
            <ListSearch/>
        </div>
    </div>
    <div className={styles.content}>
        {/* check list not null */}
        {questionList.length <4 && <Empty description="Nothing Here."></Empty> }
        {questionList.length >= 4 && questionList.map(q=>{
            const {_id}=q
            return <QuestionCard
            key={_id}
            {...q}
            />
        })}
    </div>
    <div className={styles.footer}>Pages</div>
</div>
}

export default Star