import React from 'react';
import { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Login extends PureComponent {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit= this.onSubmit.bind(this);

        this.state = {
            email: '',
            password : ''
        };
      }

    
    
    onChangeEmail(e){
        this.setState({
            email : e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password : e.target.value
        });
    }
    
    onSubmit(e){
        e.preventDefault()

        const user = {
            email : this.state.email,
            password : this.state.password
        }

        console.log(user);

        axios.post('http://localhost:5000/login',user)
        .then(res => 
            console.log(res.data)
        );

        window.location = '/shopkeeper';

    }



    render(){
        return ( 
            <>
            

            <div className="login mt-3 ">
                <h4><strong> Login</strong></h4>
                <p>( Only shopkeeper & admin can login )</p>
                <form onSubmit={this.onSubmit} >
                    <div className ="form-group d-flex flex-row" style={{justifyContent:"flex-end"}} >
                            {/* <label > Username :</label> */}
                            <input type="text" 
                            required
                            className = "form-control "
                            id="inputbox"
                            placeholder="Username or email"
                            value = {this.state.email}
                            onChange = {this.onChangeEmail}
                            />
                    </div>
                    <div className ="form-group d-flex flex-row">
                            {/* <label> Password :</label> */}
                            <input type="password" 
                            required
                            className = "form-control"
                            id="inputbox"
                            placeholder="Password"
                            value = {this.state.password}
                            onChange = {this.onChangePassword}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value = "Login" className="btn btn-primary"/>
                    </div>
                    <p>Dont have an account, <NavLink to="/register"> Register here</NavLink></p>
                
                </form>
            </div>


            </>
        );
    } 
}
 
export default Login;


