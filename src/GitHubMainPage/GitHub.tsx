//@ts-nocheck
import { UserDetails } from "../UserDetails/UserDetails.tsx"
import { useEffect, useState } from "react"
import { Search } from "../Search/Search.tsx"
import { List } from "../List/List.tsx"
import s from './github.module.css'


export const GitHub = () =>{
    const [selectedUser,setSelectedUser] = useState<SearchUserType | null>(null)
   let initialSearchState = 'ruzuda1'
    const [searchTerm, setSearchTerm] = useState(initialSearchState)
    
    useEffect(()=>{
        if(selectedUser){
        document.title = selectedUser.login}
    },[selectedUser])
     
      return(
        <div className={s.container}>
            <div>
                <Search value={searchTerm} onSubmit={(value:string)=>{setSearchTerm(value)}} />
                <button onClick={()=>{setSearchTerm(initialSearchState)}}>Reset</button>
            <List term={searchTerm} selectedUser={selectedUser} onUserSelect={setSelectedUser} />
            </div>
            <UserDetails user={selectedUser} />
        </div>
    )
}

export type SearchUserType ={
    login:string
    id:number
}