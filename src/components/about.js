import React from 'react';
import { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import {Link} from "react-router-dom";
import { FaInstagram, FaLinkedin , FaGithub, FaGlobe, FaGoMail, FaEnvelope} from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import Navbar from '../components/navbar';
class About extends PureComponent {
    render(){
        
        return ( 
            <>
            <Navbar />
            <div className="about m-3 text-center">
            <h2><strong>About Us</strong></h2>
            <div className="hr" />
                <p className="vertical-center">
                In April, 1966 Statutory Rationing was introduced in Greater Mumbai and the Industrial complex of Thana which included the Thana Town, Kalyan, Belapur, Ulhasnagar and Ambernath. All these areas are operating the Rationing Scheme under provisions of the Maharashtra food grain (second) Ration Order of 1966.
                <br/> <br />The Rationing Organization is headed by the Controller of Rationing.The team comprises of 2 Deputy Controllers who assist The Controller in supervising Indent, Shops, Establishments, Administration, Accounts, General, Enforcement, Kerosene etc. There are other five Deputy Controller of Rationing that are incharge of each region, 04 in Mumbai and 01 in Thane.
                Genral control is managed by Food and Civil Supplies department & they also issue directives in policy & other realted matters. Mumbai & Thane area is serviced by 46 Rationing offices. In each Rationing office the day to day functioning is supervised by 1 to 2 Assistant Rationing Officers & is supervised by a Rationing. Each Rationing Office works as Nodal Agency for issue / cancellation /changes in Ration Cards.</p>
                <h2><strong>Aim of the system</strong></h2>
                <div className="hr" />
                <p>Our focus is to reduce the corruption in the ration distribution system. we all want a trasparent system so no one can cheat with ration system</p>
            </div>
            <h3><strong>Developers</strong></h3>
            <div className="hr" />
            <div className="card-container">
            <Card border="dark" style={{ width: '18rem', height:"18rem" ,borderRadius:"50%"}} className="m-2 overflow-hidden">
                    <Card.Header className="bg-dark text-white"><b>Developer #1</b></Card.Header>
                    <Card.Body>
                    <Card.Title> <b>Dnyaneshwar Sakhare</b> </Card.Title>
                    <Card.Text className="about-icons">
                        B. Tech CSE 2021, <br />
                        Rit Islampur, Sangli.
                        <div className="icons">
                        <a data-tip="sdnyanu22@gmail.com" style={{color: "black"}} target="blank" href="mailto:sdnyanu22@gmail.com"><FaEnvelope /></a>
                        <a data-tip="/Dnyaneshwarsakhare" style={{color: "black"}} target="blank" href="https://github.com/Dnyaneshwarsakhare/"><FaGithub /></a>
                        <a data-tip="/dnyaneshwar_s22" style={{color: "black"}} target="blank" href="https://www.instagram.com/dnyaneshwar_s22/"><FaInstagram /></a>
                        <a data-tip="/dnyaneshwar-sakhare" style={{color: "black"}} target="blank" href="https://linkedin.com/dnyaneshwar-sakhare"><FaLinkedin /></a>
                        <a data-tip="Personal website" style={{color: "black"}} target="blank" href="http://dnyaneshwarsakhare.github.io/Portfolio"><FaGlobe /></a>
                        </div>
                    </Card.Text>
                    
                    </Card.Body>
                    <Card.Footer className="bg-dark text-white"><b>Github Linkedin</b></Card.Footer>
                </Card>
                <Card border="dark" style={{width:"18rem", height:"18rem",borderRadius:"50%" }} className="m-2 overflow-hidden">
                    <Card.Header className="bg-dark text-white"><b>Developer #2</b></Card.Header>
                    {/* <Card.Img style={{height:'10rem'}} src="saffron-photo.jpg" /> */}
                    <Card.Body>
                    <Card.Title><b>Ram Waghmode</b> </Card.Title>
                    <Card.Text className="about-icons">
                        B. Tech CSE 2021, <br />
                        Rit Islampur, Sangli.
                        <div className="icons">
                        <a data-tip="ramwaghmode145@gmail.com" style={{color: "black"}} target="blank" href="mailto:ramwaghmode145@gmail.com"><FaEnvelope /></a>
                        <a data-tip="/ramraj145" style={{color: "black"}} target="blank" href="https://github.com/ramraj145"><FaGithub /></a>
                        <a data-tip="/r_a_m_145" style={{color: "black"}} target="blank" href="https://www.instagram.com/r_a_m_145/"><FaInstagram /></a>
                        <a data-tip="/ram-waghmode-687aa8185" style={{color: "black"}} target="blank" href="https://www.linkedin.com/in/ram-waghmode-687aa8185/"><FaLinkedin /></a>
                        <a data-tip="Personal website" style={{color: "black"}} target="blank" href="#"><FaGlobe /></a>
                        </div>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-dark text-white"><b>Github Linkedin</b></Card.Footer>
                </Card>
                <Card border="dark" style={{ width: '18rem', height:"18rem" ,borderRadius:"50%"}} className="m-2 overflow-hidden" >
                    <Card.Header className="bg-dark text-white"><b>Developer #3</b></Card.Header>
                    {/* <Card.Img style={{height:'10rem'}} src="yellow-photo.jpg" /> */}
                    <Card.Body>
                    <Card.Title> <b>Sanket Gavali</b> </Card.Title>
                    <Card.Text className="about-icons">
                        B. Tech CSE 2021, <br />
                        Rit Islampur, Sangli.
                        <div className="icons">
                        <a data-tip="sanketgavali885@gmail.com" style={{color: "black"}} target="blank" href="mailto:sanketgavali885@gmail.com"><FaEnvelope /></a>
                        <a data-tip="/Sanketgavali" style={{color: "black"}} target="blank" href="https://github.com/"><FaGithub /></a>
                        <a data-tip="/gavali_sanket" style={{color: "black"}} target="blank" href="https://www.instagram.com/gavali_sanket/"><FaInstagram /></a>
                        <a data-tip="/sanket-gavali" style={{color: "black"}} target="blank" href="https://linkedin.com/"><FaLinkedin /></a>
                        <a data-tip="Personal website" style={{color: "black"}} target="blank" href="#"><FaGlobe /></a>
                        </div>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-dark text-white"><b>Github Linkedin</b></Card.Footer>
                </Card>
                <Card border="dark" style={{ width: '18rem', height:"18rem",borderRadius:"50%" }} className="m-2 overflow-hidden" >
                    <Card.Header className="bg-dark text-white"><b>Developer #4</b></Card.Header>
                    {/* <Card.Img style={{height:'10rem'}} src="yellow-photo.jpg" /> */}
                    <Card.Body>
                    <Card.Title> <b>Nikhil Mane</b> </Card.Title>
                    <Card.Text className="about-icons">
                        B. Tech CSE 2021, <br />
                        Rit Islampur, Sangli.
                        <div className="icons">
                        <a data-tip="manenikhil83@gmail.com" style={{color: "black"}} target="blank" href="mailto:manenikhil83@gmail.com"><FaEnvelope /></a>
                        <a data-tip="/Nikhilmane" style={{color: "black"}} target="blank" href="https://github.com/"><FaGithub /></a>
                        <a data-tip="/mr_nick__11" style={{color: "black"}} target="blank" href="https://www.instagram.com/mr_nick__11/"><FaInstagram /></a>
                        <a data-tip="/nikhil-mane" style={{color: "black"}} target="blank" href="https://linkedin.com/"><FaLinkedin /></a>
                        <a data-tip="Personal website" style={{color: "black"}} target="blank" href="#"><FaGlobe /></a>
                        </div>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-dark text-white"><b>Github Linkedin</b></Card.Footer>
                </Card>
                <ReactTooltip />
            </div>
            
            </>
        );
    }
}
 
export default About;