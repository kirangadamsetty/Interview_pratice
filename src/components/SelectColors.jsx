 import {useState , useEffect} from "react"   
    
 function SelectColors(){
    const [data, setData] =  useState([]) 

 useEffect(()=>{
 const colors =["red", "blue", "green", "yellow", "black", "orange","green"]
  const handleClick = (e) =>{
      let x= e.clientX
      let y = e.clientY
      const radius = Math.ceil((Math.random() * 180) + 20)
      if(x - radius/2 < 0){
        x = radius/2
      } if(y - radius/2 <0){
        y = radius/2
      }
      const randomnumber = Math.ceil(Math.random()*colors.length)
      const randomColor = colors[randomnumber]
      setData(prev => ([...prev, {x, y, radius, randomColor}]))

  }



  document.addEventListener("click", handleClick)   

 },[])


  return(
    <div className = "h-dvh w-dvw relative">
        {
            data.map((item)=>{
                return <button
                 style = {{position:"absolute",top:item.y, left:item.x, height:item.radius, width:item.radius, transform:"translate(-50%, -50%)",borderRadius:"100%",backgroundColor:item.randomColor}}
                >
               </button>
            })  
            
        }
    </div>
      )
}
export default SelectColors