import {useState, useEffect, useRef} from "react"

function Throttling(){
    const [searchInput, setSearchInput]   = useState("")
    const time = useRef(null)
    useEffect(()=>{
        const currentTime = Date.now()
        if( currentTime - time.current > 1000 ){
            console.log("API Executed")
            time.current = currentTime
        }
    },[searchInput])
  return(
    <div>
        <input placeholder = "Search Here..." className = "border rounded px-2 py-1" type = "search" value = {searchInput} onChange = {(e)=>setSearchInput(e.target.value)} />
    </div>
  )
}

export default Throttling