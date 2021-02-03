import React from 'react';

const login = () => {
    return ( 
        
        <div className="login">
            <form action="">
            <p>Login Page</p>
                <label htmlFor="username">Username</label>
                <input type="text"/><br/>
                <label htmlFor="password">Password</label>
                <input type="text"/><br/>
                <button name="login">Login</button>
                <button name="register">Register</button>
            </form>
        </div>

     );
}
 
export default login;