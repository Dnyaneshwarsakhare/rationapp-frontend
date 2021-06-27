import React from 'react';
import { PureComponent } from 'react';
import { NavLink , Redirect, useHistory, withRouter} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { trackPromise } from 'react-promise-tracker';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery';
import 'jquery/dist/jquery.min.js';
import Navbar from '../components/navbar';

class Login extends PureComponent {
    
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onEmailformail = this.onEmailformail.bind(this);
        this.onEmailSend = this.onEmailSend.bind(this);
        this.onSubmit= this.onSubmit.bind(this);


        this.state = {
            email: '',
            password : '',
            emailformail:'',
            errormessage:"",
        };
      }

      componentDidMount(){
        
    }
    
    onChangeEmail(e){
        this.setState({
            email : e.target.value
        });
    }
    
    onEmailformail(e){
        this.setState({
            emailformail : e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password : e.target.value
        });
    }

    onEmailSend = async (e) => {
        e.preventDefault()
        const useremail = {
            emailformail : this.state.emailformail
        }
        
        
        await axios.post('https://rationapp-backend.herokuapp.com/forgot-password',useremail,{
            headers: {
            'Content-Type': 'application/json'
            }
          })
        .then((response) => {
            console.log(response.data);
          }).catch( (error) => {
            console.log(error);
            toast.warn("user not found",{
                position:"top-center"
            })
          })
    }
    
    
    onSubmit = async (e) =>{
        e.preventDefault()

        const user = {
            email : this.state.email,
            password : this.state.password
        }
        
        try{
            
            const res = await trackPromise( fetch('https://rationapp-backend.herokuapp.com/login',{
                method: 'POST',
                body : JSON.stringify(user),
                headers: { "Content-Type":"application/json" }
            }));
            const data = await res.json();
            console.log(data.token);
            
            if(data.errors){
                this.setState({errormessage:data.errors});
                console.log(data.errors);
            }
            localStorage.setItem('Token',data.token);
            try{
              const  currentuser=jwt_decode(data.token);
              if(currentuser){
                console.log(JSON.stringify(currentuser));
                localStorage.setItem('CurrentUser',JSON.stringify(currentuser));
                this.props.history.push("/shopkeeper/ssprofile");
                toast.success("Login Successfull !",{
                    position : "top-center",
                });
            }
            }
            catch(Error){
                 
                toast.error("Login Failed, Try again!",{
                    position : "top-center",
                });
                          
            }
            // console.log(loggedUser);
          
            
              
        }
        catch (err){
            console.log(err);
        }

        

        // axios.post('http://localhost:5000/login',user)
        // .then(res => 
        //     console.log(res.data)
        // );

        // window.location = '/shopkeeper';

    }



    render(){
        return ( 
            <>
            <Navbar />
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Password Reset</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <label htmlFor="email">Enter your Email</label><br />
                    <input type="email" autoFocus required name="emailformail" onChange={this.onEmailformail} id="email" /><br />
                    <small>Email should be available in our system</small>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"data-dismiss="modal" onClick={this.onEmailSend}>Send</button>
                </div>
                </div>
            </div>
            </div>

        <div className="container">
            <div className="login mt-3">
                <h3><strong> Login</strong></h3>
                <p>( Shopkeeper login panel )</p>
                <div className="errorstitle">{this.state.errormessage.message}</div>
                <form  onSubmit={this.onSubmit} >
                    <div className ="form-group pob" >
                            <input type="text" 
                            required
                            autoFocus
                            className = "form-control"
                            id="inputbox"
                            autoComplete="off"
                            value = {this.state.email}
                            onChange = {this.onChangeEmail}
                            />
                            <span>Email</span>
                            <div className="emailError">{this.state.errormessage.email}</div>
                    </div>
                    <div className ="form-group pob">
                            
                            <input type="password" 
                            required
                            autoComplete="off"
                            className = "form-control"
                            id="inputbox"
                            
                            value = {this.state.password}
                            onChange = {this.onChangePassword}
                            />
                            <span>Password</span>
                            <div className="passwordError">{this.state.errormessage.password}</div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value = "Login" className="btn btn-primary"/>
                    </div>
                    

                  
                    <button type="button" class="btn btn-link shadow-none" data-toggle="modal" data-target="#exampleModal">
                        Forgot password ?
                    </button>
                    <p>Don't have an account, <NavLink to="/register"><button className="btn btn-outline-primary btn-sm">Register here</button></NavLink></p>
                    <p>You're an Admin, <NavLink to="/admin-panel-login"><button className="btn btn-outline-primary btn-sm">Click here</button></NavLink></p>
                </form>
            </div>
            
             <ToastContainer />
             </div>
            </>
        );
        
    } 
}
 
export default withRouter(Login);


