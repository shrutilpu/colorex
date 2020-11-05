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
//#########################--initial State--#################################
export const initialState={
 round:1,
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
      if(Round===6){Round=1;}
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