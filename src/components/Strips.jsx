import {useState, useEffect} from "react"


function Strips(){
    const [searchInput, setSearchInput ] = useState("")
    const [updateId, setUpdateId] = useState(null)
    const [data, setData]  = useState(()=>JSON.parse(localStorage.getItem("content")) || [])
  useEffect(()=>{
         localStorage.setItem("content" , JSON.stringify(data))

  },[data])

    const handleChange = (e) =>{
     setSearchInput(e.target.value)
    }
    const handleSubmit = () =>{
        if(!searchInput) return
        if(updateId){
          setData(prev => prev.map((item) =>item.id === updateId ? {...item, content : searchInput} : item)) 
        }else{
  const id = Date.now()
      setData(prev => ([...prev, {id: id , content : searchInput}]))
        }
      setUpdateId(null)
      setSearchInput("")
    } 
  const handleCancel = (id)=>{
      setData(prev => prev.filter((item)=>item.id !== id)) 
  }
  const handleUpdate = (item) =>{
    setSearchInput(item.content)
     setUpdateId(item.id)
  }


  return(
    <div>
        <input type = "text" value = {searchInput} onChange = {handleChange} className = "border rounded px-2 py-2 font-bold"/>  
        <button onClick = {handleSubmit} className= "px-4 py-1 h-10 bg-blue-400 font-bold rounded-lg">{updateId ? "Update" : "Add"}</button>
        <div>
            {data.map((item)=>{
                return <div key ={item.id}>
                    <p>{item.content}</p>
                           <button onClick = {()=>handleUpdate(item)} className= "px-4 py-1 h-10 bg-blue-400 font-bold rounded-lg">Update</button>
        <button className= "px-4 py-1 h-10 bg-red-400  ms-2 font-bold rounded-lg"  onClick = {()=>handleCancel(item.id)}>Delete</button>

                </div>
            })}
        </div>
     </div>
  )
}
export default Strips  