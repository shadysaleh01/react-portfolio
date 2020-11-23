import React, { useEffect } from 'react';
import { Button } from '../Button';
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";
import "../../App.css"


function HeroSection() {
   useEffect(() => {
      Aos.init({ duration: 3000 });
   }, [])
   return (
      <div className="hero-container">
         <video src="/videos/video-1.mp4" autoPlay loop muted />
         <h1 className="animated fadeInDown" data-aos="zoom-in-down">
            Hi, I'm SH<span className="firstA">A</span>DY
            <span className="saleh"> S<span className="secondA">A</span>LEH</span>
         </h1>
         <h2 className="animated fadeInUp delay-05s" data-aos="zoom-out-down">I Am Web-Developer</h2>
         <div data-aos="flip-right">
            <Button className="btns"
               buttonStyle="btn--primary"
               buttonSize="btn--large">
               LET'S WORK TOGETHER <i className="far fa-work" />
            </Button>
         </div>
      </div>
   )
};

export default HeroSection;

