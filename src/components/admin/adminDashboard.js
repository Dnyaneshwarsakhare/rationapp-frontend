import React from 'react';
import { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import axios from 'axios';
class AdminDashboard extends PureComponent {
    
    constructor(props){
        super(props);
        this.state = {
            count : ""
        };
    }
    
    componentDidMount(){
        axios.get("http://localhost:5000/admin/admin-dashboard")
        .then(res => {
            this.setState({ count : res.data})
        })
        .catch(err => console.log(err));
    }

    render() { 
        return ( 
            <>
            <div className="ssdashboard">
                
                <div className="containerfordashboard">
                    <Card border="yellow" style={{ width: '12rem',backgroundColor:'lightgreen' }} className="m-2" id="saffron">
                            <Card.Header><b>Shopkeepers Count</b></Card.Header>
                            <Card.Body>
                            <Card.Title><h1>{this.state.count}</h1></Card.Title>
                            </Card.Body>
                        </Card>
                    <Card border="yellow" style={{ width: '12rem' ,backgroundColor:'hotpink' }} className="m-2" id="saffron">
                        <Card.Header><b>Complaints</b></Card.Header>
                        <Card.Body>
                        <Card.Title>45</Card.Title>
                        </Card.Body>
                        </Card>
                    <Card border="yellow" style={{ width: '12rem',backgroundColor:'lightblue' }} className="m-2" id="saffron">
                        <Card.Header><b>Pending Request</b></Card.Header>
                        <Card.Body>
                        <Card.Title>86</Card.Title>
                        </Card.Body>
                        </Card>
                </div>

            </div>
            </>
         );
    }
}
 
export default AdminDashboard;