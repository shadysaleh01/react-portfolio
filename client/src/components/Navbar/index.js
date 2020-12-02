import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button';
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
      <>
         <ScrollspyNav
            scrollTargetIds={["about", "projects", "contacts"]}
            offset={100}
            activeNavClass="is-active"
            scrollDuration="1000"
         >
            <nav className="navbar">
               <div className="navbar-container">
                  <Link href="/" className="navbar-logo" onClick={closeMobileMenu}>
                     Shady Saleh <i className="fab fa-typo3" />
                  </Link>
                  <div className="menu-icon" onClick={handleClick}>
                     <i className={click ? "fas fa-times" : "fas fa-bars"} />
                  </div>
                  <ul className={click ? "nav-menu active" : "nav-menu"}>
                     <li className="nav-item">
                        <Link href="/" className="nav-links" onClick={closeMobileMenu}>
                           Home
                     </Link>
                     </li>
                     <li className="nav-item">
                        <Link href="#about" className="nav-links" onClick={closeMobileMenu}>
                           About
                     </Link>
                     </li>
                     <li className="nav-item">
                        <Link href="#projects" className="nav-links" onClick={closeMobileMenu}>
                           Projects
                     </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="#contacts" className="nav-links" onClick={closeMobileMenu}>
                           Contacts
                     </Link>
                     </li>
                     <li>
                        <Link to="/resume" className="nav-links-mobile" onClick={closeMobileMenu}>
                           Resume
                     </Link>
                     </li>
                  </ul>
                  {button && <Button buttonStyle="btn--outline">RESUME</Button>}
               </div>
            </nav>
         </ScrollspyNav>
      </>
   )
}

export default Navbar
