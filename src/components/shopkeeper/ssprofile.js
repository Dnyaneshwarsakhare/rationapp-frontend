import React  from 'react';
import { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import  DatePicker  from "react-datepicker";
import {useHistory} from "react-router-dom";

// import Header from 'react-header';

const validEmailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };
var pattern = /^\d{10}$/;



class Ssprofile extends PureComponent {
    
    async componentDidMount(){
        if(localStorage.getItem('Token')!=null && localStorage.getItem('Token')!='undefined' && localStorage.getItem('CurrentUser')!=null && localStorage.getItem('CurrentUser')!='undefined')
        {
            
            this.props.history.push("/shopkeeper/ssprofile/");
            if(localStorage.getItem('CurrentUser')!=null && localStorage.getItem('CurrentUser')!='undefined'){
                
            var user=localStorage.getItem('CurrentUser');
            var json = JSON.parse(user);
            var obj=json["user"];
            var cid=obj["id"];
            console.log(cid);
            }else{
                this.props.history.push("/login");
            }
            // headers = new HttpHeaders().set('Token',localStorage.getItem('Token'));
        axios.get("https://rationapp-backend.herokuapp.com/shopkeeper/ssprofile/"+cid, {
            headers: {
                'token': `${localStorage.getItem('Token')}`
            }
          })
        .then(res =>{
            this.setState({
                users : res.data
            })
            console.log(this.state.users);
        }).catch(err => console.log(err));
           
        }else{
            
            this.props.history.push("/login");
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
            users : {
                firstname:'',
                lastname : "",
                mobileno : "",
                email : "",
                username : "",
                dob : "",
                gender : "",
                password : ""
        },
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
            users:{firstname : e.target.value}
        });
    }
    onChangeLastname(e){
        this.setState({
            users:{lastname : e.target.value}
        });
    }
    onChangeMobileno(e){
        this.setState({
            users:{mobileno : e.target.value}
        });
    }
    onChangeEmail(e){
        this.setState({
            users:{email : e.target.value}
        });
    }
    onChangeUsername(e){
        this.setState({
            users:{username : e.target.value}
        });
    }
    onChangeDob(e){
        this.setState({
            users:{dob : e.target.value}
        });
    }
    onChangeGender(e){
        this.setState({
            users:{gender : e.target.value}
        });
        console.log(this.state.users.gender);
    }
    onChangePassword(e){
        this.setState({
            users:{password : e.target.value}
        });
    }

    onSubmit = async (e) =>{
        e.preventDefault()
        const user = {
            firstname : this.state.users.firstname,
            lastname : this.state.users.lastname,
            mobileno : this.state.users.mobileno,
            email : this.state.users.email,
            username : this.state.users.username,
            dob : this.state.users.dob,
            gender : this.state.users.gender,
            password : this.state.users.password
        }

        var usedr=localStorage.getItem('CurrentUser');
        var json = JSON.parse(usedr);
        var obj=json["user"];
        var cid=obj["id"];
        
        axios.put(`https://rationapp-backend.herokuapp.com/shopkeeper/ssprofile/update/`+cid,user)
        .then(res => {
            console.log(res);
            window.alert("Updated Successfully");
        }
        )
        .catch(err => console.log(err));

    }

    

    render() { 
        return ( 
            <>
            <div className="container">
            <div className="ssprofile login mt-3">
           
            
                <h4><strong> Profile Details</strong></h4>
                 {/* <NavLink to={"/shopkeeper/ssprofile/update/"+this.state.users._id} style={{color:'white'}} className="btn bg-dark">click here to Update</NavLink>   */}
                
                <NavLink className="btn btn-primary" to="/shopkeeper/ssprofile/update">Edit Profile</NavLink>
                <form method="POST" onSubmit={this.onSubmit} >
                    <div className ="form-group  pob" style={{justifyItems:"end"}} >
                            
                            <input type="text" 
                            required
                            className = "form-control "
                            id="inputbox"
                            
                            name="firstname"
                            value = {this.state.users.firstname}
                            onChange = {e => this.onChangeFirstname(e)}
                            
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
                            value = {this.state.users.lastname}
                            onChange = {e => this.onChangeLastname(e)}
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
                            
                            value = {this.state.users.mobileno}
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
                            value = {this.state.users.email}
                            // onChange = {this.onChangeEmail}
                            onChange={ this.onChangeEmail} 
                            onInput={this.handleChange}noValidate
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
                            value = {this.state.users.username}
                            onInput={this.handleChange} noValidate
                            onChange = {this.onChangeUsername}
                            />
                            <span>Username</span>
                            {this.state.errors.username.length > 0 && 
                            <div className='username-error'>{this.state.errors.username}</div>}
                            {/* <div className="username-error">{this.state.errormessage.username}</div> */}
                    </div>
                    <div className ="form-group  pob">
                            
                            <input
                            type="text"
                            placeholderText="Date of birth"
                            dateFormat="dd/MM/yyyy"
                            autoComplete="off"
                            value = {(this.state.users.dob)}
                            name="dob"
                            selected ={this.state.users.dob}
                            onChange ={ this.onChangeDob}
                            />
                            
                            
                    </div>
                    <div className ="form-group  pob mt-4" onChange={this.onChangeGender}>
                    
                        <div className="" >
                            <select ref="UserInput" onChange={this.callThis} className="form-control " 
                            required 
                          
                            value = {this.state.users.gender}
                            id="gender"
                            onChange = {this.onChangeGender}>
                                <option  value = "Male">Male</option>
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
                            value = {this.state.users.password}
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

            </div>
            </>
         );
    }
}
 
export default Ssprofile;

