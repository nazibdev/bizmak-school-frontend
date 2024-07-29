import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import config from "../../config";

const TeacherHome = () => {
  // const mainUrl =
  //   "http://ec2-18-191-222-58.us-east-2.compute.amazonaws.com:8080/api/auth";

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const [registration, setRegistration] = useState({
    fname: "",
    lname: "",
    email: "",
    course: "0",
    role: ["TEACHER"],
    username: "",
    password: "",
  });

  const navigate = useHistory();

  const handleChangeForLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleChangeForRegistration = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };
  const validatePassword = (e) => {};

  const [isOpen, setIsOpen] = useState(false);
  const toggleChange = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(login);
      const res = await axios.post(config.apiUrl + "/signin", login);
      console.log(res.data);
      localStorage.setItem(
        "key-teacher-user",
        JSON.stringify(res.data.tokenValue)
      );
      navigate.push("/teacher/home");
    } catch (error) {
      console.error(error);
      navigate.push("/teacher/home");
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      console.log(registration);
      const res = await axios.post(config.apiUrl + "/signup", registration);
      console.log(res.data);
      localStorage.setItem(
        "key-teacher-user",
        JSON.stringify(res.data.tokenValue)
      );
      navigate.push("/teacher/home");
    } catch (error) {
      console.error(error);
      navigate.push("/teacher/#portfolioModal1");
    }
  };

  return (
    <Container>
      <h1 className="text-center">Teacher</h1>
      <p>Teacher home ...</p>

      <Form onSubmit={handleSubmitLogin} id="portfolioModal2" hidden={isOpen}>
        <h2>Signin</h2>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="enter your username"
            value={login.username}
            onChange={handleChangeForLogin}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="enter your passoword"
            value={login.password}
            onChange={handleChangeForLogin}
          />
        </Form.Group>
        <Button type="submit">Login To Teacher Portal</Button>
        Don't have a account.
        <a href="#portfolioModal1" onClick={toggleChange}>
          Create One
        </a>
      </Form>

      <Form id="portfolioModal1" hidden={!isOpen} onSubmit={handleRegistration}>
        <h2>Registration</h2>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="fname">First name</Form.Label>
          <Form.Control
            type="text"
            name="fname"
            placeholder="Enter your First Name"
            value={registration.fname}
            onChange={handleChangeForRegistration}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="lname">Last name</Form.Label>
          <Form.Control
            type="text"
            name="lname"
            placeholder="Enter your Last Name"
            value={registration.lname}
            onChange={handleChangeForRegistration}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={registration.email}
            onChange={handleChangeForRegistration}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="course">Course Selection</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name="course"
            value={registration.course}
            onChange={handleChangeForRegistration}
          >
            <option>Select One Course</option>
            <option value="1">Java Basics</option>
            <option value="2">Manual UI Testing</option>
            <option value="3">Manual API Testing</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="enter your desired username"
            value={registration.username}
            onChange={handleChangeForRegistration}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="enter your password"
            value={registration.password}
            onChange={handleChangeForRegistration}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="conf-password">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="conf-password"
            id="conf-pwd"
            placeholder="re-enter your password"
            value={registration.password}
            onChange={validatePassword}
          />
        </Form.Group>
        <Button type="submit">Create Teacher Account</Button>
        already have an account. click on{" "}
        <a href="#portfolioModal2" onClick={toggleChange}>
          login
        </a>
      </Form>
    </Container>
  );
};

export default TeacherHome;
