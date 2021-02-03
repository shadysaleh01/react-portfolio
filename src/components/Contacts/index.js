import React from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Form.css'

export default class Contact extends React.Component {
   constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
         status: ""
      };
   }
   render() {
      const { status } = this.state;

      return (
         <div className="contact" id="contacts">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <Container fluid="md">

               <Row lg={12} className="Row">
               <h2 className="text-warning" id="contact">Contact</h2>

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
                     <Form onSubmit={this.submitForm}
                        action="https://formspree.io/f/mleoplgd"
                        method="POST">

                        <Form.Group controlId="formBasicName">
                           <Form.Control placeholder="Name" name="name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                           <Form.Control placeholder="Email" type="email" name="email" />
                           <Form.Text className="text-danger">
                              I'll never share your email with anyone else.
                         </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                           <Form.Control as="textarea" placeholder="Message" rows={3} name="message" />
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
   submitForm(ev) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      console.log(data)
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
         if (xhr.readyState !== XMLHttpRequest.DONE) return;
         if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
         } else {
            this.setState({ status: "ERROR" });
         }
      };
      xhr.send(data);
   }
}
