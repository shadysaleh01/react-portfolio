import React from 'react'
import Card from 'react-bootstrap/Card'
import "./About.css"

function About() {
   return (
      <>
         <Card>
            <Card.Img variant="left" src="images/portfolio.jpg" />
            <Card.Body>
               <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
      </Card.Text>
            </Card.Body>
         </Card>
         <br />
         <Card>
            <Card.Body>
               <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
      </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src="holder.js/100px180" />
         </Card>
      </>
   )
}

export default About