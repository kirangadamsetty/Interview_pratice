import {useState ,useEffect , useRef} from "react"

function InfiniteScroll(){
    const [currentProducts, setCurrentProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const loadingRef = useRef(null)
    const totalProductsPerPage  = 8
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [hasMore, setHasMore] = useState(true)

    useEffect(()=>{
        const abortController = new AbortController()
        async function fetchingData(){
            try{
                setLoading(true)
               const response = await fetch(`https://dummyjson.com/products?limit=${totalProductsPerPage}&skip=${(currentPage-1)*totalProductsPerPage}`,{
                signal : abortController.signal 
               })
               if(!response.ok) throw new Error("Something went wrong") 
               const result = await response.json()
               const finalResult =  result.products 
               setCurrentProducts(prev => ([...prev, ...finalResult]))
               if(finalResult.length < totalProductsPerPage ){
                setHasMore(false)
               }

            }catch(error){
                  if(error.name !== "AbortError"){
                    setError(error.message)
                  }
            }finally{
                setLoading(false)
            }
        }
       fetchingData()
       return ()=>{
        abortController.abort()
       }
    },[currentPage])

    useEffect(()=>{
      const observer = new IntersectionObserver(([entry])=>{
        if(entry.isIntersecting && hasMore){
            setCurrentPage(prev => prev + 1)
        }
      },{threshold:1})
      if(loadingRef.current) observer.observe(loadingRef.current)
        return()=>{
       observer.disconnect()
       if(loadingRef.current) observer.unobserve(loadingRef.current)
        }   
    },[])

    return(
     <div className = "container mx-auto">
        <div className = "grid grid-cols-12">
            {
              currentProducts.map((item)=>{
                return <div key = {item.id} className = "col-span-3 mb-2">
                   <img src = {item.thumbnail} alt = "image"/>
                   <h2>{item.title}</h2>
                   <p>{item.description}</p>
                </div>
              })
            }
        </div>
        <div ref = {loadingRef}></div>
     </div>
   )
}   
export default InfiniteScroll




