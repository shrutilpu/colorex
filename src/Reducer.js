//################################--winning Index--############################
export const WinningFibo =(round)=>{
    let fib =[]; 

    fib[0] = 0; 
    fib[1]= 1; 

    for(let i = 2; i <= round; i++) 
    {    //Add the previous 2 number in the series and store it 
       fib[i] = fib[i - 1] + fib[i - 2]; 
    } 
    return fib[round]; 
    } 

//#########################--Color-Array--##################################################################################
export const Colors = [
                       ["Red","Green","yellow","violet","blue","AliceBlue","magenta","indigo","orange","cyan"],
                       ["cyan","lightgreen","purple","cerise","apricot","aquamarine","azure","bronze","emerald","olive"],
                       ["maroon","mauve","ochre","periwinkle","pink","salmon","teal","viridian","turquoise","violet"],
                       ["scarlet","Tan","slategray","puce","plum","pear","peach","lime","crimson","cerulean"]
                     ]
//#########################--initial State--#######################################################################################
export const initialState={
 round:Number(localStorage.getItem("Round"))||1,
 user:null
}

const reducer = (state,action)=>{
    console.log(action);
 switch(action.type){
  case "SET_USER":
     return {
        ...state,user:action.user
     }
  case 'INCREMENT_ROUND':
      let Round =state.round;
      if(Round>=6){Round=1;}
      else{Round=Round+1;}
    return{
       ...state,
       round:Round
   }   
  default:
     return state;
 }
}
export default reducer;