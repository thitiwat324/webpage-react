import React from "react";
import "./CallToAction.css";
import { FiCode } from "react-icons/fi";
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function CallToAction() {
    return (
        <div className="CallToAction-bg">
            <div className="overlay"><Image src="/assets/img/IMG_9202.jpg" className="testimonials-bg"/></div>
            <div className="container">                
                <div className="CallToAction-text">
                    <FiCode className="FiCode" />
                    <Container>
                <Row className= "show-grid  ">
                    <Col xs={12} sm={12} className="icons ">
                    <div className="social-icons">
                    <a href="https://www.facebook.com/twitiwat.arkix">
                    <Image src="/assets/img/facebook.png" className="social-icon"/>
                    </a>
                    <a href="https://www.instagram.com/thi._ara/">
                    <Image src="/assets/img/instagram.png" className="social-icon"/>
                    </a>
                    <a href="https://github.com/thitiwat324">
                    <Image src="/assets/img/github.png" className="social-icon"/>
                    </a>
                    </div>
                    </Col>
                </Row>
                <Row className= "show-grid text-center">
                <Col xs={12} sm={4} className="icons"> 
                <Image src="/assets/img/google-maps.png" className="social-icon"/>
                 <div className="info-footer">
                 <h4> ADDRESS</h4>
                 <p> 122 Moo 5 Sahakorn Road, Tumbon</p>
                 <p>San Sai District chiang mai 50290</p>              
                </div>
                </Col>
                <Col xs={12} sm={4} className="icons"> 
                <Image src="/assets/img/gmail.png" className="social-icon"/>
                 <div className="info-footer">
                 <h4> EMAIL</h4>
                 <p>mesih2453@gmail.com</p>              
                </div>
                </Col>

                <Col xs={12} sm={4} className="icons"> 
                <Image src="/assets/img/phone-call.png" className="social-icon"/>
                 <div className="info-footer">
                 <h4> PHONE</h4>                 
                 <p>+66 82-880-9516</p>              
                </div>
                </Col>
                
                


                </Row>
                </Container>
                    
                    <a href="#" className="CallToAction-btn">get to know</a>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
