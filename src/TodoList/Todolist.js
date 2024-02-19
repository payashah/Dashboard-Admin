import "./TodoList.css"
import React, { useState } from "react"
import TodoListHeader from "./TodoListHeader"
import { MdInput } from "react-icons/md";
import { HiSelector } from "react-icons/hi";
import Todo from "./Todo";

function TodoList(){

  const {todoText , setTodoText} = useState("")
  const {todoList , setTodoList} = useState([])
  const {status , setStatus} = useState([])
    

  
  const submitHandler = ((event)=>{
    event.preventDefault()

    let newTodo = {
        id: todoList.length + 1 ,
        title : todoText ,
        completed :false
    }
    
    setTodoList((prevState)=>{
      return [...prevState.todoList , newTodo]
    })
    setTodoText("")
    setStatus("All")

  })

  const selectHandler = ((event)=>{
    
    setStatus(event.target.value)
  })

  const todoTitleHandler = ((event)=>{
      
      setTodoText(event.target.value)
    }
  )

  const removeHanlder = ((todoId)=>{
    let removeFromTodoList = this.state.todoList.filter((todo)=>{
        return todo.id !== todoId
    })

    
    setTodoList(removeFromTodoList)
  })

  

    return(
      <div className="todoList-page">
        <TodoListHeader></TodoListHeader>
        <form className="todoList-form" onSubmit={submitHandler}>
            <div className="todoList-form-ctrl">
            <div className="todoList-form-input">
               <input type="text" className="todoList-form-input-text" 
               value={todoText} onChange={todoTitleHandler}></input>
               <button className="todoList-form-input-btn"><MdInput className="todoList-form-input-btn-icon"></MdInput></button>
            </div> <br />
            <select className="todoList-form-select" onChange={selectHandler}>
                <option className="option" value="All">All</option>
                <option className="option" value="Completed">Completed</option>
                <option className="option" value="UnCompleted">Uncompleted</option>
            </select>
            </div>
            <div className="Todo">
                {this.state.todoList.map((todo)=>(
                   <Todo {...todo} key={todo.id} onRemove={removeHanlder}></Todo>
                ))}
                
            </div>
        </form>

      </div>
    )
  
}

export default TodoList