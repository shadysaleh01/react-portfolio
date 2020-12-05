import React, { useEffect } from 'react'
// import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from "aos";
import "aos/dist/aos.css"
import "./About.css"

function About() {
   useEffect(() => {
      Aos.init({ duration: 2000 });
   }, [])
   return (
      <div className="container" id="about">
         <div class="card mb-3 col-lg-10 col-md-8 col-sm-10 offset-lg-1 offset-md-2 offset-sm-1 narrow text-center shadow-lg p-3 mb-5 rounded bg-white border-light" id="card" data-aos="fade-up"
            data-aos-duration="2000" >
            <div class="card-horizontal shadow-lg">
               <div class="img-square-wrapper col-lg-7">
                  <img class="img" src="../images/portfolio.jpg" alt="Card image cap" />
               </div>
               <div class="card-body col-lg-10">
                  <h3 class="card-title">ABOUT ME</h3>
                  <p class="card-text">Hello, I'm Shady Saleh! I live in California. I'm a Full Stack Developer with a background in Computer Science and life-long commitment to learning and growing in the technical field. I am dedicated to combining creativity and problem solving to develop clean code for user-friendly applications and websites. I design, build, operate & sometimes debug web applications.
                  I am known among staff for leadership and attention to detail no matter the complexity of the project. I'm aiming to develop my own online retail company by utilizing sales channels like Amazon & eBay Marketplaces.</p>
               </div>
            </div>
            {/* <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
         </div> */}
         </div>
      </div>
   )
}

export default About;