import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';

import $ from 'jquery';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import { PureComponent } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import AdminProfile from './admin/adminProfile';
import AdminDashboard from './admin/adminDashboard';
import AdminComplaint from './admin/adminComplaint';
import AdminShopkeeperDetails from './admin/adminShopkeeperDetails';
import EditAdmin from './admin/editAdmin';
import SupplyStock from './admin/supplyStock';
import Navbar2 from './navbar2';



class admin extends PureComponent {

    componentDidMount(){

        $("#menu-toggle").click(function(e) {
          e.preventDefault();
          $("#wrapper").toggleClass("toggled");
         });

        }

        logoutSession(){
          localStorage.removeItem("Token");
          localStorage.removeItem("CurrentUser");
        }

        render(){
        return ( 
        <>
        
        <Navbar2 />
        <div className="shopkeeper d-flex" id="wrapper">

        <div class="bg-light border-right" id="sidebar-wrapper">
              <div class="sidebar-heading"><h3><strong>ADMIN</strong></h3> </div>
              <div class="list-group list-group-flush" id="sb">
                <NavLink to="/admin/admin-profile" className="list-group-item list-group-item-action bg-light">Profile</NavLink>
                <NavLink to="/admin/admin-dashboard" className="list-group-item list-group-item-action bg-light">Dashboard</NavLink>
                <NavLink to="/admin/admin-shopkeeper-details" className="list-group-item list-group-item-action bg-light">Shopkeeper Data</NavLink>
                <NavLink to="/admin/supply-stock" className="list-group-item list-group-item-action bg-light">Supply Stock</NavLink>
                <NavLink to="/admin/admin-complaint" className="list-group-item list-group-item-action bg-light">Complaint</NavLink>
                <NavLink to="/admin-panel-login" onClick={this.logoutSession} className="list-group-item list-group-item-action bg-light">Sign Out</NavLink>
              </div>
            </div>

            <div id="page-content-wrapper">

              <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <button class="btn btn-primary" id="menu-toggle">Toggle Menu</button>
                
              </nav>

              <div class="container-fluid">
               <Switch>
                    <Route exact path="/admin/"><Redirect to="/admin/admin-profile" /></Route>
                    <Route path="/admin/admin-profile" component={EditAdmin}></Route>
                    <Route path="/admin/admin-dashboard" component={AdminDashboard}></Route>
                    <Route path="/admin/admin-shopkeeper-details" component={AdminShopkeeperDetails}></Route>
                    <Route path="/admin/admin-complaint" component={AdminComplaint}></Route>
                    <Route path="/admin/supply-stock" component={SupplyStock}></Route>
               </Switch>
            
                
              </div>
            </div>


        </div>

            
        
        </>
     );
    }
}
 
export default admin;