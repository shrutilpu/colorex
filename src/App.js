import React from 'react';
import './App.css';
import Layout from  './Container/Layout/Layout';
import {Route} from 'react-router-dom';
import Login from './Components/Login/Login';
function App() {
  
  return (
    <div className="App">
      <Route path="/"> <Layout/></Route>
      <Route path="/login"><Login/></Route>
    </div>
  );
}

export default App;
