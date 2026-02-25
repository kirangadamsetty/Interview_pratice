import {useState } from "react"

function Progressbar(){
    const [count, setCount] = useState("")
    const handleValue = (e) =>{
       const value = parseInt(e.target.value)
       if(value < 0 || value  > 100 || !value){
        setCount(0)
       }else{
        setCount(value)
       }
    }
  return(
    <div>
    <input type = "text" value = {count} onChange = {handleValue} className = "border rounded"/>
<div className = "relative w-dvw h-10 bg-gray-400">
        <div className= "absolute h-10 top-0 bg-red-500" style = {{width:`${count}%`}}></div>
    </div>
    </div>
    
  )
}   
export default Progressbar