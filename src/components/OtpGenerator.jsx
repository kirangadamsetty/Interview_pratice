
import {useState, useEffect, useRef} from "react"
function OtpGenerator(){
    const NO_OF_DIGITS = 5
    const [otpArray, setOtpArray] = useState(Array(5).fill(""))
    const otpRef = useRef([]) 
        
   useEffect(()=>{
    otpRef.current[0].focus()
   },[])  


 const handleChange = (e, index) =>{
   const value =  e.target.value.trim()
   if(isNaN(value)) return
   const updatedArray = [...otpArray]
   updatedArray[index] = value.slice(-1)
   setOtpArray(updatedArray)
   value && index<otpArray.length-1 && otpRef.current[index+1].focus()
} 

 const handleCancel = (e,index) =>{
   if(e.key === "Backspace" && index > 0 && !otpArray[index]){
      otpRef.current[index-1].focus()
   }
 }

  return(
    <div> 
    <h1>Otp Generator</h1>  
    {
        otpArray.map((item, index)=>{
          return <input type = "text"
              key = {index}
               value = {otpArray[index]}
                ref = {(e)=>otpRef.current[index] = e}
                onChange= {(e)=>handleChange(e, index)} 
                onKeyDown =  {(e)=>handleCancel(e,index)}
                className = "rounded-lg h-30 w-30 text-center font-bold text-5xl border me-1"
               />
        })
    }
    </div>
  )
} 
export default OtpGenerator