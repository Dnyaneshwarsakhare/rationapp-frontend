import axios from 'axios';
import React from 'react';
import { PureComponent } from 'react';
import { NavLink } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { trackPromise } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import { LoadingIndicator } from '../..';

const ShopkeeperList = props => {
    return(
        
        <tr>
            <td>{props.user.username}</td>
            <td>{props.user.firstname} {props.user.lastname}</td>
            <td>{props.user.email}</td>
            <td>{props.user.dob.substring(0,10)}</td>
            <td>{props.user.rationUser.length}</td>
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

        if(localStorage.getItem('Token')!=null && localStorage.getItem('Token')!='undefined' && localStorage.getItem('CurrentUser')!=null && localStorage.getItem('CurrentUser')!='undefined')
        {
            this.props.history.push("/admin/admin-shopkeeper-details");
            trackPromise(
                axios.get("https://rationapp-backend.herokuapp.com/admin/admin-shopkeeper-details/")
                .then(res => {
                    this.setState({ users : res.data})
                }))
                .catch(err => console.log(err));
        }else{
            this.props.history.push("/admin-panel-login");
            toast.warn("You don't have access, Requires login",{
                position:"top-center"
            })
        }

    }

    deleteUser(id){
        trackPromise(
        axios.delete('https://rationapp-backend.herokuapp.com/admin/admin-shopkeeper-details/'+id)
        .then(res => {
            console.log(res.data)
            toast.success("Shopkeeper Removed Successfully",{
                position:"top-center",
            })
        }));
        this.setState({
            users : this.state.users.filter(el => el._id !== id)
        });
    }


    userList(){
        return this.state.users.reverse().map(currentuser => {
            return<ShopkeeperList user ={currentuser} deleteUser ={this.deleteUser} key ={currentuser._id} />
        })
    }
    
    render() { 
        return ( 
            <>
            <div className="admin-shopkeeper-details">
            <h3 className="mt-3"><strong>Shopkeeper Details</strong></h3>
            <div className="hr"></div>
                <div class="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead className="thead-light">
                            <tr>
                                <th>Username</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>BirthDate</th>
                                <th>Total Users</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.userList() }
                        </tbody>
                    </table>
                </div>
            </div>
            <LoadingIndicator />
            <ToastContainer />
            </>
         );
    }
}
 
export default AdminShopkeeperDetails;