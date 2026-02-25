import {useState, useEffect} from 'react'
const accordionData = [
  {
    id: 1,
    title: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces using a component-based architecture.",
  },
  {
    id: 2,
    title: "What is Redux?",
    content:
      "Redux is a state management library that helps manage global application state in a predictable way.",
  },
  {
    id: 3,
    title: "What is useEffect?",
    content:
      "useEffect is a React Hook used to handle side effects such as data fetching, subscriptions, and DOM updates.",
  },
];
function Accordion(){
    const [active, setActive]= useState([])
    const handleStatus = (item) =>{
        if(active.includes(item.id)){
            setActive(prev => prev.filter((id) => id !== item.id) ) 

        }else{
            setActive(prev => ([...prev, item.id]))
        }
    }
   return(
       <div>
       <h1 className ="font-bold text-5xl py-2">Accoridon</h1>
        {
            accordionData.map((item)=>{ 
                return <div key = {item.id} className = "px-2 py-1 border">
                    <div onClick ={()=>handleStatus(item)} className = "cursor-pointer">{item.title}</div>
                    <div className = {`${active.includes(item.id)? "block":"hidden" }`}>{item.content}</div>
                </div> 
            })
        }
       </div>
   )
}
export default Accordion