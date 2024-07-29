import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import config from "../../config";

const FooterApp = () => {



  
  return (
    <div>
      {/* <Container bg="red" expand="lg"> */}
      <footer
        className="pt-4 my-md-5 pt-md-5 border-top"
        bg="black"
        expand="lg"
      >
        <Row>
          <Col>
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none"
                  href="/#home"
                >
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none"
                  href="/course"
                >
                  Courses
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none"
                  href="/service"
                >
                  Services
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none"
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
              {/* <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="/blog">
                  Blog
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none"
                  href="/#portal"
                >
                  Portal
                </a>
              </li> */}
            </ul>
          </Col>
          <Col>
            <h5>Courses</h5>
            <ul className="list-unstyled text-small">
              {/* <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none"
                  href="/course#BasicCoding"
                >
                  Basic Coding
                </a>
              </li> */}
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none"
                  href="/course#ManUiTest"
                >
                  Manual Testing
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none"
                  href="/course#AutoTest"
                >
                  Automation Testing
                </a>
              </li>
              {/* <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  CI/CD with Automated Testing
                </a>
              </li> */}
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Business Analysis
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  DevOps
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <h5>About</h5>
            <ul className="list-unstyled text-small text-right">
              {/* <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none"
                  href="/career"
                >
                  Career
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none"
                  href="/#portal"
                >
                  Portal
                </a>
              </li> */}
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none"
                  href="/privacy"
                >
                  Privacy
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none"
                  href="/terms&cond"
                >
                  Terms & Condition
                </a>
              </li>
              {/* <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none"
                  href="/privacy"
                >
                  Refund Policy
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>

        <div className="col-12 col-md">
          {/* <img className="mb-2" src="../assets/brand/bootstrap-logo.svg" alt="" width="24" height="19"> */}
          <small className="d-block mb-3 text-muted text-center">
            Copyright 2023 &copy; BCAMP It Solutions | All rights reserved
          </small>
        </div>
      </footer>
      {/* </Container> */}
    </div>
  );
};

export default FooterApp;
