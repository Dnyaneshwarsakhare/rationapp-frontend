import React from 'react';
import { PureComponent } from 'react';
import {FaEnvelope, FaPhone} from 'react-icons/fa';
import Navbar from '../components/navbar';
class Contact extends PureComponent {
    render(){
        return ( 
            <>
            <Navbar />
            <div className="contact m-4" style={{textAlign:'center'}}>
                <h2><strong>Contact Us</strong></h2>
                <div className="hr" />
                <h3>HelpLine Numbers :</h3><br/>
                <h5>Controller of Rationing & Director of Civil Supplies Phone no <FaPhone /> 022-22852814</h5><br />
                <h5>Official email id <FaEnvelope />  dycor.ho-mum@gov.in</h5><br/>
                <h5>Mantralaya - Telephone No <FaPhone /> 022-22024243</h5><br/>
                <h5>Public Distribution - Tollfree Helpline No <FaPhone /> 1967 or 1800-22-4950</h5>
                <br/>
                <h6>For More Details Visit :- <a className="btn btn-outline-primary btn-sm" href="http://controllerofrationing-mumbai.gov.in/index.html">Click here</a></h6>
            </div>
            </>
        );
    }
}
 
export default Contact;