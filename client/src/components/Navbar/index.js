import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
   const [click, setClick] = useState(false)
   const handleClick = () => setClick(!click)

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

            </div>
         </nav>
      </div>
   )
}

export default Navbar
