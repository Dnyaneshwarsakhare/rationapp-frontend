import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const home = () => {
    return ( 
        <>
    
        <div className="home m-3">
            <div className="page-title">Tricolour Ration Cards Scheme</div>
            <div className="card-container">
                <Card border="dark" style={{ width: '18rem' }} className="m-2" id="white">
                    <Card.Header><b>WHITE</b></Card.Header>
                    <Card.Img style={{height:'10rem'}} src="white-photo.jpg" />
                    <Card.Body>
                    <Card.Title> शिधापत्रिका </Card.Title>
                    <Card.Text>
                        White Ration card Benefits, Allocation details, Ration details, Detailed analysis etc.
                    </Card.Text>
                    <NavLink to="/white" style={{color:'white'}} className="btn bg-dark">View</NavLink>
                    </Card.Body>
                </Card>
                <Card border="yellow" style={{width:"18rem"}} className="m-2" id="saffron">
                    <Card.Header><b>SAFFRON</b></Card.Header>
                    <Card.Img style={{height:'10rem'}} src="saffron-photo.jpg" />
                    <Card.Body>
                    <Card.Title> शिधापत्रिका </Card.Title>
                    <Card.Text>
                        Saffron Ration card Benefits, Allocation details, Ration details, Detailed analysis etc.
                    </Card.Text>
                    <NavLink to="/saffron" style={{color:'white'}} className="btn bg-dark">View</NavLink>
                    </Card.Body>
                </Card>
                <Card border="yellow" style={{ width: '18rem' }} className="m-2" id="yellow">
                    <Card.Header><b>YELLOW</b></Card.Header>
                    <Card.Img style={{height:'10rem'}} src="yellow-photo.jpg" />
                    <Card.Body>
                    <Card.Title> शिधापत्रिका </Card.Title>
                    <Card.Text>
                        Yellow Ration card Benefits, Allocation details, Ration details, Detailed analysis etc.
                    </Card.Text>
                    <NavLink to="/yellow" style={{color:'white'}} className="btn bg-dark">View</NavLink>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </>
     );
}
 
export default home;