import './App.css';
import React from 'react';
import { Route, BrowserRouter, NavLink, Switch } from "react-router-dom";
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';

import login from './components/login';
import shopkeeper from "./components/shopkeeper";
import user from "./components/user";
import admin from "./components/admin";
import register from "./components/register";
import home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import about from './components/about';
import contact from './components/contact';
import white from './components/white-ration';
import yellow from './components/yellow-ration';
import saffron from './components/saffron-ration';
import complaint from './components/complaint';

import $ from 'jquery';
import Ssprofile from './components/shopkeeper/ssprofile';
import Ssstockdetails from './components/shopkeeper/ss-stock-details';
import Ssuserdetails from './components/shopkeeper/ss-user-details';
import Ssdashboard from './components/shopkeeper/ss-dashboard';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
          <Switch>
          <Route exact path="/"  component={home}></Route>
            <Route exact path="/home" component={home}></Route>
            <Route path="/about" component={about}></Route>
            <Route path="/contact" component={contact}></Route>
            <Route path="/login" component={login}></Route>
            <Route path="/register" component={register}></Route>
            <Route path="/user" component={user}></Route>
            <Route path="/shopkeeper" component={shopkeeper}></Route>
            <Route path="/admin" component={admin}></Route>
            <Route path="/white" component={white}></Route>
            <Route path="/yellow" component={yellow}></Route>
            <Route path="/saffron" component={saffron}></Route>
            <Route path="/complaint" component={complaint}></Route>
            
          </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
