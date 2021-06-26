import React from 'react';
import { PureComponent } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { trackPromise } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import { LoadingIndicator } from '../..';
import { withRouter } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

const ComplaintList = props => {
    return(
        <>
        <div class="card card-complaint">
                    <div class="card-header bg-secondary">
                        <p>From :  {props.complaint.email}</p>
                        Against :  {props.complaint.shopkeepername}  
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{props.complaint.title}</h5>
                        <p class="card-text">{props.complaint.query}</p>
                        
                    </div>
        </div>
        &nbsp;
        </>
    )
}


class AdminComplaint extends PureComponent {
    
    constructor(props){
        console.log(props);
        super(props);
        this.state = {complaints : []};
    }

    componentDidMount(){

        if(localStorage.getItem('Token')!=null && localStorage.getItem('Token')!='undefined' && localStorage.getItem('CurrentUser')!=null && localStorage.getItem('CurrentUser')!='undefined')
        {
            this.props.history.push("/admin/admin-complaint");
            trackPromise(
                axios.get("https://rationapp-backend.herokuapp.com/admin/admin-complaint")
                .then(res => {
                    this.setState({ complaints : res.data})
                }))
                .catch(err => console.log(err));
            
        }else{
            this.props.history.push("/admin-panel-login");
            toast.warn("You don't have access, Requires login",{
                position:"top-center"
            })
        }
    }
    
    complaintsList(){
        return this.state.complaints.reverse().map(currentcomplaint => {
            return<ComplaintList complaint ={currentcomplaint} key ={currentcomplaint._id} />
        })
    }

    render() { 
        return ( 
            <>
            <div className="admin-complaint">
                <h3 className="mt-3"><strong>Complaints</strong></h3>
                <div className="hr"></div>
                <div className="complaint">
                { this.complaintsList() }
                </div>
                <LoadingIndicator />
            </div>
            </>
         );
    }
}
 
export default withRouter(AdminComplaint);