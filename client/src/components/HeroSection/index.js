import React from 'react';
import { Button } from '../Button';
import "./style.css";
import "../../App.css"


function HeroSection() {
   return (
      <div className="hero-container">
         <video src="/videos/video-1.mp4" autoPlay loop muted />
         <h1 className="animated fadeInDown">
            Hi, I'm SH<span className="firstA">A</span>DY
            <span className="saleh"> S<span className="secondA">A</span>LEH</span>
         </h1>
         <h2 className="animated fadeInUp delay-05s">I Am Web-Developer</h2>
         <Button className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large">
            LET'S WORK TOGETHER <i className="far fa-work" />
         </Button>
      </div>
   )
};

export default HeroSection;

