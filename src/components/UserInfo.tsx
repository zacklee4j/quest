import react,{FC} from 'react'
import {Link} from 'react-router-dom'
import {LOGIN_PATH} from '../router/index'


const UserInfo:FC = ()=>{
    return <>
        <Link to={LOGIN_PATH}>
           Login
        </Link>
    </>
}

export default UserInfo