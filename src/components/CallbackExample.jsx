import React, {useState, useCallback }  from "react"


const ChildComponent = React.memo(function ChildComponent({onClick}){
    console.log("child rendered")
 return(
    <div>
        <h1>This is child component</h1>
        <button className= "border rounded px-2 py-1 bg-blue-300" onClick={onClick}>click function</button>
    </div>
 )
})

function CallbackExample(){
    const [theme, setTheme ]  = useState("dark")
    const onClick = useCallback(()=>console.log("Function Executed"),[])
  return(
   <div className = {`${theme === "dark" ? "bg-gray-400": "bg-gray-700"} h-dvh w-dvw`}>
         <button className= "border rounded px-2 py-1 bg-blue-300" onClick = {()=>setTheme(prev => prev === "dark" ?"light":"dark")} >change theme</button>
        <ChildComponent onClick = {onClick} />
   </div>
  )
}
export default CallbackExample
