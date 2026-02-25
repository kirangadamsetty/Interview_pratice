import {useState } from 'react'
import Modal from '../utils/Modal'

function Counter(){
    const [count, setCount] = useState(0)
    const [showModal, setShowModal] = useState(false)
  return(
    <div>
        <h1 className= "font-bold text-6xl my-2">{count}</h1>
        <button className = "px-2 py-1 bg-red-400 rounded-md text-white font-bold" onClick = {()=>setCount(prev => prev + 1)}>Increase</button>
        <button className = "px-2 py-1 bg-blue-400 rounded-md text-white font-bold" onClick = {()=>setCount(prev  => prev -1)}>Decrease</button>
        <button className = "px-2 py-1 bg-green-400 rounded-md text-white font-bold" onClick ={()=>setCount(0)}>Reset</button>
          <button className = "px-2 py-1 bg-green-400 rounded-md text-white font-bold" onClick ={()=>setShowModal(!showModal)}>Show Modal</button>
     {
      showModal && <Modal>
           <h1>This is the modal box</h1>
      </Modal>
     }

    </div>
  )
}

export default Counter