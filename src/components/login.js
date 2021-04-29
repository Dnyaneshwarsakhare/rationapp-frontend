import React from 'react';
import { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

class Login extends PureComponent {
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
            const res = await fetch('http://localhost:5000/login',{
                method: 'POST',
                body : JSON.stringify({ email : user.email , password : user.password}),
                headers: { "Content-Type":"application/json" }
            });
            const data = await res.json();
            console.log(data);
            if(data.user){
                window.location.assign('/shopkeeper');
            } 
            if(data.errors){
                this.setState({errormessage:data.errors});
            }
        }
        catch (err){
            console.log(err);
        }

        console.log(user);

        // axios.post('http://localhost:5000/login',user)
        // .then(res => 
        //     console.log(res.data)
        // );

        // window.location = '/shopkeeper';

    }



    render(){
        return ( 
            <>
            

            <div className="login mt-3 ">
                <h4><strong> Login</strong></h4>
                <p>( Only shopkeeper & admin can login )</p>
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
                            <span>Username</span>
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
                    <p>Dont have an account, <NavLink to="/register"> Register here</NavLink></p>
                
                </form>
            </div>


            </>
        );
    } 
}
 
export default Login;


