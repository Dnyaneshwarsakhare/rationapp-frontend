import React from 'react';
import { PureComponent } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { trackPromise } from 'react-promise-tracker';
import { LoadingIndicator } from '..';
import Navbar from '../components/navbar';

const validEmailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

class Complaint extends PureComponent {

    constructor(props) {
        super(props);

        this.onChangeShopkeepername = this.onChangeShopkeepername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeQuery = this.onChangeQuery.bind(this);
        this.onSubmit= this.onSubmit.bind(this);

        
        this.state = {
            email : '',
            shopkeepername: '',
            title:'',
            query : '',
            users : [],
            errors : {
                email: '',
            }
        };
        
    }


    handleChange = (event) => {
        event.preventDefault();


        const { name, value } = event.target;
        let errors = this.state.errors;
    
        switch (name) {
        case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          
          default:
            break;
        }
    
        this.setState({errors, [name]: value});
      }

    onChangeEmail(e){
        this.setState({
            email : e.target.value
        });
    }
    onChangeShopkeepername(e){
        this.setState({
            shopkeepername : e.target.value
        });
    }
    onChangeTitle(e){
        this.setState({
            title : e.target.value
        });
    }
    onChangeQuery(e){
        this.setState({
            query : e.target.value
        });
    }

    componentDidMount(){
        axios.get('http://localhost:5000/complaint')
        .then(res => {
            if(res.data.length >0){
                this.setState({
                    users : res.data.map(user => user.username),
                    username : res.data[0].username
                })
            }
        });
    }

    onSubmit = async (e) =>{
        
        e.preventDefault()
        const complaint = {
            email : this.state.email,
            shopkeepername : this.state.shopkeepername,
            title: this.state.title,
            query : this.state.query
        }
        try{

            const res = await fetch('http://localhost:5000/complaint',{
                method: 'POST',
                body : JSON.stringify(complaint),
                headers: { "Content-Type":"application/json" }
            });
            const data = await res.json();
            
            
            // console.log(data);
            if(data.complaint){
                toast.success("Complaint submitted successfully");
            } 
            if(data.errors){
                toast.error("Complaint failed to submit:!",{
                    position:"top-center"
                });
            }



            // trackPromise(
            // axios.post('http://localhost:5000/complaint',complaint)
            // .then(res => 
            //     console.log(res.data) ,
            //     toast.success("Complaint Submitted",{
            //         position: "top-center"
            //     })
                     
            //     ).catch((err) => 
            //         console.log(err)
            //     );
        }
        catch (err){
            console.log(err);
            toast.error(""+err+"");
        }
        
        // this.setState({
        //     email : '',
            
        //     title:'',
        //     query : '',
            
        //     errors : {
        //         email: '',
        //     }
        // });
        
    }



    render(){
        return ( 
            <>
            <Navbar />
            <div className="complaint mt-4" style={{textAlign:'center'}}>
                <form onSubmit={this.onSubmit} >
                <h4><strong> Complaint Form</strong></h4>
                <div className="hr" />
                    <div className ="form-group pob mt-3">
                            <input type="text" 
                            required
                            name="email"
                            value = {this.state.email}
                            onChange = {this.onChangeEmail}
                            onInput={this.handleChange}
                            className = "form-control"
                            id="inputbox"
                            />
                            <span>Email</span>
                            {this.state.errors.email.length > 0 && 
                            <div className='emailError'>{this.state.errors.email}</div>}

                    </div>
                    <div className ="form-group d-flex flex-row pob mt-3">
                        <label>Against </label>&nbsp;
                        <select ref="userInput" 
                        required
                        className = "form-control"
                        value = {this.state.shopkeepername}
                        onChange = {this.onChangeShopkeepername}>
                        {
                            this.state.users.map( (user) =>{
                                return <option
                                key = {user}
                                value = {user}>{user}
                                </option>
                            })
                        }
                        </select>
                    </div>

                    <div className ="form-group d-flex flex-row pob mt-3">
                            <input type="text" 
                            required
                            name="title"
                            value = {this.state.title}
                            onChange = {this.onChangeTitle}
                            className = "form-control"
                            id="inputbox"
                            />
                            <span>Title</span>
                    </div>

                    <div className ="form-group d-flex flex-row pob">
                            
                            <textarea 
                            required
                            name="firstname"
                            value = {this.state.query}
                            onChange = {this.onChangeQuery}
                            rows="5" cols="50"
                            className = "form-control"
                            id="inputbox"
                            
                            />
                            
                            <span>Explain Your Query</span>
                    </div>
                    <div className="form-group">
                        <input type="submit" value = "Submit" className="btn btn-primary"/>
                    </div>
                    
                </form>
            </div>
            <LoadingIndicator/>
            <ToastContainer />
            </>
        );
    }
}
 
export default Complaint;