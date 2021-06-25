import './App.css';
import React, { useState,Component, useEffect } from 'react';
import { Route, BrowserRouter, Switch , Redirect, useHistory} from "react-router-dom";
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import Login from './components/login';
import shopkeeper from "./components/shopkeeper";
import Admin from "./components/admin";
import register from "./components/register";
import home from "./components/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/about';
import contact from './components/contact';
import White from './components/white-ration';
import Yellow from './components/yellow-ration';
import Saffron from './components/saffron-ration';
import Complaint from './components/complaint';
import Navbar from './components/navbar';
import AdminLogin from './components/admin-panel-login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoutes';
import Ssstockdetails from './components/shopkeeper/ss-stock-details';
import { Next } from 'react-bootstrap/esm/PageItem';
import ResetPassword from './components/resetPassword';
function App () {
  const history=useHistory();
  return  (
    <div className="App">
      <BrowserRouter>
        
          <Switch>
            <Route exact path="/"><Redirect to="/home" /></Route>
            <Route exact path="/home" component={home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={contact}></Route>
            <Route path="/login" >
              <ProtectedRoute Cmp={Login}/>
            </Route>
            <Route path="/register" component={register}></Route>
            <Route path="/shopkeeper" component={shopkeeper}></Route>
            <Route path="/admin"  component={Admin}></Route>
            <Route path="/white" component={White}></Route>
            <Route path="/yellow" component={Yellow}></Route>
            <Route path="/saffron" component={Saffron}></Route>
            <Route path="/complaint" component={Complaint}></Route>
            <Route path="/admin-panel-login" component={AdminLogin}></Route>
            <Route path="/reset-password/:id/:token" component={ResetPassword}></Route>
          </Switch>
          {/* <Route path="/shopkeeper/ssstockdetails"  >
          <ProtectedRoute Cmp={Ssstockdetails}/>
          </Route> */}
          <ToastContainer /> 
      </BrowserRouter>
    </div>
  );
  
}

export default App;
