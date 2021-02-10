import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';




const Navbar = () => {
    return ( 
        <>
        <div className="navbar navbar-expand-lg navbar-light bg-dark">
            <NavLink to="/home" className="brand-logo"><img className="logo" src="ration-logo.png"></img><b> RATION CONTROL</b></NavLink>
            <ul class="nav nav-pills mb-3 ml-auto" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <NavLink to="/home" className="nav-link" id="" data-bs-toggle="pill"   role="tab" aria-controls="pills-home" aria-selected="true">Home</NavLink>
                </li>
                <li class="nav-item" role="presentation">
                    <NavLink to="/about" className="nav-link" id="" data-bs-toggle="pill" href="about" role="tab" aria-controls="pills-profile" aria-selected="false">About us</NavLink>
                </li>
                <li class="nav-item" role="presentation">
                    <NavLink to="/contact" className="nav-link" id=""  href="contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</NavLink>
                </li>
            </ul>
        
        </div>
        </>
     );
}
 
export default Navbar;