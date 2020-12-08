import React, { Component, useState, useEffect } from 'react'
// import { Router } from "react-router-dom"
// import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button"
// import { Button } from '../Button';
import "./style.css"
import ScrollspyNav from 'react-scrollspy-nav';

function Navbar() {
   const [click, setClick] = useState(false);
   const [button, setButton] = useState(true);

   // function for when I click on the menu button will switch between icons
   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);

   // to disappear the resume button when width less than 960
   const showButton = () => {
      if (window.innerWidth <= 960) {
         setButton(false);
      } else {
         setButton(true);
      }
   };

   useEffect(() => {
      showButton();
   }, []);

   window.addEventListener("resize", showButton);


   return (
      <div>
         <ScrollspyNav
            scrollTargetIds={["about", "projects", "contacts"]}
            offset={120}
            activeNavClass="is-active"
            scrollDuration="1000"
            headerBackground="true"
         >
            <nav className="navbar">
               <div className="navbar-container">
                  <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
                     Shady Saleh <i className="fab fa-typo3" />
                  </a>
                  <div className="menu-icon" onClick={handleClick}>
                     <i className={click ? "fas fa-times" : "fas fa-bars"} />
                  </div>
                  <ul className={click ? "nav-menu active" : "nav-menu"}>
                     <li className="nav-item">
                        <a href="/" className="nav-links" onClick={closeMobileMenu}>
                           Home
                     </a>
                     </li>
                     <li className="nav-item">
                        <a href="#about" className="nav-links" onClick={closeMobileMenu}>
                           About
                     </a>
                     </li>
                     <li className="nav-item">
                        <a href="#projects" className="nav-links" onClick={closeMobileMenu}>
                           Projects
                     </a>
                     </li>
                     <li className="nav-item">
                        <a href="#contacts" className="nav-links" onClick={closeMobileMenu}>
                           Contacts
                     </a>
                     </li>
                     <li >
                        <a href="http://localhost:3000/resume/MyResume.pdf" target='_blank' className="nav-links-mobile" onClick={closeMobileMenu}>
                           Resume
                     </a>
                     </li>
                  </ul>
                  <a href="http://localhost:3000/resume/MyResume.pdf" target='_blank'>RESUME</a>
                  {/* {button && <a href="./resume/MyResume.pdf" target='_blank'><Button variant="outline-warning" >RESUME</Button></a>} */}
               </div>
            </nav>
            {/* <Switch>
               <Route path="/about">
                  <About />
               </Route>
               <Route path="/projects">
                  <Projects />
               </Route>
               <Route path="/contacts">
                  <Contacts />
               </Route>
               <Route path="/resume">
                  <Resume />
               </Route>
            </Switch> */}
         </ScrollspyNav>
      </div>
   )
}

export default Navbar
