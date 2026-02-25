import ReactDOM from "react-dom"

function Modal({children}){
  return ReactDOM.createPortal(
    <div className = "relative top-0 left-0 w-100dvw h-100dvh bg-black/50">
        <div className = "absolute w-[300px] h-[300px] bg-white rounded">
            {children}
        </div>
    </div>, document.getElementById("modal-root")
   )
}

export default Modal                                                                                                                                                                                            












