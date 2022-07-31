import { SearchUserType } from '../GitHubMainPage/GitHub';
import { useEffect, useState } from 'react';
import axios from 'axios';
import s from './../GitHubMainPage/github.module.css'


export const List = (props:ListPropsType) =>{
const [users,setUsers] = useState<SearchUserType[]>([])
       useEffect(()=>{
            axios
        .get<SearchResult>(`https://api.github.com/search/users?q=${props.term}`)
        .then(res=>{
            setUsers(res.data.items)
        })
        },[props.term])
    
        return(
             <ul>
                    { users.map(u => <li key={u.id} className={props.selectedUser === u ? s.selected : ''} onClick={()=>{
                        props.onUserSelect(u)
                        }}>{u.login}</li>)}
                </ul>
        )
    }


    type SearchResult = {
        items:SearchUserType[]
    }

    type ListPropsType={
        term:string 
        selectedUser:SearchUserType | null
        onUserSelect:(user:SearchUserType)=>void
        }