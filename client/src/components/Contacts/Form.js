import React from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Form.css'

function Contact() {
   return (
      <div className="contact" id="contacts">
         <video src="/videos/video-2.mp4" autoPlay loop muted />
         <Container fluid="md">

            <Row lg={12} className="Row">
               <Col lg={6} className="Col">
                  <div className=" col-sm-12 text-light" id="contactTextArea">
                     <h5>Have any questions, or offers on cooperation?</h5>
                     <h5>Feel free to contact me!</h5>
                     <br />
                     <br />
                     <h5>Saleh, Shady</h5>
                     <br />
                     <h5>shadysaleh01@gmail.com</h5>
                     <br />
                     <h5>+1(714)203-4290</h5>
                  </div>
               </Col>
               <Col lg={6} >
                  <Form>

                     <Form.Group controlId="formBasicName">
                        <Form.Control placeholder="Name" />
                     </Form.Group>

                     <Form.Group controlId="formBasicEmail">
                        <Form.Control placeholder="Email" type="email" />
                        <Form.Text className="text-danger">
                           I'll never share your email with anyone else.
                         </Form.Text>
                     </Form.Group>

                     <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" placeholder="Message" rows={3} />
                     </Form.Group>

                     <Button variant="warning" type="submit">
                        Submit
                     </Button>

                  </Form>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default Contact;