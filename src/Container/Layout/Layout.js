import ColorBox from '../../Components/ColorPallet/ColorBox';
import React, { useState,useEffect } from 'react'
import {useStateValue} from '../../StateProvider';
import {WinningFibo} from '../../Reducer';
import {Colors} from '../../Reducer';
import Win from '../../Components/Controls/Win';
import './Layout.css'

function Layout() {
    const [ColorArray,setColorArray] = useState(Colors[0]);
    const [{round},dispatch] =useStateValue();
    const [winIndex,setWinIndex] = useState(WinningFibo(round));
    const [win,setWin]=useState(false);
    const [Showprop,setShowProp] = useState(false);
    
    useEffect(() => {
        const index = Math.round(Math.random()*3); 
        console.log(index);
        setColorArray(Colors[index]);
        setWinIndex(WinningFibo(round));
    }, [round])
//############################################## next-round #########################################################
const nextRoundHandler =()=>{
    if(round===6){alert("well played champion!! you have completed all the rounds!!!!");}
    dispatch({
        type:"INCREMENT_ROUND"
    });
    setShowProp(false);
}
//###############################################color-selected-function###############################################
    const colorSelectHandler=(index)=>{
        setShowProp(true);
        //*************************--IF-WON--***********************
          if(index===winIndex){
           setWin(true);
          
          }
        //*************************--IF-Lost--***********************
          else{
              setWin(false);
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
            <div className="Color__Board" >
            <h1 className="Select__Bar">Select A color from Color-Board</h1>
            {ColorArray.map((color,i)=>{
                 return <ColorBox key={i} color={color} clicked={()=>colorSelectHandler(i+1)} disabled={Showprop}/>
            })}
            </div>
            
        </div>
    )
}

export default Layout
