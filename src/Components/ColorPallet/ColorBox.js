import React from 'react'
import './ColorBox.css'
function ColorBox(props) {
    return (
        <div className="Color__Box" style={{backgroundColor:props.disabled?`#ccc`:`${props.color}`}} 
        onClick={!props.disabled && props.clicked}>
            <h1>{props.color}</h1>
        </div>
    )
}

export default ColorBox
