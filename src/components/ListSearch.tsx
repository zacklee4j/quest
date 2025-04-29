import {FC,useState,useEffect} from 'react'
import {Input} from 'antd'
import { ChangeEvent } from 'react'
import { useNavigate,useLocation,useSearchParams } from 'react-router-dom'
import { LIST_SEARCH_PARAM_KEY } from '../const/serchconstant'


const {Search} = Input

const ListSearch:FC=()=>{
    const nav = useNavigate()
    const {pathname} = useLocation()
    const [ value,settValue] = useState("")
    function handleSearch(value:string){
        // console.log(value)
        nav(
            {
                pathname,
                search:`${LIST_SEARCH_PARAM_KEY}=${value}`
            }   
        )

    }
    function handleChange(event:ChangeEvent<HTMLInputElement>){
        settValue(event.target.value)
    }
    // get params in url,make it input-value
    const [searchParams] = useSearchParams()
    useEffect(
        ()=>{
            const currentVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
            settValue(currentVal)
        },[searchParams]
    )
    return <>
        <div>
            <Search 
            size='large'
            placeholder='Search Something...' 
            value={value} 
            onChange={handleChange} 
            onSearch={handleSearch} 
            style={{width:'200px'}}
            allowClear={true}
            >
            
            </Search>
        </div>
    </>
}

export default ListSearch