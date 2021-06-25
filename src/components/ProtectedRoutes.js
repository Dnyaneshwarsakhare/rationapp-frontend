import React, { useEffect, useState } from 'react';
import {Route, Redirect,useHistory} from "react-router-dom";

function ProtectedRoute(props){
    let Cmp = props.Cmp;
    const history=useHistory();     
    useEffect(()=>{
        if(!localStorage.getItem('Token'))
        {
            history.push("/login");
        }
    },[])
    return (
        <div>
            <Cmp/>
        </div>
    )
}
export default ProtectedRoute;