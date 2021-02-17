import React from 'react';
import { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';


class Login extends PureComponent {
    render(){
        return ( 
            <>
            
            <div className="login mt-3">
                <form style={{border:"2px red"}} action="">
                <h4><strong>Login</strong></h4><br/>
                    <label htmlFor="Username">Username : &nbsp;</label>
                    <input type="text" placeholder="Username or Email" /><br/>
                    <br/>
                    <label htmlFor="Password">Passsword : &nbsp;</label>
                    <input type="password" placeholder="Password" /><br/><br/>
                    <button  className=" btn bg-primary login">Login</button><br/><br/>
                    <p>Dont have an account, <NavLink to="/register"> Register here</NavLink></p>
                    
                </form>
            </div>
            </>
        );
    } 
}
 
export default Login;