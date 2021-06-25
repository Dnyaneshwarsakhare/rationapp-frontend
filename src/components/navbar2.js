import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

import logo from "../../src/lo1.gif";
import { useEffect } from 'react';




const Navbar2 = () => {
    const[user , setUser] = useState();
        useEffect(()=>{
            if(localStorage.getItem('Token')!=null && localStorage.getItem('Token')!='undefined' && localStorage.getItem('CurrentUser')!=null && localStorage.getItem('CurrentUser')!='undefined')
            {
                var user=localStorage.getItem('CurrentUser');
                var json = JSON.parse(user);
                var obj=json["user"];
                var cid=obj["id"];
                var name = obj["name"]
                setUser(name);
            }
        })

        return ( 
            <>
            <div className="navbar navbar-expand-lg navbar-light bg-dark">
                <NavLink to="/home" className="brand-logo"><img alt="Ration System Logo" className="logo" src={logo}></img><b> &nbsp;RATION CONTROL</b></NavLink>
                <ul class="nav nav-pills mb-3 ml-auto" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <NavLink to="/home" className="nav-link" id="" data-bs-toggle="pill"   role="tab" aria-controls="pills-home" aria-selected="true">Home</NavLink>
                    </li>
                    <li class="nav-item" role="presentation">
                        <NavLink to="/about" className="nav-link" id="" data-bs-toggle="pill" href="about" role="tab" aria-controls="pills-profile" aria-selected="false">About</NavLink>
                    </li>
                    <li class="nav-item" role="presentation">
                        <NavLink to="/contact" className="nav-link" id=""  href="contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</NavLink>
                    </li>
                    <li class="nav-item" role="presentation">
                        <h5 className="nav-link text-white border" id=""   role="tab" aria-controls="pills-contact" aria-selected="false">{user}</h5>
                    </li>
                </ul>
            </div>
            </>
        );
        
}
 
export default Navbar2;