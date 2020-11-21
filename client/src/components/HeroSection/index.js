import React from 'react';
import { Button } from '../Button';
import "./style.css";
import "../../App.css"


function HeroSection() {
   return (
      <div className="hero-container">
         <video ser="/videos/video-2.mp4" autoPlay loop muted />
         <h1>Hi, I'm Shady Saleh</h1>
         <h3>I Am Web-Developer</h3>
         <Button className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large">
            LET'S WORK TOGETHER <i className="far fa-work" />
         </Button>
      </div>
   )
};

export default HeroSection;

