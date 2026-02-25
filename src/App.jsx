import {createBrowserRouter,  Outlet} from "react-router-dom"
import {lazy, Suspense} from "react"
const Counter = lazy(()=>import("./components/Counter.jsx"))
const OtpGenerator  = lazy(()=>import("./components/OtpGenerator.jsx")) 
const Accordion = lazy(()=>import("./components/Accordion.jsx"))
const Strips = lazy(()=>import("./components/Strips.jsx"))
const StopWatch = lazy(()=>import("./components/StopWatch.jsx"))
const TicTacToe = lazy(()=>import("./components/TicTacToe.jsx"))   
const Throttling = lazy(()=>import("./components/Throttling.jsx"))
const CallbackExample = lazy(()=>import("./components/CallbackExample.jsx"))
const Progressbar = lazy(()=>import("./components/Progressbar.jsx"))
const MemoExample = lazy(()=>import("./components/MemoExample.jsx"))
const SearchInput = lazy(()=>import("./components/SearchInput.jsx"))
const InfiniteScroll = lazy(()=>import("./components/InfiniteScroll.jsx"))
const Pagination = lazy(()=>import("./components/Pagination.jsx"))
import ErrorPage from "./utils/ErrorPage.jsx"
const SidebarLayout = lazy(()=>import("./components/SidebarLayout.jsx")) 
const SelectColors = lazy(()=>import("./components/SelectColors.jsx"))
const ChartExample = lazy(()=>import("./components/ChartExample.jsx")) 
function App(){
  return(
     <div>
      <Suspense fallback = {<h1>Loading....</h1>}><Outlet/></Suspense>
     </div>
  )
}
export default App

export const appRouter = createBrowserRouter([
 {
  path : "/",
  element :<App/>,
  errorElement :<ErrorPage/>, 
  children  : [
    {
      index :true,
      element : <Counter/>  
    },{
      path : "/strips", 
      element : <Strips/> 
    },{
      path : "/otp",
      element :<OtpGenerator/>
    },{
      path : "/stopwatch",
      element :<StopWatch/>
    },{
      path : "/accordion",
      element :<Accordion/>
    },{
      path : "/selectcolors",
      element :<SelectColors/>
    },{
     path : "/tictactoe",
     element :<TicTacToe/> 
    },{
      path : "/searchinput",
      element :<SearchInput/>
    },{
      path : "/throttling",
      element :<Throttling/>
    },{
      path : "/pagination",
      element :<Pagination/>
    },{
      path : "/infinitescroll",
      element :<InfiniteScroll/>
    },{
      path : "/progressbar",
      element :<Progressbar/>
    },{
      path : "/memoexample",
      element :<MemoExample/>
    },{
      path : "/callback",
      element:<CallbackExample/>
    },{
      path : "/chartexample",
      element:<ChartExample/> 
    },{
      path : "/sidebarlayout",
      element :<SidebarLayout/>
    }
  ]
 }
])





