import React from "react";
import emailjs from "emailjs-com";
import { Form, Button, Col } from "react-bootstrap";
export default function ContactMe(props) {
  const { otherBgDark, textColour } = props.theme;
  const themeContactMe = otherBgDark + " " + textColour + " " + "pt-5 center";
  // const textFieldTheme = props.theme.textFieldColour + " text-black";
  // console.log("999 dsfsldkfjksf ----- ", textFieldColour);
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_8b0yp87",
        e.target,
        "user_M9wuMZTrmgir5zHFFWNA0"
      )
      .then(
        (result) => {
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className={themeContactMe}>
      <div id="contactme" className="mx-5 vw-60">
        <div className="fs-3vw mb-3" data-aos="fade-up">
          You can reach out to me here...
        </div>
        <Form onSubmit={sendEmail}>
          <Form.Row>
            <Form.Group
              as={Col}
              controlId="formGridName"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <Form.Label className="fs-1-5vw">Name</Form.Label>
              <Form.Control
                placeholder="Please Enter Your Name"
                // className={props.theme.textFieldColour}
                // style={{ color: "black" }}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              controlId="formGridEmail"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <Form.Label className="fs-1-5vw">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="What's Your Email?"
                // className={props.theme.textFieldColour}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group
            controlId="formGridSubject"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <Form.Label className="fs-1-5vw">Subject</Form.Label>
            <Form.Control
              placeholder="Please Enter Subject For Your Message"
              // className={props.theme.textFieldColour}
            />
          </Form.Group>
          <Form.Group
            controlId="formGridMessage"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <Form.Label className="fs-1-5vw">Message</Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              placeholder="What Would You Like To Tell Me About?"
              // className={textFieldTheme}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="my-4 bg-secondary"
            // data-aos="fade-down"
          >
            <span className="fs-1vw">Deliver Message to Phyo!</span>
          </Button>
        </Form>
      </div>
    </div>
  );
}
