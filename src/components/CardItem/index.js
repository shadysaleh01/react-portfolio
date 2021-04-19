import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from '../Button';
// import home from '../../pages/Home'
import "./CardItem.css"
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
                     <a href={props.github} target='blank'
                        class='social-icon-link github'
                        aria-label='Github'
                     >
                        <i className='fab fa-github' id="icon" />
                     </a>
                  </div>
                  <h5 className='cards__item__text'>{props.text}</h5>
                  <h6>Technologies:</h6>
                  <img className="icons" alt={props.alt1} src={props.icon1} />
                  <img className="icons" alt={props.alt2} src={props.icon2} />
                  <img className="icons" alt={props.alt3} src={props.icon3} />
                  <img className="icons" alt={props.alt4} src={props.icon4} />
                  <img className="icons" alt={props.alt5} src={props.icon5} />
                  <img className="icons" alt={props.alt6} src={props.icon6} />
                  <img className="icons" alt={props.alt7} src={props.icon7} />
                  <img className="icons" alt={props.alt8} src={props.icon8} />
                  <img className="icons" alt={props.alt9} src={props.icon9} />
                  <img className="icons" alt={props.alt10} src={props.icon10} />
                  <img className="icons" alt={props.alt11} src={props.icon11} />
                  <img className="icons" alt={props.alt12} src={props.icon12} />
                  <img className="icons" alt={props.alt13} src={props.icon13} />
                  <img className="icons" alt={props.alt14} src={props.icon14} />
                  <img className="icons" alt={props.alt15} src={props.icon15} />
                  <img className="icons" alt={props.alt16} src={props.icon16} />
               </div>
            </div>
         </li>
      </>
   );
}

export default CardItem;
