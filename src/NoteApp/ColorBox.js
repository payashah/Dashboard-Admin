import "./ColorBox.css"
import React from "react"

function ColorBox (props){
    
    const clickHandler = ((color)=>{
        props.onColor(color)
    })

    let {color} = props
    
        return(
            
            <div className="colorBox">
                <button className="colorBox-item" style={{backgroundColor: color}} onClick={()=>(clickHandler(color))} ></button>
            </div>
        )
    
}

export default ColorBox