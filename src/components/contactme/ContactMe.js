import React from "react";
import emailjs from "emailjs-com";
import { Form, Button, Col } from "react-bootstrap";
export default function ContactMe() {
  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "gmail",
        "template_8b0yp87",
        e.target,
        "user_M9wuMZTrmgir5zHFFWNA0"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="bg-dark">
      <div id="contactme" className="m-5">
        <div className="fs-5vw mt-2 mb-3 ">You can reach out to me here...</div>
        <Form onSubmit={sendEmail}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label className="fs-1-5vw">Name</Form.Label>
              <Form.Control placeholder="Please Enter Your Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="fs-1-5vw">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="What's Your Email?"
                className="bg-warning"
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridSubject">
            <Form.Label className="fs-1-5vw">Subject</Form.Label>
            <Form.Control placeholder="Please Enter Subject For Your Message" />
          </Form.Group>
          <Form.Group controlId="formGridMessage">
            <Form.Label className="fs-1-5vw">Message</Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              placeholder="What Would You Like To Tell Me About?"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="my-4">
            <span className="fs-1-5vw">Deliver Message to Phyo</span>
          </Button>
        </Form>
      </div>
    </div>
  );
}
