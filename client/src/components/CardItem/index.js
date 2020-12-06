import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from '../Button';
// import home from '../../pages/Home'
import "./style.css"
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
                     <a href={props.live} target='_blank' ><Button variant="success">DEMO</Button></a>
                     <a href={props.github} target='_blank'
                        class='social-icon-link github'
                        aria-label='Github'
                     >
                        <i className='fab fa-github' id="icon" />
                     </a>
                  </div>
                  <h5 className='cards__item__text'>{props.text}</h5>
                  <h6>Technologies:</h6>
                  <img className="icons" src={props.icon1} />
                  <img className="icons" src={props.icon2} />
                  <img className="icons" src={props.icon3} />
                  <img className="icons" src={props.icon4} />
                  <img className="icons" src={props.icon5} />
                  <img className="icons" src={props.icon6} />
                  <img className="icons" src={props.icon7} />
                  <img className="icons" src={props.icon8} />
                  <img className="icons" src={props.icon9} />
                  <img className="icons" src={props.icon10} />
                  <img className="icons" src={props.icon11} />
                  <img className="icons" src={props.icon12} />
                  <img className="icons" src={props.icon13} />
                  <img className="icons" src={props.icon14} />
                  <img className="icons" src={props.icon15} />
                  <img className="icons" src={props.icon16} />
               </div>
            </div>
         </li>
      </>
   );
}

export default CardItem;
