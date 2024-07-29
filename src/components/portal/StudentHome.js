import { Container, Form, Button } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import config from "../../config";

const StudentHome = () => {
  // const config.apiurl =
  // "http://ec2-18-191-222-58.us-east-2.compute.amazonaws.com:8080/api/auth";
  const [loginError, setLoginError] = useState();
  const [visible, setVisible] = useState(false);
  const [pError, setpError] = useState();

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const [confPassword, setConfPassword] = useState();
  const [registration, setRegistration] = useState({
    fname: "",
    lname: "",
    email: "",
    course: "1",
    role: ["ROLE_STUDENT"],
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

  const handleConfirmPassword = (e) => {
    setConfPassword(e.target.name);
  };
  const validatePassword = (e) => {
    if (confPassword == "") {
      setpError("");
      setVisible(false);
    }

    if (registration.password !== confPassword) {
      setpError("your confirm password is not same!!!");
      setVisible(true);
    } else {
      setpError("");
      setVisible(false);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleChange = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    await axios
      .post(config.apiUrl + "/signin", login)
      .then((response) => {
        // console.log(response.data);
        Cookies.set("bizmakSchool", JSON.stringify(response.data.tokenValue), {
          expires: 1,
        });
        navigate.push("/student/home");
      })
      .catch((error) => {
        setLoginError(error.response.data.message.slice(7, 19) + " User");
        setVisible(true);
      });
  };

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setLoginError("");
        setpError("");
      }, 3000);
    }
  }, [visible]);

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      console.log(registration);
      const res = await axios.post(config.apiUrl + "/signup", registration);
      console.log(res.data);
      localStorage.setItem(
        "key-student-user",
        JSON.stringify(res.data.tokenValue)
      );
      // sessionStorage.setItem("user-info", JSON.stringify(res.data));
      navigate.push("/student/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h1 className="text-center">Student ...</h1>
      {loginError && <p>{loginError}</p>}
      {/* style= {isOpen ? 'non-hide' : 'hidden'} */}
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
            autoFocus
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
        <Button type="submit">Login To Student Portal </Button>
        <span>Don't have a account. </span>
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
        {/* <Form.Group className="mb-3">
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
            <option value="4">Automation UI Testing</option>
            <option value="5">Automation API Testing</option>
            <option value="6">Behaviour Driven Testing</option>
          </Form.Select>
        </Form.Group> */}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="course">Course Name</Form.Label>
          <Form.Control
            type="text"
            name="course"
            // placeholder="enter your desired username"
            value="SDET (Software Development Engineering in Test)"
            onChange={handleChangeForRegistration}
          />
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
        {pError && <p>{pError}</p>}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="conf-password">Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="conf-password"
            id="conf-pwd"
            placeholder="re-enter your password"
            value={confPassword}
            onChange={validatePassword}
          />
        </Form.Group>
        <button
          type="submit"
          className="btn btn-outline-primary btn-lg px-4 me-sm-3"
        >
          Create Student Account
        </button>
        already have an account. click on{" "}
        <a href="#portfolioModal2" onClick={toggleChange}>
          login
        </a>
      </Form>
    </Container>
  );
};

export default StudentHome;
