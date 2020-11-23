import React from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Contact() {
   return (
      <div>
         <Container fluid="sm">
            <Row lg={12}>
               <Col lg={6}>
                  <div className="col-md-6 col-sm-12 text-light" id="contactTextArea">
                     <h6>Have any questions, or offers on cooperation?</h6>
                     <h6>Feel free to contact me!</h6>
                     <br />
                     <br />
                     <h6>Saleh, Shady</h6>
                     <br />
                     <h6>shadysaleh01@gmail.com</h6>
                     <br />
                     <h6>+1(714)203-4290</h6>
                  </div>
               </Col>
               <Col lg={6} sm={5}>
                  <Form>

                     <Form.Group controlId="formBasicName" lg={6}>
                        <Form.Control placeholder="Name" />
                     </Form.Group>

                     <Form.Group controlId="formBasicEmail">
                        <Form.Control placeholder="Email" type="email" />
                        <Form.Text className="text-muted">
                           We'll never share your email with anyone else.
                     </Form.Text>
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