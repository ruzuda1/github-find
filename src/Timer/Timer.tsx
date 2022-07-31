import { useEffect, useState } from "react"

export const Timer =(props:TimerProps)=>{
const [seconds,setSeconds]=useState(props.seconds)

useEffect(()=>{
    setSeconds(props.seconds)
}, [props.seconds])

useEffect(()=>{
props.onChange(seconds)
},[seconds])

useEffect(()=>{
   const intervalId = setInterval(()=>{
        setSeconds((prevSec)=> prevSec -1 )
        }, 1000)

        return ()=>{clearInterval(intervalId)}
},[props.timerKey])

return(
    <div>
{seconds}
    </div>
)
}


type TimerProps={
    seconds:number
    onChange:(actualSeconds:number)=>void
    timerKey: string
}
