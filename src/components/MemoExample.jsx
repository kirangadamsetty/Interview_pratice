import {useState, useMemo} from "react"
function Memo(){
    const [theme, setTheme] = useState("dark")
    const [count, setCount] = useState(1)
  function expensivecalculation(num){
    console.log("expensive cal")
    for(let i=0; i<1e9; i++){
        //expensice cal
    }
    return num* 2
  }
  const result  = useMemo(()=>expensivecalculation(count), [count]) 
  return(
   <div className = {`${theme === "dark" ? "bg-gray-400": "bg-gray-700"} h-dvh w-dvw`}>
     <h1>{result}</h1>
     <button onClick = {()=>setCount(prev => prev + 1)} className= "border rounded px-2 py-1 bg-green-300 me-2"> change count</button>
     <button className= "border rounded px-2 py-1 bg-blue-300" onClick = {()=>setTheme(prev => prev === "dark" ?"light":"dark")} >change theme</button>
   </div>
  )
}
export default Memo