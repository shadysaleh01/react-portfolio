import React from 'react';
import { Link } from 'react-router-dom'
import "./footer.css"

function Footer() {

   return (
      <div className="footer-container">
         <section class='social-media'>
            <div class='social-media-wrap'>
               <div class='social-icons'>
                  <a
                     class='social-icon-link facebook'
                     href='https://www.facebook.com/ShadiMSaleh/'
                     target='blank'
                     aria-label='Facebook'
                  >
                     <i class='fab fa-facebook-f' />
                  </a>
                  <a
                     class='social-icon-link instagram'
                     href='https://www.instagram.com/shadycoder01/?hl=en'
                     target='blank'
                     aria-label='Instagram'
                  >
                     <i class='fab fa-instagram' />
                  </a>
                  <a
                     class='social-icon-link linkedin'
                     href='https://www.linkedin.com/in/shady-saleh01/'
                     target='blank'
                     aria-label='LinkedIn'
                  >
                     <i class='fab fa-linkedin' />
                  </a>
                  <a
                     class='social-icon-link github'
                     href='https://github.com/shadysaleh01'
                     target='blank'
                     aria-label='Github'
                  >
                     <i class='fab fa-github' />
                  </a>
                  <a
                     class='social-icon-link twitter'
                     href='/'
                     target='blank'
                     aria-label='Twitter'
                  >
                     <i class='fab fa-twitter' />
                  </a>
               </div>
            </div>
         </section>
      </div>
   )
}

export default Footer;