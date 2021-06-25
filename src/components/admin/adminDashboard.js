import React from 'react';
import { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
import { withRouter } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import Ssstockdetails from '../shopkeeper/ss-stock-details';

class AdminDashboard extends PureComponent {
    
    constructor(props){
        super(props);
        this.state = {
            count1 : 0,
            count2 : 0
        };
    }
    
    componentDidMount(){
        if(localStorage.getItem('Token')!=null && localStorage.getItem('Token')!='undefined' && localStorage.getItem('CurrentUser')!=null && localStorage.getItem('CurrentUser')!='undefined')
        {
            this.props.history.push("/admin/admin-dashboard/");
            this.getadmin();
            this.getcomplaints();
        }else{
            this.props.history.push("/admin-panel-login");
            toast.warn("You don't have access, Requires login",{
                position:"top-center"
            })
        }
       
    }
    getadmin(){
        trackPromise(
        axios.get("http://localhost:5000/admin/admin-dashboard/users/")
        .then(res => {
            this.setState({ 
                count1 : res.data.users.length
            })
        })
        .catch(err => console.log(err)));
    }
    getcomplaints(){
        trackPromise(
        axios.get("http://localhost:5000/admin/admin-dashboard/comp/")
        .then(res => {
            console.log(res);
            this.setState({ 
                count2 : res.data.complaints.length
            })
        })
        .catch(err => console.log(err)));
    }
    render() { 
        return ( 
            <>
            <div className="ssdashboard">
                
                <div className=" card-container mb-3 ">
                    <Card border="yellow" style={{ width: '12rem',backgroundColor:'lightgreen' }} className="m-2" id="saffron">
                            <Card.Header><b>Shopkeepers Count</b></Card.Header>
                            <Card.Body>
                            <Card.Title><h1>{this.state.count1}</h1></Card.Title>
                            </Card.Body>
                        </Card>
                    <Card border="yellow" style={{ width: '12rem' ,backgroundColor:'hotpink' }} className="m-2" id="saffron">
                        <Card.Header><b>Complaints</b></Card.Header>
                        <Card.Body>
                        <Card.Title><h1>{this.state.count2}</h1></Card.Title>
                        </Card.Body>
                        </Card>
                    
                </div>
                <Ssstockdetails />
            </div>
            </>
         );
    }
}
 
export default withRouter(AdminDashboard);