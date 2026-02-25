import {useState} from "react"


function TicTacToe(){
 const [currentPlayer, setCurrentPlayer] = useState("X")
const [winner, setWinner]  = useState(null)
const total_rows = 3
const total_cols = 3
 const [pattern, setPattern] =  useState(Array(total_rows).fill("").map(()=>Array(total_rows).fill("")))
 
 
 const checkWinner = (data) =>{
    //check rows
    for(let i=0; i<total_rows; i++){
        if(data[i].every((item)=>item === currentPlayer)){
            return true
        }
    }
    //check cols
     for(let i=0; i<total_rows; i++ ){
        let result = true
        for(let j=0; j<total_cols; j++){
            if(data[j][i] !== currentPlayer){
              result = false
            }
        }
        if(result){
            return true
        }
     }

     //check diagonals
     let dia= true;
     let anti = true;
     for(let i=0; i<total_rows; i++){
        if(data[i][i] !== currentPlayer){
            dia = false
        }
     }

    for(let i=0; i<total_rows; i++){
        if(data[i][total_cols-(i+1)] !== currentPlayer){
            anti = false
        }
    }



    if(dia || anti) return true


  }

 const handleClick = (index1, index2) =>{
    if(pattern[index1][index2] || winner) return
    const updatedData=  [...pattern]
    updatedData[index1][index2] = currentPlayer
     if(checkWinner(updatedData)){
          setWinner(currentPlayer)
     }else{
        setCurrentPlayer(prev => prev === "X" ? 'Y' : "X")
     }
    
      setPattern(updatedData)
 }
   return(
    <div>
       {
        pattern.map((item, index)=>{
            return <div className= "flex">
                {
                    item.map((item2, index2)=>{
                        return <p type = "text" 
                        className = "border rounded flex items-center justify-center h-30 w-30 font-bold text-6xl m-2 text-center" 
                         onClick = {() =>handleClick(index, index2)} 
                        >{item2}</p> 
                    })
                }
            </div>
        })
       }
       <h1 className = "font-bold text-5xl"  > currentPlayer = {currentPlayer}</h1>
       <h1 className = "font-bold text-5xl"> winner = {winner}</h1>

    </div>
   )
}
export default TicTacToe