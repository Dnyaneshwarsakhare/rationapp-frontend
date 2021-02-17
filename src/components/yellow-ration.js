import React from 'react';

import { Card, Badge } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { PureComponent } from 'react';

class Yellow extends PureComponent {
    render(){
        return ( 
            <>
        
            <div className="yellow-ration ml-3 mr-3" style={{textAlign:'left'}}>
                <div className="titleandcomplaint d-flex flex-row m-3" style={{justifyContent:"space-between"}}>
                    <h2>Yellow Ration Card</h2>
                    <div>

                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Notifications <Badge variant="light"> 9</Badge>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" className="bg-success">Your Ration Allocated Successfully</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" className="bg-info">Your complaint registred successfully</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" className="bg-danger">Allocation Failed</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>&nbsp;

                        <NavLink to="/complaint" className="btn bg-danger" style={{color:'white'}}><b>Complaint</b></NavLink>
                    </div>
                </div>
            <div className="card-container">
                    <Card border="yellow" style={{ width: '18rem' }} className="m-2" id="yellow">
                        <Card.Header><b>RICE / तांदूळ</b></Card.Header>
                        <Card.Body>
                        <Card.Title>Rate = Rs.20 per kg <br/>Qty = 5kg</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card border="yellow" style={{ width: '18rem' }} className="m-2" id="yellow">
                        <Card.Header><b>SUGAR / साखर</b></Card.Header>
                        <Card.Body>
                        <Card.Title>Rate = Rs.20 per kg <br/>Qty = 5kg</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card border="yellow" style={{ width: '18rem' }} className="m-2" id="yellow">
                        <Card.Header><b>WHEAT / गहू</b></Card.Header>
                        <Card.Body>
                        <Card.Title>Rate = Rs.20 per kg <br/>Qty = 5kg</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card border="yellow" style={{ width: '18rem' }} className="m-2" id="yellow">
                        <Card.Header><b>OIL / तेल</b></Card.Header>
                        <Card.Body>
                        <Card.Title>Rate = Rs.20 per kg <br/>Qty = 5kg</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card border="yellow" style={{ width: '18rem' }} className="m-2" id="yellow">
                        <Card.Header><b>COARSE GRAINS / डाळ</b></Card.Header>
                        <Card.Body>
                        <Card.Title>Rate = Rs.20 per kg <br/>Qty = 5kg</Card.Title>
                        </Card.Body>
                    </Card>
                    </div>

                    <h4>Requirements :</h4>
                    <ul>
                        <li>Families having annual income up to Rs.15,000/-(Urban Area)</li>
                        <li>None of the members in the family should be a doctor, lawyer, architect or chartered accountant.</li>
                        <li>None of the members in the family should be professional tax payer,sales tax payer or income tax payer or eligible to pay such tax.</li>
                        <li>The family should not posses residential telephone.</li>
                        <li>The family should not posses four wheeler vehicle.</li>
                        <li>All the persons in the family should not hold totl two hectare rain fed or one hectare semi-irrigated or 1/2 hectare irrigated(double in drought affected talukas) land.</li>
                        <li>The Govt has taken decision to issue a BPL Ration Card on temporary Basis to the all Bidi workers, all Pardhi & Kolhati community vide GR dated 9/92008.</li>
                        <li>The Govt has taken decision to issue a BPL Ration Card on temporary Basis to the Abandoned women vide GR dated 29/9/2008 & 21/2/2009.</li>
                        <li>The Govt has also taken decision to issue BPL Cards to ex-mill workers with provision that they will get benefit of food grains of after distribution to regular BPL families and food grain available with shopkeeper.</li>
                    </ul>
            </div>
            </>
        );
    }
}
 
export default Yellow;