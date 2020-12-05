import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from '../Button';
// import home from '../../pages/Home'
import Button from 'react-bootstrap/Button'


function CardItem(props) {
   return (
      <>
         <li className='cards__item' data-aos={props.aos}>
            <div className='cards__item__link'>
               <a href={props.live} target="blank">
                  <figure className='cards__item__pic-wrap' data-category={props.label}>
                     <img
                        className='cards__item__img'
                        alt={props.label}
                        src={props.src}
                     />
                  </figure>
               </a>
               <div className='cards__item__info'>
                  <div id="links">
                     <a href={props.live} target='_blank' ><Button variant="success">Live Link</Button></a>
                     <a href={props.github} target='_blank'
                        class='social-icon-link github'
                        aria-label='Github'
                     >
                        <i className='fab fa-github' id="icon" />
                     </a>
                  </div>
                  <h5 className='cards__item__text'>{props.text}</h5>
               </div>
            </div>
         </li>
      </>
   );
}

export default CardItem;
