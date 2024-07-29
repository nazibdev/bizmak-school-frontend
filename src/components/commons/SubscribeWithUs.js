import { useState } from "react";
import { Col, Container, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "../css/styles.css";
import config from "../../config";

const SubscribeWithUs = () => {
  // const config.apiurl =
  //   "http://ec2-18-191-222-58.us-east-2.compute.amazonaws.com:8080/api/public";
  const [subscribe, setSubscribe] = useState({
    subscriptionsEmail: "",
  });

  const [msg, setMsg] = useState("");
  const [msgC, setMsgC] = useState("");
  const handleChangeForLogin = (e) => {
    setSubscribe({ ...subscribe, [e.target.name]: e.target.value });
  };

  const handleReset = (e) => {
    setSubscribe({
      subscriptionsEmail: "",
    });
  };

  const handleSubscription = async (e) => {
    e.preventDefault();
    try {
      console.log(subscribe);
      const res = await axios.post(config.apiUrl + "subscription", subscribe);
      console.log(res.data.message);
      // setMsg("You are subscribed to our newsletter");
      setMsg(res.data.message);
      if (res.data.success) {
        setMsgC("success-message");
      } else {
        setMsgC("error-message");
      }
    } catch (error) {
      // setMsg("You are not subscribed to our newsletter");
      // console.error(error.data);
    }
  };

  return (
    <>
      <h3 className="text-center">Subscribe for more </h3>
      <p className={msgC}>{msg}</p>
      <Form onSubmit={handleSubscription}>
        <Form.Group className="mb-3">
          {/* <Form.Control
            type="email"
            name="subscriptionsEmail"
            placeholder="enter your email address"
            value={subscribe.subscriptionsEmail}
            onChange={handleChangeForLogin}
            className="auto"
          /> */}
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="enter your email address"
              aria-label="enter your email address"
              aria-describedby="basic-addon2"
              type="email"
              name="subscriptionsEmail"
              value={subscribe.subscriptionsEmail}
              onChange={handleChangeForLogin}
            />
            <Button
              variant="outline-success"
              id="button-addon2"
              onClick={handleSubscription}
            >
              Subbscribe
            </Button>
            <Button variant="outline-danger" onClick={handleReset}>
              Reset
            </Button>
          </InputGroup>
        </Form.Group>
        {/* <Stack direction="horizontal" gap={2} className="col-md-6 mx-auto">
          <button
            type="submit"
            className="btn btn-outline-success btn-lg px-4 me-sm-3 w-5"
            variant="outline-secondary"
          >
            Subscribe
          </button>
          <button
            type="reset"
            className="btn btn-outline-danger btn-lg px-4 me-sm-3 w-5"
            variant="outline-danger"
            onClick={handleReset}
          >
            Reset
          </button>
        </Stack> */}
        <br />
        <br />
      </Form>
    </>
  );
};

export default SubscribeWithUs;
