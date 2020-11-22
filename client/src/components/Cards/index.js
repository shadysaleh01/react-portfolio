import React from 'react'
import CardItem from '../CardItem'
import "./style.css"

function Cards() {
   return (
      <div className="cards">
         <h1> Check out this</h1>
         <div className="cards__container">
            <div className="cards__wrapper">
               <ul className="cards__items">
                  <CardItem
                     src="images/img-1.jpg"
                     text="The first project information"
                     label="Adventure"
                     path="/projects"
                  />
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Cards
