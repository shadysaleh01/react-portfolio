import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
   const [click, setClick] = useState(false);
   const [button, setButton] = useState(true);

   const handleClick = () => setClick(!click);
   const closeMobileMenu = () => setClick(false);



   return (
      <div>
         <nav className="navbar">
            <div className="navbar-container">
               <Link to="/" className="navbar-logo">
                  Shady Saleh <i className="fab fa-typo3" />
               </Link>
               <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? "fas fa-times" : "fas fa-bars"} />
               </div>
               <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                     <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                        Projects
                     </Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                        Contact
                     </Link>
                  </li>
               </ul>

            </div>
         </nav>
      </div>
   )
}

export default Navbar
