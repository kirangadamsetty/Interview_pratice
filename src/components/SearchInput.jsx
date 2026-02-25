import {useState, useEffect} from "react" 
import useDebounce from "../utils/useDebounce.jsx"
function SearchInput(){
  const [search, setSearch] = useState("")
  const [loading, setLoading]= useState(false)
  const [searchResult, setSearchResult] = useState([])
  const [error, setError] = useState(null)
  const debouncedValue = useDebounce(search)
  const [cachedData, setCachedData] = useState({})

  useEffect(()=>{
    if(!debouncedValue) {
        setSearchResult([])
        setLoading(false)
        setError(null)
        return
    }
    if(cachedData[debouncedValue]){
        setSearchResult(cachedData[debouncedValue])
        return  
    }
    const abortController = new AbortController() 
    async function fetchingData(){
       try{
             setLoading(true)
             setError(null)
             const response = await fetch("https://dummyjson.com/recipes/search?q=" + debouncedValue, {
                signal : abortController.signal
             })
             if(!response.ok) throw new Error("Something went wrong")
             const result = await response.json()
             const finalResult = result.recipes
              setSearchResult(finalResult)
              setCachedData(prev =>({...prev, [debouncedValue]  : finalResult}))
              setLoading(false)
       }catch(error){
            if(error.name !== "AbortError"){
                setError(error.message)
            }
       }finally{
        setLoading(false)
        setError(null)
       }
    } 
    fetchingData()
    return ()=>{
        abortController.abort()
    }
  },[debouncedValue])
  return(
    <div>
      {loading && <h1 className = "font-bold text-5xl">Loading....</h1>}
      {error && <h1 className = "font-bold text-5xl">{error}</h1>}
        <input type = "search" value = {search} 
         className = "border rounded px-2 py-1 w-100" placeholder = "Search here" 
         onChange = {(e)=>setSearch(e.target.value)}
        />
        {searchResult.length >0 && <div className = "w-100 border rounded h-30 py-2 px-2 overflow-auto">
           {
            searchResult.map((item)=> {
                  return <p key = {item.id}>{item.name}</p>
            })
           }
        </div>}
    </div>
  )
} 
export default SearchInput



