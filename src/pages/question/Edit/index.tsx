import React,{FC} from "react";
import { useParams } from "react-router-dom";

const Edit:FC=()=>{
    const {id} = useParams()
    return <div>
        <p>Edit Page-{id}</p>
    </div>
}

export default Edit