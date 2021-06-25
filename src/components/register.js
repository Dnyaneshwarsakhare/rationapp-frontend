import React from 'react';
import { PureComponent } from 'react';
import axios from 'axios';
import { withRouter} from 'react-router-dom';
import  DatePicker  from "react-datepicker";
import Navbar from '../components/navbar';
import "react-datepicker/dist/react-datepicker.css";
import 'jquery/dist/jquery.min.js';
import { trackPromise } from 'react-promise-tracker';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const emailError = document.querySelector('.emailError');
// const passwordError = document.querySelector('.passwordError');

const validEmailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };
var pattern = /^\d{10}$/;

class Register extends PureComponent {
    constructor(props) {
        super(props);

        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeMobileno = this.onChangeMobileno.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDob = this.onChangeDob.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit= this.onSubmit.bind(this);

        

        this.state = {
            firstname: '',
            lastname: '',
            mobileno: '',
            email : '',
            username: '',
            dob: "",
            gender: 'Male',
            password: '',
            errormessage:'',
            errors : {
                username: '',
                email: '',
                password: '',
                mobileno:'',
            }
            
        };
        
    }

    handleChange = (event) => {
        event.preventDefault();


        const { name, value } = event.target;
        let errors = this.state.errors;
    
        switch (name) {
          case 'username': 
            errors.username = 
              value.length < 5
                ? 'Username must be at least 5 characters long!'
                : '';
            break;
          case 'mobileno': 
            errors.mobileno = 
              pattern.test(value)
                ? ''
                : 'Mobile no is not valid!';
            break; 
          
          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'password': 
            errors.password = 
              value.length < 6
                ? 'Password must be at least 6 characters long!'
                : '';
            break;
          default:
            break;
        }
    
        this.setState({errors, [name]: value});
      }
     
    
    
    onChangeFirstname(e){
        this.setState({
            firstname : e.target.value
        });
    }
    onChangeLastname(e){
        this.setState({
            lastname : e.target.value
        });
    }
    onChangeMobileno(e){
        this.setState({
            mobileno : e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email : e.target.value
        });
    }
    onChangeUsername(e){
        this.setState({
            username : e.target.value
        });
    }
    onChangeDob(date){
        this.setState({
            dob : date
        });
    }
    onChangeGender(e){
        this.setState({
            gender : e.target.value
        });
        console.log(this.state.gender);
    }
    onChangePassword(e){
        this.setState({
            password : e.target.value
        });
    }
        
    
  

    onSubmit = async (e) =>{
        
        e.preventDefault()
        const user = {
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            mobileno : this.state.mobileno,
            email : this.state.email,
            username : this.state.username,
            dob : Date.parse(this.state.dob),
            gender : this.state.gender,
            password : this.state.password,
        }

        try{
            const res = await fetch('http://localhost:5000/register',{
                method: 'POST',
                body : JSON.stringify(user),
                headers: { "Content-Type":"application/json" }
            });
            const data = await res.json();
            console.log(data);
            if(data.user){
                // window.location.assign('/shopkeeper');
                this.props.history.push("/login");
                toast.success("Registered successfully");
            } 
            if(data.err){
                this.setState({errormessage:data.err});
                console.log(this.state.errormessage);
                toast.error("Registration failed: "+this.state.errormessage+"!",{
                    position:"top-center"
                });
            }
           
            // const res = axios.post('http://localhost:5000/register',user)
            // const data = res.json()
            // console.log(data);
            // if(data.err){
            //     this.setState({errormessage:data.err});
            // }
            // console.log(this.state.errormessage);
            //.then(res => 
            //console.log(res.data),
            //toast.success("Registered Successfull!",{
            //    position : "top-center",
            //}))
            //.catch(err =>  toast.error("Problem Occured while registering "+err,{position : "top-center"}))
        
        }
        catch (err){
            console.log(err);
        }

        console.log(user);

        // this.setState({
        //     firstname: '',
        //     lastname: '',
        //     mobileno: '',
        //     email : '',
        //     username: '',
        //     dob: "",
        //     gender: 'Male',
        //     password: '',
        //     errormessage:"",
        //     errors : {
        //         username: '',
        //         email: '',
        //         password: '',
        //         mobileno:'',
        //     }
            
        // });
        
    }





