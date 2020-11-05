import ColorBox from '../../Components/ColorPallet/ColorBox';
import React, { useState } from 'react'
import {useStateValue} from '../../StateProvider';
import {WinningFibo} from '../../Reducer';
import Win from '../../Components/Controls/Win';
import './Layout.css'

function Layout() {
    const ColorArray = ["Red","Green","yellow","violet","blue","AliceBlue","magenta","indigo","orange","cyan"]; 
    const [{round},dispatch] =useStateValue();
    const [win,setWin]=useState(false);
//###############################################color-selected-function###############################################
    const colorSelectHandler=(index)=>{
        //*************************--IF-WON--***********************
        const winIndex = WinningFibo(round);
          if(index===winIndex){
           setWin(true);
           alert("You won!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
           dispatch({
               type:"INCREMENT_ROUND"
           });
          }
        //*************************--IF-Lost--***********************
          else{
              alert("You lost!!..Better luck next time");
          }
        }
//########################################################--RENDERING--##################################################
    return (
        <div className="Layout">
            <header className="Header">
                <p>User</p>
                <h1>Welcome to colorex</h1>
                <p>{`Round-${round}`}</p>
            </header>
            {win && <Win Win={true}/>}
            <h1 className="Select__Bar">Select A color from Color-Board</h1>

            <div className="Color__Board">
            {ColorArray.map((color,i)=>{
                 return <ColorBox key={i} color={color} clicked={()=>colorSelectHandler(i+1)}/>
            })}
            </div>
            
        </div>
    )
}

export default Layout
