import "./Todo.css"
import React , {useState} from "react"
import { MdDoneOutline } from "react-icons/md";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";



function Todo (props){
  
 
  const clickRemove = ((id)=>{
    props.onRemove(id)
  })

  
  let { title , id} = props
    return(
      <div className="todo">
        <p className="todo-text">{title}</p>
        <button className="todo-btn"><MdDoneOutline className="todo-btn-icon"></MdDoneOutline></button>
        <button className="todo-btn"><MdOutlinePersonRemoveAlt1 onClick={()=>(clickRemove(id))} className="todo-btn-icon"></MdOutlinePersonRemoveAlt1></button>

      </div>
    )
  }

export default Todo