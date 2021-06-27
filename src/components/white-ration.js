import React from 'react';

import { Badge, Card } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { PureComponent } from 'react';
import Navbar from '../components/navbar';
class White extends PureComponent {
    render(){
        return ( 
            <>
            <Navbar />
            <div className="white-ration ml-3 mr-3" style={{textAlign:'left'}}>
            <div className="titleandcomplaint d-flex flex-row m-3" style={{justifyContent:"space-between"}}>
                    <h2>White Ration Card</h2>
                    <div className="">
                        
                        <NavLink to="/complaint" className="btn bg-danger" style={{color:'white'}}><b>Complaint</b></NavLink>
                    </div>
                </div>
                    <div className="card-container">
                    <Card border="yellow" style={{ width: '18rem' }} className="m-2" id="white">
                        <Card.Header><b>RICE / तांदूळ</b></Card.Header>
                        <Card.Body>
                        <Card.Title>Rate = Rs.15 per kg <br/>Qty = 5kg</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card border="yellow" style={{ width: '18rem' }} className="m-2" id="white">
                        <Card.Header><b>SUGAR / साखर</b></Card.Header>
                        <Card.Body>
                        <Card.Title>Rate = Rs.15 per kg <br/>Qty = 5kg</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card border="yellow" style={{ width: '18rem' }} className="m-2" id="white">
                        <Card.Header><b>WHEAT / गहू</b></Card.Header>
                        <Card.Body>
                        <Card.Title>Rate = Rs.20 per kg <br/>Qty = 5kg</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card border="yellow" style={{ width: '18rem' }} className="m-2" id="white">
                        <Card.Header><b>OIL / तेल</b></Card.Header>
                        <Card.Body>
                        <Card.Title>Rate = Rs.20 per kg <br/>Qty = 5kg</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card border="yellow" style={{ width: '18rem' }} className="m-2" id="white">
                        <Card.Header><b>COARSE GRAINS / डाळ</b></Card.Header>
                        <Card.Body>
                        <Card.Title>Rate = Rs.30 per kg <br/>Qty = 5kg</Card.Title>
                        </Card.Body>
                    </Card>
                    </div>
                    <h4>Requirements :</h4>
                    <ul>
                        <li>The Families having annual income of Rs.1 Lakh or above, any member of the family possessing a four-wheeler or the family aggregately holding more than 4 hectare irrigated land isssued white ration cards.</li>                   
                    </ul>
            </div>
            </>
        );
    }
}
 
export default White;