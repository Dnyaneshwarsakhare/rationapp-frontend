import React from 'react';
import { PureComponent } from 'react';
import { NavLink , useHistory, withRouter} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { trackPromise } from 'react-promise-tracker';
import Navbar from '../components/navbar';

class AdminLogin extends PureComponent {
   
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit= this.onSubmit.bind(this);

        this.state = {
            email: '',
            password : '',
            errormessage:{
                email:'',
                password :''
            }
        };
    }

    componentDidMount(){
        
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

    onSubmit = async (e) =>{
        e.preventDefault()

        const user = {
            email : this.state.email,
            password : this.state.password
        }
        
        try{
            
            const res = await trackPromise( fetch('https://rationapp-backend.herokuapp.com/admin-panel-login',{
                method: 'POST',
                body : JSON.stringify({ email : user.email , password : user.password}),
                headers: { "Content-Type":"application/json" }
            }));
            const data = await res.json();
            console.log(data.token);
            localStorage.setItem('Token',data.token);
            try{
              const currentuser=jwt_decode(data.token);
              if(currentuser){
                
                console.log(JSON.stringify(currentuser));
                localStorage.setItem('CurrentUser',JSON.stringify(currentuser));
                this.props.history.push("/admin/admin-profile/");
                toast.success("Login Successfull!",{
                    position : "top-center",
                });
            
            }
            }
            catch(Error){
                console.log(Error); 
                toast.error("Login Failed, Try again!",{
                    position : "top-center",
                });           
            }
            // console.log(loggedUser);
          
            
           
        }
        catch (err){
            console.log(err);
        }

        console.log(user);
    }

    render(){
        return ( 
            <>
            <Navbar/>
            <div className="container">
            <div className="login mt-3 ">
                <h4><strong>Admin Login</strong></h4>
                <p>( Admin login panel )</p>
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
                </form>
                <div> <i> admin username : admin@gmail.com </i>
                 <i> admin password : admin 12 <i> </div>
            </div>

            <ToastContainer /> 
            </div>
            </>
        );
    } 

}

export default withRouter(AdminLogin);
