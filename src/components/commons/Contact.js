import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import "../css/styles.css";
import config from "../../config";

const Contact = () => {
  // const config.apiurl =
  //   "http://ec2-18-191-222-58.us-east-2.compute.amazonaws.com:8080/api/public";
  const navigate = useHistory();
  const h1 = require("../images/heros/h1.jpeg");
  const [successMsg, setSuccessMsg] = useState("");

  const [registration, setRegistration] = useState({
    fullname: "",
    emailAddress: "",
    message: "",
    phoneNumber: "",
  });

  const handleChangeForRegistration = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      console.log(registration);
      await axios
        .post(config.apiUrl + "contactus", registration)
        .then((res) => {
          if (res.data.success === true) {
            setSuccessMsg(res.data.message);
          } else {
            setSuccessMsg(res.data.message);
          }
        });

      setRegistration({
        fullname: "",
        emailAddress: "",
        message: "",
        phoneNumber: "",
      });
      // navigate.push("/contact");
    } catch (error) {
      console.error(error.data);
    }
  };

  return (
    <Container>
      <h2 className="text-center">Contact Us</h2>
      <div className="contact-us-container">
        <div className="contact-image">
          {/* Your contact image goes here */}
          <img src={h1} alt="Contact Us" />
        </div>
        <br />
        <div className="contact-form">
          <p variant="danger">{successMsg}</p>
          {/* <p variant="success">{errorMessage}</p> */}
          <form onSubmit={handleRegistration}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Your Full Name"
                onChange={handleChangeForRegistration}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="emailAddress"
                placeholder="Your Email Address"
                onChange={handleChangeForRegistration}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Your Phone Number"
                onChange={handleChangeForRegistration}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                onChange={handleChangeForRegistration}
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* <Row className="gap-4">
        <Col style={{ width: "24rem" }}>
          <h2 className="text-center">Contact Us</h2>
          <p variant="success">{successMsg}</p>
          <Form onSubmit={handleRegistration}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="fullname">Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullname"
                placeholder="Enter your Full Name"
                value={registration.fullname}
                onChange={handleChangeForRegistration}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email address</Form.Label>
              <Form.Control
                type="email"
                name="emailAddress"
                placeholder="Email address"
                value={registration.emailAddress}
                onChange={handleChangeForRegistration}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="phoneNumber">Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone Number in Numbers Only"
                name="phoneNumber"
                maxLength={11}
                value={registration.phoneNumber}
                onChange={handleChangeForRegistration}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="message">Messages</Form.Label>
              <Form.Control
                type="text"
                placeholder="Messages"
                name="message"
                value={registration.message}
                onChange={handleChangeForRegistration}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row> */}
    </Container>
  );
};

export default Contact;
