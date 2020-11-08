import React from 'react';
import './App.css';
import Layout from  './Container/Layout/Layout';
import {Route,Switch} from 'react-router-dom';
import Login from './Components/Login/Login';
function App() {
  
  return (
    <div className="App">
      <Switch>
      <Route path="/login"><Login/></Route>
      <Route path="/"> <Layout/></Route>
      </Switch>
      
    </div>
  );
}

export default App;
