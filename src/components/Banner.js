import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Typewriter from 'typewriter-effect';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './Banner.css';

export const Banner = ()  => (
    <div>
 
    
   

     <Container>
     
        <Row>
            <section class="height-300vh center-aligned">
            <img class="background-image" src="assets/img/รูป2.jpg" /> 
            <h2 class="s">I am Tara</h2>
            <div class="text">
              <h1>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 80,
                        strings: ["Developer"]
                    }}
                />
            </h1>
            
            </div>
            
            </section>
            
        </Row>
    </Container>




<Container fluid>
  <Row>
    <Col>
    
    </Col>
  </Row>
</Container>

   
    </div>


)

export default Banner
