import './App.css';
import React from 'react';
import { Route, BrowserRouter, NavLink, Switch } from "react-router-dom";
import login from './components/login';
import shopkeeper from "./components/shopkeeper";
import user from "./components/user";
import admin from "./components/admin";
import register from "./components/register";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
          <Switch>
            <Route exact path="/login" component={login}></Route>
            <Route path="/register" component={register}></Route>
            <Route path="/user" component={user}></Route>
            <Route path="/shopkeeper" component={shopkeeper}></Route>
            <Route path="/admin" component={admin}></Route>
          </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
