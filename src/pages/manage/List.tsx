import React,{FC,useState} from "react";
import mockData from "../../mockInfo/mockData";
import styles from './Common.module.scss'
import QuestionCard from "../../components/QuestionCard";
// import { useSearchParams } from "react-router-dom";
import { Typography } from "antd";
import ListSearch from "../../components/ListSearch";

const List:FC=()=>{
    const questionListData = mockData.questionListMockInfo
    const [questionList,setQuestionList] = useState(questionListData)
    const {Title} = Typography
    // const [searchParams] = useSearchParams()
    // console.log("kkk",searchParams.get("kkk"))
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
            {questionList.length > 0 && questionList.map(q=>{
                const {_id}=q
                return <QuestionCard
                key={_id}
                {...q}
                />
            })}
        </div>
        <div className={styles.footer}>load more...</div>
    </div>
}
export default List