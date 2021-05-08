import React from 'react';
import { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import { NavLink } from 'react-bootstrap';


const RationUserList = props => {
    
    return(
        <tr>
            <td>{props.user.rationUser[0].name}</td>
            <td>{props.user.rationUser[0].email}</td>
            <td>{props.user.rationUser[0].totalFamilyMembers}</td>
            <td>{props.user.rationUser[0].rationType}</td>
            <td>{props.user.rationUser[0].status}</td>
            <td>
                <NavLink style={{color:'white'}} className="btn bg-success" onClick={ ()=>{props.changeStatus(props.user.rationUser[0].email)}}>Give</NavLink>
            </td>
        </tr>
    )
}


class Ssuserdetails extends PureComponent {
    
    constructor(props){
        super(props);
        this.changeStatus = this.changeStatus.bind(this);
        this.state = {users : []};
    }
    
    


    componentDidMount(){

        axios.get("http://localhost:5000/shopkeeper/ssuserdetails")
        .then(res => {
            this.setState({ users : res.data})
        })
        .catch(err => console.log(err));
    }

    changeStatus(email){
        let a = "good Morning";
        this.setState({
            
        });
        axios.post('http://localhost:5000/shopkeeper/ssuserdetails/'+email)
        .then(res => {
            console.log(res.data);
        });
    }

    rationList(){
        return this.state.users.map(currentuser => {
            return<RationUserList user ={currentuser} changeStatus={this.changeStatus} key ={currentuser._id} />
        })
    }
    
    render() { 
        return ( 
            <>
            <div className="ssuserdetails">
                <div class="table-responsive table">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead className="thead-light">
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Family Members</th>
                                <th>Ration Type</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.rationList() }
                        </tbody>
                    </table>
                </div>
            </div>
            </>
         );
    }
}
 
export default Ssuserdetails;