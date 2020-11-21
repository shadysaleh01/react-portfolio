import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
   const [click, setClick] = useState(false)


   return (
      <div>
         <nav className="navbar">
            <div className="navbar-container">
               <Link to="/" className="navbar-logo">
                  Shady Saleh <i className="fab fa-typo3" />
               </Link>


            </div>
         </nav>
      </div>
   )
}

export default Navbar
