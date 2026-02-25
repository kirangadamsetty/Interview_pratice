import {useState, useEffect, useRef} from "react"


function useDebounce(value){
    const [debouncedValue, setDebouncedValue] = useState("")
    const counterRef = useRef(null)
    useEffect(()=>{
       counterRef.current = setTimeout(()=>{
         setDebouncedValue(value)
       },400)
       return () =>{
        clearTimeout(counterRef.current)
       }
    },[value])
    return debouncedValue
}
export default useDebounce