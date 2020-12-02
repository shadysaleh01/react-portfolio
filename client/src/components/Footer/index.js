import React from 'react';
import { Link } from 'react-router-dom'
import "./footer.css"

function Footer() {

   return (
      <div className="footer-container">
         <section class='social-media'>
            <div class='social-media-wrap'>
               {/* <div class='footer-logo'>
                  <Link to='/' className='social-logo'>
                     
                   <i class='fab fa-typo3' />
                  </Link>
               </div> */}
               {/* <small class='website-rights'>Shady © 2020</small> */}
               <div class='social-icons'>
                  <Link
                     class='social-icon-link facebook'
                     to='https://www.facebook.com/ShadiMSaleh/'
                     target='_blank'
                     aria-label='Facebook'
                  >
                     <i class='fab fa-facebook-f' />
                  </Link>
                  <Link
                     class='social-icon-link instagram'
                     to='https://www.instagram.com/shadycoder01/?hl=en'
                     target='_blank'
                     aria-label='Instagram'
                  >
                     <i class='fab fa-instagram' />
                  </Link>
                  <Link
                     class='social-icon-link linkedin'
                     to='https://www.linkedin.com/in/shady-saleh01/'
                     target='_blank'
                     aria-label='LinkedIn'
                  >
                     <i class='fab fa-linkedin' />
                  </Link>
                  <Link
                     class='social-icon-link github'
                     to='https://github.com/shadysaleh01'
                     target='_blank'
                     aria-label='Github'
                  >
                     <i class='fab fa-github' />
                  </Link>
                  <Link
                     class='social-icon-link twitter'
                     to='/'
                     target='_blank'
                     aria-label='Twitter'
                  >
                     <i class='fab fa-twitter' />
                  </Link>
               </div>
            </div>
         </section>
      </div>
   )
}

export default Footer;