import React,{FC} from "react";
import {Outlet} from 'react-router-dom'
const QuestionLayout:FC=()=>{
    return (<div>
        <p>QuestionLayout Page</p>
        <div>QuestionLayout Header</div>
        <div>
            <Outlet/>
        </div>
        <div>QuestionLayout Footer</div>
    </div>)
}

export default QuestionLayout