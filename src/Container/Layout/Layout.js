import ColorBox from '../../Components/ColorPallet/ColorBox';
import React, { useState,useEffect } from 'react'
import {useStateValue} from '../../StateProvider';
import {WinningFibo} from '../../Reducer';
import Win from '../../Components/Controls/Win';
import './Layout.css'

function Layout() {
    const ColorArray = ["Red","Green","yellow","violet","blue","AliceBlue","magenta","indigo","orange","cyan"]; 
    const [{round},dispatch] =useStateValue();
    const [winIndex,setWinIndex] = useState(WinningFibo(round));
    const [win,setWin]=useState(false);
    const [Showprop,setShowProp] = useState(false);
     
    let selectedColor =Number(1);
    useEffect(() => {
        setWinIndex(WinningFibo(round));
    }, [round])
//############################################## next-round #########################################################
const nextRoundHandler =()=>{
    dispatch({
        type:"INCREMENT_ROUND"
    });
    setShowProp(false);
}
//###############################################color-selected-function###############################################
    const colorSelectHandler=(index)=>{
        selectedColor=ColorArray[index-1];
        setShowProp(true);
        //*************************--IF-WON--***********************
          if(index===winIndex){
           setWin(true);
          }
        //*************************--IF-Lost--***********************
          else{
              setWin(false);
              alert("You lost!!..Better luck next time");
          }
        }
//########################################################--RENDERING--##################################################
    return (
        <div className="Layout">
            <header className="Header">
                <p>User</p>
                <h1>Let's play colorex</h1>
                <p>{`Round-${round}`}</p>
            </header>
            {Showprop && <Win Win={win} setRound={nextRoundHandler} 
            cancel={()=>setShowProp(false)} color={ColorArray[winIndex-1]}/>}
            <div className="Color__Board">
            <h1 className="Select__Bar">Select A color from Color-Board</h1>
            {ColorArray.map((color,i)=>{
                 return <ColorBox key={i} color={color} clicked={()=>colorSelectHandler(i+1)}/>
            })}
            </div>
            
        </div>
    )
}

export default Layout
