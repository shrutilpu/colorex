import React, { useState } from 'react';
import './Login.css'
import {useHistory} from 'react-router-dom';
import {auth} from '../firebase';

const Login =()=>{
 const history = useHistory();
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

 const loginGame=(event)=>{
  event.preventDefault();
  auth.signInWithEmailAndPassword(email,password).then((auth)=>{
   history.push("/");
  }).catch(e=>alert(e.message));
 }

 const register=(event)=>{
  event.preventDefault();
  auth.createUserWithEmailAndPassword(email,password).then(auth=>{
   alert("Account created succesfully,log IN and enjoy");
  }).catch(e=>alert(e.message));
 }
 return (
  <div className="Login">
   
   <div className="Container">
    <h1>sign in</h1>
    <form>
     <input type="text" placeholder="E-mail"
  value={email} onChange ={event=>setEmail(event.target.value)}/>
    
     <input type="password" placeholder="password" 
 value={password} onChange={event=>setPassword(event.target.value)}/>
     <button className="Signin" onClick={loginGame}>sign in</button>
 
     <p>by signing in you agree to 
      Colorex's terms and conditions
      please read privacy and policy file before signing in</p>

     <button className="CreateAccount" onClick={register}>create account</button>
    </form>
   </div>
  </div>
 );
}
export default Login;