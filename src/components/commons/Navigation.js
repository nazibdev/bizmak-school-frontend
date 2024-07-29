import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" id="home">
      <Container>
        <Navbar.Brand href="/">BCAMP Solutions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center "
        >
          <Nav className="justify-content-center ">
            <Nav.Link href="/">
              <b>Home</b>
            </Nav.Link>
            <Nav.Link href="/course">
              <b>Courses</b>
            </Nav.Link>
            <Nav.Link href="/service">
              <b>Services</b>
            </Nav.Link>
            <Nav.Link href="/contact">
              <b>Contact Us</b>
            </Nav.Link>
            {/* <Nav.Link href="/blog">For Business</Nav.Link> */}

            {/* <NavDropdown title="Portal" id="portal">
              <NavDropdown.Item href="/student">
                <b>Student</b>
              </NavDropdown.Item>
              <NavDropdown.Item href="/teacher" hidden>
                <b>Teacher</b>
              </NavDropdown.Item>
              <NavDropdown.Item href="/onlyNazibKnows/admin" hidden>
                Admin
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Button hidden>Cart</Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
