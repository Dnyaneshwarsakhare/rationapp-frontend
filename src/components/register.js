import React from 'react';

const register = () => {
    return ( 
        <div className="register">
            <form action="">
                <p>Registration Page</p>
                <label htmlFor="first-name">First Name</label>
                <input type="text"/><br/>
                <label htmlFor="last-name">Last Name</label>
                <input type="text"/><br/>
                <label htmlFor="mobileno">Mobile No</label>
                <input type="text"/><br/>
                <label htmlFor="email-id">E-mail</label>
                <input type="text"/><br/>
                <label htmlFor="username">User Name</label>
                <input type="text"/><br/>
                <label htmlFor="qualification">Qualification</label>
                <input type="text"/><br/>
                <label htmlFor="password">Password</label>
                <input type="text"/><br/>
                <label htmlFor="repassword">Re-Enter Password</label>
                <input type="text"/><br/>
                <button name="signup">Signup</button>
            </form>
        </div>
     );
}
 
export default register;