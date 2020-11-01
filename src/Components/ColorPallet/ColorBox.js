import React from 'react'
import './ColorBox.css'
function ColorBox(props) {
    return (
        <div className="Color__Box" style={{backgroundColor:`${props.color}`}} onClick={props.clicked}>
            <h1>{props.color}</h1>
        </div>
    )
}

export default ColorBox
