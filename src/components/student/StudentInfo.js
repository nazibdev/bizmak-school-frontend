import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  ProgressBar,
} from "react-bootstrap";
import ZoomClass from "../portal/ZoomClass";
import { useHistory } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import httpService from "../../services/httpService";
import config from "../../config";

const StudentInfo = () => {
  // const mainUrl =
  //   "http://ec2-18-191-222-58.us-east-2.compute.amazonaws.com:8080:8080/api/auth/student/";

  // const [userData, setUserData] = useState({
  //   name: "John Doe",
  //   image: "https://via.placeholder.com/150x150",
  //   courses: [
  //     {
  //       name: "Web Development Bootcamp",
  //       paidBalance: 500,
  //       remainingBalance: 200,
  //       teacherName: "teacher01",
  //       progress: 0,
  //     },
  //     {
  //       name: "",
  //       paidBalance: "$0.00",
  //       remainingBalance: "$300.00",
  //       progress: 0,
  //     },
  //   ],
  // });

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   return fetch(API_BASE_URL + "/user", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username: this.state.username,
  //       password: this.state.password,
  //     }),
  //   })
  //     .then((response) => {
  //       response.json();
  //       localStorage.setItem(TOKEN_KEY, response.accessToken);
  //       console.log("RESPONSE", response.data);
  //     })
  //     .catch((error) => {
  //       console.log("ERROR: ", error);
  //     });
  // };
  const [user, setUser] = useState();
  const [uid, setUid] = useState("");

  const [showPage, setShowPage] = useState(false);

  const [userData, setUserData] = useState({
    name: "",
    image: "",
    courses: [
      {
        name: "",
        paidBalance: 0,
        remainingBalance: 0,
        teacherName: "",
        progress: 1,
      },
    ],
  });

  const navigate = useHistory();
  const goToHome = (e) => {
    const res = axios.post(config.apiUrl + "signout", "");
    Cookies.remove("bizmakSchool");
    navigate.push("/");
  };

  const stayOnPage = async () => {
    // const token = localStorage.getItem("key-student-user");
    const token = Cookies.get("bizmakSchool");
    const decoded = jwt_decode(token);
    setUser(token);
    setUid(decoded.sub);
    if (token != null) {
      setShowPage(true);
    }

    // document.cookie = `bizmakSchool=${token}; expires=${new Date(
    //   Date.now() + 1 * 24 * 60 * 60 * 1000
    // ).toUTCString()}`;
    // await httpService
    //   .get(mainUrl + "getuserinfo")
    //   .then((response) => {
    //     console.log(response);
    //     const apiUserData = response.data;
    //     setUserData(apiUserData.list.courseName);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    try {
      document.cookie = `bizmakSchool=${token}; expires=${new Date(
        Date.now() + 1 * 24 * 60 * 60 * 1000
      ).toUTCString()}`;

      // document.cookie = Cookies.get("bizmakSchool");
      const res = await httpService.get(config.apiUrl + "getuserinfo");
      const apiUserData = res.data;
      console.log(apiUserData);
      setUserData({
        name: apiUserData.list.courseName,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitLogin = async () => {};

  useEffect(() => {
    stayOnPage();
  }, [showPage]);

  return (
    <Container>
      {showPage && (
        <Row>
          <Col xs={12} md={4}>
            <Image src={userData.image} rounded />
            {/* <a href="/"> */}
            <button onClick={goToHome}>Logout</button>
            {/* </a> */}
          </Col>
          <Col xs={12} md={8}>
            {/* <h2>{userData.name}</h2> */}
            {/* <p>Course:{userData.name}</p> */}
            {/* {userData.courses.map((course, index) => ( */}
            <div>
              <h4>Course Name: {userData.name}</h4>
              {/* <p>Paid Balance: {course.paidBalance}</p>
              <p>Remaining Balance: {course.remainingBalance}</p>
              <p>Teacher Name: {course.teacherName}</p> */}
              <ZoomClass />
              <br />
              {/* <ProgressBar
                now={course.progress}
                label={`${course.progress}%`}
              /> */}
              {/* {course.name === "Interview Preparation" && (
                <Button variant="danger">Deactivate</Button>
              )} */}
              <br />
              {/* <Button>Quiz</Button> */}
            </div>
            {/* ))} */}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default StudentInfo;
