import React from 'react';
import { PureComponent } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';
import  DatePicker  from "react-datepicker";
import {useHistory} from "react-router-dom";
// import Header from 'react-header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { trackPromise } from 'react-promise-tracker';
import { LoadingIndicator } from '../..';

const validEmailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };
var pattern = /^\d{10}$/;



class AdminProfile extends PureComponent {
    
    async componentDidMount(){
        if(localStorage.getItem('Token')!=null && localStorage.getItem('Token')!='undefined' && localStorage.getItem('CurrentUser')!=null && localStorage.getItem('CurrentUser')!='undefined')
        {
            this.props.history.push("/admin/admin-profile");
            var user=localStorage.getItem('CurrentUser');
            var json = JSON.parse(user);
            var obj=json["user"];
            var cid=obj["id"];
            console.log(cid);

            // headers = new HttpHeaders().set('Token',localStorage.getItem('Token'));
        trackPromise(
        axios.get("http://localhost:5000/admin/admin-profile/"+cid, {
            headers: {
                'token': `${localStorage.getItem('Token')}`
            }
          })
        .then(res =>{
            this.setState({
                users : res.data
            })
            // res.json();
        }).catch(err => console.log(err)));

        }else{
            this.props.history.push("/admin-panel-login");
            toast.warn("You don't have access, Requires login",{
                position:"top-center"
            })
        }
    }
    

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
            users : [],
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
            dob : this.state.dob,
            gender : this.state.gender,
            password : this.state.password
        }

        var userse=localStorage.getItem('CurrentUser');
            var json = JSON.parse(userse);
            var obj=json["userse"];
            var cid=obj["id"];
            console.log(cid);
            trackPromise(
        axios.post('http://localhost:5000/admin/admin-profile/update/'+cid,user)
        .then(res => 
            console.log(res.data),
            window.alert("Updated Successfully")
        )
        .catch(err => console.log(err)));

    }

    

    render() { 
        return ( 
            <>
            <div className="ssprofile login mt-3">
           
            
                <h4><strong> Profile Details</strong></h4>
                 {/* <NavLink to={"/shopkeeper/ssprofile/update/"+this.state.users._id} style={{color:'white'}} className="btn bg-dark">click here to Update</NavLink>   */}
                

                <form method="GET" onSubmit={this.onSubmit} >
                    <div className ="form-group  pob" style={{justifyItems:"end"}} >
                            
                            <input type="text" 
                            required
                            className = "form-control "
                            id="inputbox"
                            
                            name="firstname"
                            defaultValue = {this.state.users.firstname}
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
                            name="lastname"
                            defaultValue = {this.state.users.lastname}
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
                            
                            defaultValue = {this.state.users.mobileno}
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
                            defaultValue = {this.state.users.email}
                            // onChange = {this.onChangeEmail}
                            onChange={ this.onChangeEmail} noValidate
                            onInput={this.handleChange}
                            />
                            <span>Email</span>
                            {this.state.errors.email.length > 0 && 
                            <div className='emailError'>{this.state.errors.email}</div>}
                            <div className="errors">{this.state.errormessage}</div>
                            {/* <div className="emailError">{this.state.errormessage.email}</div> */}
                    </div>
                    <div className ="form-group  pob">
                            
                            <input type="text" 
                            required
                            name="username"
                            className = "form-control"
                            id="inputbox"
                            defaultValue = {this.state.users.username}
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
                            name="dob"
                            selected ={this.state.dob}
                            onChange ={ this.onChangeDob}
                            />
                            
                            
                    </div>
                    <div className ="form-group  pob mt-4" onChange={this.onChangeGender}>
                    
                        <div className="" >
                            <select ref="UserInput" onChange={this.callThis} className="form-control form-select form-select-sm" 
                            required 
                            aria-label=".form-select-sm example"
                            defaultValue = {this.state.gender}
                            id="gender"
                            onChange = {this.onChangeGender}>
                                <option value = "Male">Male</option>
                                <option value = "Female">Female</option>
                                <option value = "Other">Other</option>
                            </select>
                          
                        </div>
                          
                          
                    </div>
                    <div className ="form-group pob">
                            
                            <input type="password" 
                            required
                            className = "form-control"
                            id="inputbox"
                            defaultValue = {this.state.users.password}
                            onChange = {this.onChangePassword}
                            onInput={this.handleChange} noValidate
                            name="password"
                            disabled
                            />
                            <span>Password</span>
                            {this.state.errors.password.length > 0 && 
                            <div className='passwordError'>{this.state.errors.password}</div>}
                            {/* <div className="passwordError">{this.state.errormessage.password}</div> */}
                    </div>
                    <div className="form-group">
                        <input type="submit" value = "Update" className="btn btn-primary"/>
                    </div>
                    
                
                </form>
            </div>
            <LoadingIndicator />
            <ToastContainer/>
            </>
         );
    }
}
 
export default withRouter(AdminProfile);