import ColorBox from '../../Components/ColorPallet/ColorBox';
import React, { useEffect, useState } from 'react'
import Win from '../../Components/Controls/Win';
import './Layout.css'

function Layout() {
    const ColorArray = ["Red","Green","yellow","violet","blue","AliceBlue","magenta","indigo","orange","cyan"]; 
    const [round,setRound] =useState(Number(1));
    const [winIndex,setWinIndex] = useState(Number(1));

//############################################### component-Updated{Round increases} ################################
useEffect(() => {
    setWinIndex(WinningFibo())
}, [round])
//############################################### Winning Index calculation ###########################################
const WinningFibo =()=>{
    let fib =[]; 

    fib[0] = 0; 
    fib[1]= 1; 

    for(let i = 2; i <= round; i++) 
    {    //Add the previous 2 number in the series and store it 
       fib[i] = fib[i - 1] + fib[i - 2]; 
    } 
    return fib[round]; 
    } 
//###############################################color-selected-function###############################################
    let win =null; 
    const colorSelectHandler=(index)=>{
        //*************************--IF-WON--***********************
          if(index===winIndex){
           win =<Win/>
           alert("You Won!!!!!!!!!!!!!!!!!!!!!!!!!")
           if(round===6)
           {alert("played well...completed All rounds!!!!!");
           setRound(Number(1))}
           
           else{setRound(prev=>prev+1);} 
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

            <h1 className="Select__Bar">Select A color from Color-Board</h1>

            <div className="Color__Board">
            {ColorArray.map((color,i)=>{
                 return <ColorBox key={i} color={color} clicked={()=>colorSelectHandler(i+1)}/>
            })}
            </div>
            {win}
        </div>
    )
}

export default Layout
