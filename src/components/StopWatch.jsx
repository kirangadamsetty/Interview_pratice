import {useState, useRef} from "react"
function StopWatch(){ 

    const [timer, setTimer] = useState({
        milliseconds : 0,
        seconds : 0,
        minutes : 0,
        hours:0
    })

   const timerRef = useRef(null)
   const handleStart = () =>{
    if(timerRef.current) return
    timerRef.current = setInterval(()=>{
           setTimer(prev => {
            let {milliseconds, seconds, minutes, hours} = prev
            milliseconds++
            if(milliseconds === 100){
                seconds++
                milliseconds = 0
            }if(seconds === 60){
                minutes++
                seconds = 0 
            }if(minutes === 60){
                hours++
                minutes = 0
            }
            return {milliseconds, hours, seconds, minutes}
           })
    },10)
   } 
   const handleStop = () =>{
      clearInterval(timerRef.current)
   }
   const handleReset = () =>{
       clearInterval(timerRef.current)
       setTimer({milliseconds:0, seconds:0 , hours:0, minutes : 0})
   }
   return(
     <div>
     <div className = "flex">
 <h1 className = "border px-2 font-bold text-5xl py-1 rounded m-2">{timer.hours}</h1>
         <h1 className = "border px-2 font-bold text-5xl py-1 rounded m-2">{timer.minutes}</h1>
          <h1 className = "border px-2 font-bold text-5xl py-1 rounded m-2">{timer.seconds}</h1>
           <h1 className = "border px-2 font-bold text-5xl py-1 rounded m-2">{timer.milliseconds}</h1>
          
     </div>
        <div>
            <button onClick = {handleStart} className = "px-2 py-1 rounded bg-red-400 text-white font-bold">Start</button>
             <button onClick = {handleStop} className = "px-2 py-1 rounded bg-blue-400 text-white font-bold">Stop</button>
              <button onClick = {handleReset} className = "px-2 py-1 rounded bg-green-400 text-white font-bold">End</button>
           </div>
     </div>
   )
}
export default StopWatch