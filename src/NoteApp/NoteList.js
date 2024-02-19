import "./NoteList.css"
import React from "react"

function NoteList(props){
    
    const clickHandler = ((id)=>{
        props.onRemove(id)
    })

    
        let {title,id} = props

        return(
            <div className="noteList" onClick={()=>(clickHandler(id))}>
                <li className="noteList-item" > {title}</li>
                
                
            </div>
        )
    }

export default NoteList