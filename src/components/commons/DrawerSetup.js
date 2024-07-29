import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from "react-bootstrap/Badge";
import { Button, Row, Col, Accordion } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import config from "../../config";

function DrawerSetup(props) {
  const [show, setShow] = useState(false);
  const [key, setKey] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const config.apiurl =
  //   "http://ec2-18-191-222-58.us-east-2.compute.amazonaws.com:8080/api/public/";

  const [Login, setLogin] = useState("");
  const [msgC, setMsgC] = useState("");
  const [msg, setMsg] = useState("");
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleChangeForLogin = (e) => {
    setLogin(e.target.value);
    if (e.target.value != "") {
      setMsgC("");
      setMsg("");
    }

    if (!e.target.value.match(validRegex)) {
      setMsgC("error-message");
      setMsg("invalid email");
    }
  };

  const ShowButton = () => {
    // if (localStorage.getItem("key-student-user") != null) {
    //   setKey(true);
    // }

    if (Cookies.get("bizmakSchool") !== null) {
      setKey(true);
      console.log("set cookie to true");
    }
  };

  async function paynow() {
    if (Login == "") {
      setMsgC("error-message");
      setMsg("Please enter a valid email");
      return;
    }

    const urls =
      config.apiurl +
      "create-checkout-session/" +
      props.coursePrice +
      "/" +
      props.courseName +
      "/" +
      Login;
    const resp = await axios.post(urls);
    if (resp.status === 200) {
      // const res = await axios.post(config.apiurl + "testcheckout");
      // setRedirectiveUrl(res.data.message);
      // console.log(resp.data.message);
      // window.location.replace({ redirectiveUrl });
      // setKey(resp.data.message);
      console.log(resp.data.message);
      window.location.replace(resp.data.message);
      // window.location.replace("/course/checkout");
    }
  }

  async function handleToken() {
    // console.log(token);
    // const res = await axios
    //   .post(config.apiurl + "create-checkout-session/" + 2000)
    //   .then((res) => {
    //     setRedirectiveUrl(res.data.message);
    //     console.log(res.data);
    //     alert("Payment Intent Success");
    //     window.location.replace(redirectiveUrl);
    //   })
    //   .catch((error) => {
    //     alert("Payment intent is not Success" + error);
    //   });

    // const urls = config.apiurl + "create-checkout-session/" + props.coursePrice;
    // const resp = await axios.post(urls);
    // if (resp.status === 200) {
    // const res = await axios.post(config.apiurl + "testcheckout");
    // setRedirectiveUrl(res.data.message);
    // console.log(resp.data.message);
    // window.location.replace({ redirectiveUrl });
    setKey(true);
    // window.location.replace(resp.data.message);
    // window.location.replace("/course/checkout");
    // }

    // takeMeToCheckout();
  }

  return (
    <>
      <div>
        <Button variant="primary" onClick={handleShow}>
          Add to Cart
        </Button>

        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
            <Badge bg="primary">1</Badge>
          </Offcanvas.Header>
          <div className="">
            <Offcanvas.Body>
              <Row>
                <Col xs={6}>
                  <h5>Course Name:</h5>
                </Col>
                <Col xs={6}>
                  <p>{props.courseName}</p>
                </Col>
                <Col>
                  <div className="mb-2">
                    <label htmlFor="email">
                      Email <span className="text-muted">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="you@example.com"
                      onChange={handleChangeForLogin}
                      required
                    />
                    <div className={msgC}>{msg}</div>
                  </div>
                </Col>
              </Row>

              {key && (
                <div className="row">
                  <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Billing address</h4>
                    <form className="needs-validation" noValidate>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="firstName">
                            First name
                            <span className="text-muted">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder=""
                            value=""
                            required
                          />
                          <div className="invalid-feedback">
                            Valid first name is required.
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="lastName">
                            Last name<span className="text-muted">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder=""
                            value=""
                            required
                          />
                          <div className="invalid-feedback">
                            Valid last name is required.
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="username">
                          Username<span className="text-muted">*</span>
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">@</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Username"
                            required
                          />
                          <div
                            className="invalid-feedback"
                            style={{ width: "100%" }}
                          >
                            Your username is required.
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email">
                          Email <span className="text-muted">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="you@example.com"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping
                          updates.
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="address">
                          Address<span className="text-muted">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="1234 Main St"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="address2">
                          Address 2{" "}
                          <span className="text-muted">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address2"
                          placeholder="Apartment or suite"
                        />
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="country">
                            Country<span className="text-muted">*</span>
                          </label>
                          <select
                            className="custom-select d-block w-100"
                            id="country"
                            required
                          >
                            <option value="">Choose...</option>
                            <option>United States</option>
                          </select>
                          <div className="invalid-feedback">
                            Please select a valid country.
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="state">
                            State<span className="text-muted">*</span>
                          </label>
                          <select
                            className="custom-select d-block w-100"
                            id="state"
                            required
                          >
                            <option value="">Choose...</option>
                            <option>California</option>
                          </select>
                          <div className="invalid-feedback">
                            Please provide a valid state.
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="zip">
                            Zip Code<span className="text-muted">*</span>
                          </label>
                          <Col xs={24}>
                            <input
                              type="text"
                              className="form-control"
                              id="zip"
                              placeholder="zip code"
                              maxLength={5}
                              required
                            />
                          </Col>
                          <div className="invalid-feedback">
                            Zip code required.
                          </div>
                        </div>
                      </div>

                      <button
                        className="btn btn-success btn-lg btn-block"
                        onClick={paynow}
                      >
                        pay now
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {!key && (
                <div>
                  <Row hidden>
                    <Col xs={6}>Subtotal</Col>
                    <Col xs={6}>
                      <strong>${props.coursePrice}</strong>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col xs={6}>
                      <h3>Total:</h3>
                    </Col>
                    <Col xs={6}>
                      <h3>${props.coursePrice}</h3>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Link to="/course/checkout"></Link>
                    <button
                      className="btn btn-success btn-lg btn-block"
                      type="submit"
                      // onClick={handleCheckout}
                      onClick={paynow}
                    >
                      Continue to Checkout
                    </button>
                  </Row>

                  <div class="small text-muted mt-2">
                    Pay securely with Stripe. By clicking the button above, you
                    agree to our{" "}
                    <a target="_blank" href="/terms&cond">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a target="_blank" href="/privacy">
                      Privacy
                    </a>{" "}
                    {/* and
                  <a target="_blank" href="#">
                    Refund
                  </a>{" "} */}
                    policies.
                  </div>
                </div>
              )}
            </Offcanvas.Body>
          </div>
        </Offcanvas>
      </div>
      {/* )} */}
    </>
  );
}

export default DrawerSetup;
