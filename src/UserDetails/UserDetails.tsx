//@ts-nocheck
import { SearchUserType } from "../GitHubMainPage/GitHub"
import { useEffect, useState } from "react"
import axios from "axios"
import { Timer } from "../Timer/Timer.tsx"
    
    
    export const UserDetails = (props:DetailsPropsType) =>{
        const [userDetails, setUserDetails] = useState<UserType | null>(null)
    const [seconds, setSeconds] =useState(10)
        
    useEffect(()=>{
            if(props.user){
            axios
        .get<UserType>(`https://api.github.com/users/${props.user.login}`)
        .then(res=>{
            setUserDetails(res.data)
            setSeconds(10)
        })}
        },[props.user])
    
    useEffect(()=>{
        if(seconds < 1){
            setUserDetails(null)
        }
    },[seconds])
    
        return(
     <div>
                    
                    {userDetails && <div><h1>Details</h1>
                    <Timer seconds={seconds} onChange={setSeconds} timerKey={userDetails.id.toString()} />
                    <div>
                        <h3>{userDetails.login}, followers:{userDetails.followers}</h3>
                        <img src={userDetails.avatar_url} />
                        <br />
                        
                        Date of create: {userDetails.created_at}
                    </div>
                    
                    </div>}
                </div>
        )
    }


    type DetailsPropsType={
        user: SearchUserType | null
        }
    
        
        type UserType= {
            login:string
            id:number 
            avatar_url: string
            followers:number 
            created_at:string
        }