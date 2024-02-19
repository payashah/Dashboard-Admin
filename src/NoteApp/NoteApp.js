import ColorBox from "./ColorBox"
import "./NoteApp.css"
import React, { useState } from "react"
import NoteList from "./NoteList"
import NoteAppHeader from "./NoteAppHeader"

function NoteApp(){
   
    const {colors , setColors} = useState(["pink", "gray", "blue", "yellow", "green", "white", "brown", "red"])
    const {input , setInput} = useState ("")
    const {notes , setNotes} = useState([])
    const {inputColor , setInputColor} = useState("pink")   

    const inputHandler = ((event)=>{
          setInput(event.target.value)
    })

    const addColor = ((color)=>{
        setInputColor(color)
    })

    const addNote = (()=>{
        let newNote = {
            id: notes.length + 1 ,
            title: input
        }
        
        setNotes((prevState)=>{
            return [...prevState.notes , newNote]
        })
        setInput("")
    })

    const removeNote = ((noteId)=>{
        let oldNote = [...notes]

        let NewnotesAfterRemove = oldNote.filter((note)=>{
            return note.id !== noteId
        })
       
        setNotes(NewnotesAfterRemove)
    })

    

        return(
            <>
            <NoteAppHeader></NoteAppHeader>
            <div className="noteApp-page">
                <div className="noteApp-input-box">
                    <input type="text" className="noteApp-input-text" placeholder="Enter Your Text ..."
                    value={input} onChange={inputHandler} />
                    <div className="noteApp-input-colorBox">
                        {colors.map((color)=>(
                             <ColorBox color={color} key={color} onColor={addColor}></ColorBox>
                        ))}
                        
                    </div>
                    <button className="noteApp-input-btn" onClick={addNote}>Add To NoteList</button>
                </div>
                <div className="noteApp-list">
                    {notes.map((note)=>(
                        <NoteList {...note} key={note.id} onRemove={removeNote}></NoteList>
                    ))}
                    
                </div>
            </div>
            </>
        )
    }

export default NoteApp