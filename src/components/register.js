import React from 'react';
import Navbar from './navbar';

const register = () => {
    return ( 
        <>
        <Navbar />
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
                <label htmlFor="dob">DOB</label>
                <input type="date"/><br/>
                <label htmlFor="gender">Gender</label>
                <input type="radio" id="male" name="gender" value="male"/>
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" name="gender" value="female"/>
                <label htmlFor="female">Female</label>
                <input type="radio" id="other" name="gender" value="other"/>
                <label htmlFor="other">Other</label><br/>       
                <label htmlFor="password">Password</label>
                <input type="text"/><br/>
                <label htmlFor="repassword">Re-Enter Password</label>
                <input type="text"/><br/>
                <button name="signup">Signup</button>
            </form>
        </div>
        </>
     );
}
 
export default register;