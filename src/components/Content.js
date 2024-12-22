import React from "react";
import "./Content.css"; 

import { BrowserRouter } from 'react-router-dom'; 
import { Route } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import mixitup from 'mixitup';
import Swiper from 'swiper';

function Content() {
    return (
        <div className="container" id="container">
            <section className="content-con">
                <div className="content-l">
                    <img src="/assets/img/รูปถ่าย.jpg" alt="project"/>
                </div>
                <div className="content-r">
                    <h2>About</h2>
                    <p>
                    i have over four years of experience training as a developer with a solid understanding of how code works. i am adaptable polite and responsible and i am currently seeking opportunities to gain more hands-on experience in a web development role.
                    </p>
                </div>
            </section> 
            <section class="section__container journey__container">
      <p class="section__subheader">My Qualifications</p>
      <h2 class="section__header">Resume</h2>
      <div class="journey__grid">
        <div>
          <div class="journey__grid__header">
            <span><i class="ri-graduation-cap-line"></i></span> Education
          </div>
          <div class="journey__card">
            <span><i class="ri-circle-fill"></i></span>
            <div>
              <h4>MAEJO UNIVERSITY</h4>
              <h5>Computer Science</h5>
              <p>
                <span><i class="ri-calendar-fill"></i></span> 2022-Present
              </p>
            </div>
          </div>
          <div class="journey__card">
            <span><i class="ri-circle-fill"></i></span>
            <div>
              <h4>Sapphawitthayakhom School</h4>
              <h5>Science & Mathematics</h5>
              <p>
                <span><i class="ri-calendar-fill"></i></span> 2019-2022
              </p>
            </div>
          </div>
          
        </div>
        <div>
          <div class="journey__grid__header">
            <span><i class="ri-briefcase-line"></i></span> Experience
          </div>
          <div class="journey__card">
            <span><i class="ri-circle-fill"></i></span>
            <div>
              <h4>Food selling website (Project)</h4>
              <h5>I have created an platform that allows product management, including calculating product total prices and applying discounts, as well as adding new products and deleting existing products.</h5>
              <p>
                <span><i class="ri-calendar-fill"></i></span> 2023
              </p>
            </div>
          </div>
          <div class="journey__card">
            <span><i class="ri-circle-fill"></i></span>
            <div>
              <h4>mobile application (Project)</h4>
              <h5>I have created an app platform for listening to music as well as adding photos and customizing album covers.</h5>
              <p>
                <span><i class="ri-calendar-fill"></i></span> 2023
              </p>
            </div>
          </div>
          <div class="journey__card">
            <span><i class="ri-circle-fill"></i></span>
            <div>
              <h4>Arduino (Project)</h4>
              <h5>I programmed an Arduino board to create an automatic timer for a cat feeder.</h5>
              <p>
                <span><i class="ri-calendar-fill"></i></span> 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
            <section class="portfolio" id="portfolio">
      <div class="section__container portfolio__container">
        <p class="section__subheader">My Portfolio</p>
        <h2 class="section__header">_____</h2>
        
        
        
        <div class="portfolio__grid">
          <div class="portfolio__card mix web">
            <img src="assets/img/project1.png" alt="project" />
          </div>
          
          
          
          
        </div>
      </div>
    </section>
    
        </div>
    )
}

export default Content
