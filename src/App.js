import './App.css';
import React from 'react';
import { Route, BrowserRouter, NavLink, Switch } from "react-router-dom";
import login from './components/login';
import shopkeeper from "./components/shopkeeper";
import user from "./components/user";
import admin from "./components/admin";
import register from "./components/register";
import home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import about from './components/about';
import contact from './components/contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
          <Switch>
            <Route exact path="/home" component={home}></Route>
            <Route path="/about" component={about}></Route>
            <Route path="/contact" component={contact}></Route>
            <Route path="/login" component={login}></Route>
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
