import React from 'react'
import './Win.css';
function Win(props) {
    let classes=props.Win?"Win":"Loss";
    let text = props.Win?"congrats you won!!!!!!!!!!!":"Alas!! you lost";
    return (
        <div className={classes} id="Winning">
            <div className="Colors">
            <div className="Color1" style={{backgroundColor:`${props.color1}`}}></div>
            <div className="Color2" style={{backgroundColor:`${props.color2}`}}></div></div>
            <p>{text}</p>
            <button onClick={props.Win?props.setRound:props.cancel}>{props.Win?"Next":"PlayAgain"}</button>
        </div>
    )
}

export default Win