    render(){
        return ( 
            <>
            <Navbar />
            <div className="container">
            <div className="login mt-3">
                <h4><strong> Register</strong></h4>
                <p>( Only shopkeeper & admin can register )</p>
                
                <form onSubmit={this.onSubmit} >
                    <div className ="form-group  pob" style={{justifyItems:"end"}} >
                            
                            <input type="text" 
                            required
                            className = "form-control"
                            id="inputbox"
                            autoFocus
                            name="firstname"
                            value = {this.state.firstname}
                            onChange = {this.onChangeFirstname}
                            
                            />
                            <span>Firstname</span>
                            
                            {/* <div className="firstname-error">{this.state.errormessage.firstname}</div> */}
                    </div>
                    <div className ="form-group  pob">
                            
                            <input type="text" 
                            required
                            className = "form-control"
                            id="inputbox"
                            value = {this.state.lastname}
                            onChange = {this.onChangeLastname}
                            />
                            <span>Lastname</span>
                            {/* <div className="lastname-error">{this.state.errormessage.lastname}</div> */}
                    </div>
                    <div className ="form-group  pob">
                            
                            <input type="mobileno" 
                            required
                            className = "form-control"
                            id="inputbox"
                            inputMode="tel"
                            autoComplete="off"
                            maxLength="10"
                            name="mobileno"
                            
                            value = {this.state.mobileno}
                            onChange = {this.onChangeMobileno}
                            onInput={this.handleChange} noValidate
                            />
                            <span>Mobile No</span>
                            {this.state.errors.mobileno.length > 0 && 
                            <div className='mobileno-error'>{this.state.errors.mobileno}</div>}
                            {/* <div className="mobileno-error">{this.state.errormessage.mobileno}</div> */}
                    </div>
                    <div className ="form-group pob">
                            
                            <input type="text" 
                            required
                            className = "form-control"
                            id="inputbox"
                            name="email"
                            value = {this.state.email}
                            // onChange = {this.onChangeEmail}
                            onChange={ this.onChangeEmail} noValidate
                            onInput={this.handleChange}
                            />
                            <span>Email</span>
                            {this.state.errors.email.length > 0 && 
                            <div className='emailError'>{this.state.errors.email}</div>}
                            <div className="emailError">{this.state.errormessage}</div>
                    </div>
                    <div className ="form-group  pob">
                            
                            <input type="text" 
                            required
                            name="username"
                            className = "form-control"
                            id="inputbox"
                            value = {this.state.username}
                            onInput={this.handleChange} noValidate
                            onChange = {this.onChangeUsername}
                            />
                            <span>Username</span>
                            {this.state.errors.username.length > 0 && 
                            <div className='username-error'>{this.state.errors.username}</div>}
                            {/* <div className="username-error">{this.state.errormessage.username}</div> */}
                    </div>
                    <div className ="form-group  pob">
                            
                            <DatePicker
                            id="inputbox"
                            placeholderText="Date of birth"
                            dateFormat="dd/MM/yyyy"
                            autoComplete="off"
                            selected ={this.state.dob}
                            onChange ={ this.onChangeDob}
                            />
                            
                            
                    </div>
                    <div className ="form-group  pob mt-4" >
                    
                        <select ref="UserInput" onChange={this.callThis} className="form-control form-select form-select-sm" 
                        required 
                        aria-label=".form-select-sm example"
                        value = {this.state.gender}
                        id="gender"
                        onChange = {this.onChangeGender}>
                            <option selected value = "Male">Male</option>
                            <option value = "Female">Female</option>
                            <option value = "Other">Other</option>
                        </select>
                          
                    </div>
                    <div className ="form-group pob">
                            
                            <input type="password" 
                            required
                            className = "form-control"
                            id="inputbox"
                            value = {this.state.password}
                            onChange = {this.onChangePassword}
                            onInput={this.handleChange} noValidate
                            name="password"
                            />
                            <span>Password</span>
                            {this.state.errors.password.length > 0 && 
                            <div className='passwordError'>{this.state.errors.password}</div>}
                            {/* <div className="passwordError">{this.state.errormessage.password}</div> */}
                    </div>
                    <div className="form-group">
                        <input type="submit" value = "Sign up" className="btn btn-primary"/>
                    </div>
                    
                
                </form>
            </div>
            <ToastContainer />
            </div>
            </>
        );
    } 
}
 
export default withRouter(Register);


