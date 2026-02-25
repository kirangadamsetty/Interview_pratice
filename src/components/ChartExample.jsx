import { useEffect, useState } from "react";
import { Bar, Pie,Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
   LineElement,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
   LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);
function ChartExample(){
    const [chartData, setChartData] = useState(null)
    const [lineData, setLineData] = useState(null)
    useEffect(()=>{
     const abortController = new AbortController()
     const fetchingData = async() =>{
        try{
           const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            signal : abortController.signal
           })
           if(!response.ok) {
            console.log("Api error")
           }
           const result = await response.json()
            const data = {}
            result.forEach((item)=>{
                  data[item.userId] = (data[item.userId] || 0) + 1
            })
            const labels = Object.keys(data)
            const values = Object.values(data)
            setChartData({
              labels : labels,
              datasets : [{
                label : "Users Posts",
                data : values,
                backgroundColor : ["blue","green","yellow", "lightgray"]
              }]
            })
            setLineData({
                labels  : labels,
                 datasets : [
                    { 
                         label : "Users Posts",
                        data : values,
                 backgroundColor: "rgba(0,0,255,0.2)",
                 borderColor:"blue",
                 tension: 0.4,
                 fill : true
                }
                 ]
            })            
        }catch(error){
            if(error.name !== "AbortError"){
                console.log(error.message)
            }
        }
     }        
     fetchingData()
     return () =>{
        abortController.abort()
     }
    },[])


   if(!chartData || !lineData) return <h1>Loading...</h1>
   return(
    <div className = "container mx-auto">
        <div className = "grid grid-cols-12 m-auto">
            <div className = "col-span-6">
                <Bar data = {chartData}/>
            </div>
            <div className  = "col-span-6 h-100 m-auto">
                <Pie data = {chartData}/> 
            </div>
            <div className  = "col-span-6 m-auto">
                <Line data = {lineData} /> 
            </div>
        </div>
    </div>
   )
}
export default ChartExample 




