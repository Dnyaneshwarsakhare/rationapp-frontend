import React from 'react';
import { PureComponent } from 'react';
import axios from 'axios';
import  DatePicker  from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
            dob: '',
            gender: '',
            password: ''
            
        };
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
    }
    onChangePassword(e){
        this.setState({
            password : e.target.value
        });
    }
    
    onSubmit(e){
        e.preventDefault()

        const user = {
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            mobileno : this.state.email,
            email : this.state.email,
            usrename : this.state.usrename,
            dob : this.state.dob,
            gender : this.state.gender,
            password : this.state.password
        }

        console.log(user);

        axios.post('http://localhost:5000/register',user)
        .then(res => 
            console.log(res.data)
        );

        window.location = '/shopkeeper';

    }



    render(){
        return ( 
            <>
            

            <div className="login mt-3">
                <h4><strong> Register</strong></h4>
                <p>( Only shopkeeper & admin can register )</p>
                <form onSubmit={this.onSubmit} >
                    <div className ="form-group d-flex flex-row" style={{justifyItems:"end"}} >
                            <label> Firstname :</label>
                            <input type="text" 
                            required
                            className = "form-control "
                            id="inputbox"
                            value = {this.state.firstname}
                            onChange = {this.onChangeFirstname}
                            />
                    </div>
                    <div className ="form-group d-flex flex-row">
                            <label> Lastname :</label>
                            <input type="text" 
                            required
                            className = "form-control"
                            id="inputbox"
                            value = {this.state.lastname}
                            onChange = {this.onChangeLastname}
                            />
                    </div>
                    <div className ="form-group d-flex flex-row">
                            <label> Mobile No :</label>
                            <input type="mobileno" 
                            required
                            className = "form-control"
                            id="inputbox"
                            value = {this.state.mobileno}
                            onChange = {this.onChangeMobileno}
                            />
                    </div>
                    <div className ="form-group d-flex flex-row">
                            <label> Email :</label>
                            <input type="email" 
                            required
                            className = "form-control"
                            id="inputbox"
                            value = {this.state.email}
                            onChange = {this.onChangeEmail}
                            />
                    </div>
                    <div className ="form-group d-flex flex-row">
                            <label> Username :</label>
                            <input type="text" 
                            required
                            className = "form-control"
                            id="inputbox"
                            value = {this.state.username}
                            onChange = {this.onChangeUsername}
                            />
                    </div>
                    <div className ="form-group d-flex flex-row">
                            <label> Date of Birth :</label>
                            <DatePicker
                            selected ={this.state.dob}
                            onChange ={ this.onChangeDob}
                            />
                            
                    </div>
                    <div className ="form-group d-flex flex-row">
                            <label> Gender :</label>
                            <input type="radio" 
                            required
                            className = "form-control"
                            id="inputbox"
                            value = {this.state.gender}
                            onChange = {this.onChangeGender}
                            />
                    </div>
                    <div className ="form-group d-flex flex-row">
                            <label> Password :</label>
                            <input type="password" 
                            required
                            className = "form-control"
                            id="inputbox"
                            value = {this.state.password}
                            onChange = {this.onChangePassword}
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value = "Sign up" className="btn btn-primary"/>
                    </div>
                    
                
                </form>
            </div>


            </>
        );
    } 
}
 
export default Register;


