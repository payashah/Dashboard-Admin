import "./NoteAppHeader.css"
import React from "react"
import { PiNotePencil } from "react-icons/pi";


function NoteAppHeader(){
    

        

            return(
                <div className="note-header">
                    <PiNotePencil className="note-header-icon"></PiNotePencil>
                    <h1 className="note-header-title">Paya <span className="note-header-title-span">Note</span>List</h1>
                    
                </div>
            )
        
}
export default NoteAppHeader