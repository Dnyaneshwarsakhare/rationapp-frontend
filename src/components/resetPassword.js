import React from 'react';
import { PureComponent } from 'react';
import { NavLink , Redirect, useHistory, withRouter} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { trackPromise } from 'react-promise-tracker';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
import axios from 'axios';
import 'jquery/dist/jquery.min.js';
import Navbar from '../components/navbar';

class ResetPassword extends PureComponent {
    
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit= this.onSubmit.bind(this);


        this.state = {
            password: '',
            cfpassword : '',
            errors : {
                password: '',
                cfpassword: '',
            }
        };
      }

      componentDidMount(){
        const obj = this.props.location.pathname.split("/");
        const id = obj[2];
        const token = obj[3];

        axios.get('http://localhost:5000/reset-password/'+id+'/'+token)
        .then(res => 
            console.log(res.data)
            
        ).catch(err =>{
            console.log(err)
            toast.error("Session Expired")
            this.props.history.push("/reset-password")
        })

    }

    handleChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'password': 
              errors.password = 
              value != this.state.cfpassword
                  ? 'Not Matched'
                  : 'Matched';
              break;
            case 'cfpassword': 
              errors.cfpassword = 
              value.length < 6
                  ? 'Password should be contain min 6 characters'
                  : '';
              break;
            default:
              break;
        }
        this.setState({errors, [name]: value});
    }
    
    onChangeEmail(e){
        this.setState({
            cfpassword : e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password : e.target.value
        });
    }

    
    
    onSubmit = async (e) =>{
        e.preventDefault()

        const user = {
            password : this.state.password
        }
        
        const obj = this.props.location.pathname.split("/");
        const id = obj[2];
        const token = obj[3];

        try{
            axios.post('http://localhost:5000/reset-password/'+id+'/'+token,user)
            .then(res => 
                console.log(res.data),
                toast.success("successsfull"),
                this.props.history.push("/login")
            ).catch(err =>{
                console.log(err)
                toast.error("error occured"+err)
            })
            
  
              
        }
        catch (err){
            console.log(err);
        }

    }



    render(){
        return ( 
            <>
            <Navbar />
        <div className="container">
            <div className="login mt-3">
                <h3><strong> Password Reset</strong></h3>
                <div className="hr"></div>
                
                <form  onSubmit={this.onSubmit} >
                    <div className ="form-group pob" >
                            <input type="password" 
                            required
                            autoFocus
                            className = "form-control"
                            id="inputbox"
                            name = "cfpassword"
                            autoComplete="off"
                            onInput={this.handleChange}
                            value = {this.state.cfpassword}
                            onChange = {this.onChangeEmail}
                            />
                            <span>Password</span>
                            {this.state.errors.cfpassword.length > 0 && 
                            <div className='emailError'>{this.state.errors.cfpassword}</div>}
                            
                    </div>
                    <div className ="form-group pob">
                            
                            <input type="password" 
                            required
                            autoComplete="off"
                            className = "form-control"
                            id="inputbox"
                            name="password"
                            value = {this.state.password}
                            onInput={this.handleChange}
                            onChange = {this.onChangePassword}
                            />
                            <span>Confirm Password</span>
                            {this.state.errors.password.length > 0 && 
                            <div className='emailError'>{this.state.errors.password}</div>}
                            
                    </div>
                    <div className="form-group">
                        <input type="submit" value = "Submit" className="btn btn-primary"/>
                    </div>

                </form>
            </div>
            
             <ToastContainer />
             </div>
            </>
        );
        
    } 
}
 
export default withRouter(ResetPassword);


