import React, { useEffect } from 'react';
import { Button } from '../Button';
// import Button from "react-bootstrap/Button"
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";
import "../../App.css"
import ScrollspyNav from 'react-scrollspy-nav';

// import video from "../../videos/video-1.mp4"


function HeroSection() {
   // useEffect(() => {
   //    Aos.init({ duration: 3000 });
   // }, [])
   return (
      <div className="hero-container" id="home">
         {/* <video src={video} autoPlay loop muted /> */}
         <h1 className="animated fadeInDown" data-aos="zoom-in-down">
            Hi, I'm <span className="firstA">S</span>HADY
            <span className="saleh"> <span className="secondA">S</span>ALEH</span>
         </h1>
         <h2 className="animated fadeInUp delay-05s" data-aos="zoom-out-down">I'm a Web-Developer</h2>
         <div data-aos="flip-right">
         <ScrollspyNav scrollTargetIds={["about","home"]} >
            <Button className="btns"
               buttonStyle="btn--outline"
               buttonSize="btn--large"
               href="#about">
               LET'S WORK TOGETHER <i className="far fa-work" />
            </Button>
         </ScrollspyNav>
         </div>
      </div>
   )
};

export default HeroSection;

