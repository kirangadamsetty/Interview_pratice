import {useState, useEffect} from "react"

function Pagination(){
    const [currentPage, setCurrentPage] =  useState(1)
    const [currentProducts, setCurrentProducts] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const totalProductsPerPage = 8
    const [totalPages, setTotalPages] = useState(0)
    useEffect(()=>{
      const abortController = new AbortController()
      async function fetchingData(){
           try{
             setLoading(false)
             setError(null)
             const response = await fetch(`https://dummyjson.com/recipes?limit=${totalProductsPerPage}&skip=${(currentPage-1)*totalProductsPerPage}`,{
                signal : abortController.signal
             })
             if(!response.ok) throw new Error("Something went wrong")
             const result = await response.json() 
            setTotalPages(result.total)
            const finalResult = result.recipes
             setCurrentProducts(finalResult) 
            } catch(error){
             if(error.name !== "AbortError"){
                setError(error.message)
             }
           }finally{
            setLoading(false)
           }
      }
       fetchingData() 
       return () =>{
        abortController.abort()
       }
    },[currentPage ])
   return(
      <div className = "container mx-auto">
        <div className = "grid grid-cols-12 gap-2">
        {
            currentProducts.map((item)=>{
                return <div className = "col-span-3 shadow rounded">
                <img src = {item.image} alt = {item.image}/>
                 <h1 className = "font-bold text-2xl">{item.name}</h1>
                </div>
            })
        }

        </div>
        <div className = "text-center my-2">
            <button disabled = {currentPage < 0} onClick ={()=>setCurrentPage(prev => prev -1)} className = "rounded px-2 py-1 font-bold border cursor-pointer me-2">Prev</button>
            <button disabled = {currentPage > totalPages} onClick = {()=>setCurrentPage(prev => prev + 1)} className = "rounded px-2 py-1 font-bold border cursor-pointer">Next</button>
        </div>
      </div>
   )
}
export default Pagination