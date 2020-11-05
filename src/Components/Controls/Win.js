import React from 'react'
import './Win.css';
function Win(props) {
    let classes=props.Win?"Win":"Loss";
    let text = props.Win?"congrats you won!!!!!!!!!!!":"Alas!! you lost";
    return (
        <div className={classes} id="Winning">
            <div className="Colors">
            <div className="Color1"></div>
            <div className="Color2"></div></div>
            <p>{text}</p>
        </div>
    )
}

export default Win
