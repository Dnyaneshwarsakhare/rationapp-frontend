import axios from 'axios';
import React from 'react';
import { PureComponent } from 'react';
import { NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShopkeeperList = props => {
    return(
        
        <tr>
            <td>{props.user.username}</td>
            <td>{props.user.firstname} {props.user.lastname}</td>
            <td>{props.user.email}</td>
            <td>{props.user.dob.substring(0,10)}</td>
            <td>
            <NavLink className="btn bg-danger" onClick={ ()=>{props.deleteUser(props.user._id)}}>Delete</NavLink> 
            </td>
        </tr>
        
        
    )
}


class AdminShopkeeperDetails extends PureComponent {

    constructor(props){
        super(props);

        this.deleteUser = this.deleteUser.bind(this);

        this.state = {users : []};
    }
    
    componentDidMount(){
        axios.get("http://localhost:5000/admin/admin-shopkeeper-details/")
        .then(res => {
            this.setState({ users : res.data})
        })
        .catch(err => console.log(err));
    }

    deleteUser(id){
        axios.delete('http://localhost:5000/admin/admin-shopkeeper-details/'+id)
        .then(res => {
            console.log(res.data);
        });
        this.setState({
            users : this.state.users.filter(el => el._id !== id)
        });
    }


    userList(){
        return this.state.users.map(currentuser => {
            return<ShopkeeperList user ={currentuser} deleteUser ={this.deleteUser} key ={currentuser._id} />
        })
    }
    
    render() { 
        return ( 
            <>
            <div className="admin-shopkeeper-details">
                <h3 className="mt-3">Shopkeepers Details</h3>
                <div class="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead className="thead-light">
                            <tr>
                                <th>Username</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>RegDate</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.userList() }
                        </tbody>
                    </table>
                </div>
            </div>
            </>
         );
    }
}
 
export default AdminShopkeeperDetails;