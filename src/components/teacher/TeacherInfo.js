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
import config from "../../config";

const TeacherInfo = () => {
  // const [userData, setUserData] = useState({
  //   name: 'John Doe',
  //   image: 'https://via.placeholder.com/150x150',
  //   teacherName: 'teacher01',
  //       nameCourse: 'Web Development Bootcamp',
  //       students:
  //         [
  //           {
  //             id:1,
  //             name:'student01'
  //           },
  //           {
  //             id:2,
  //             name:'student02'
  //           }
  //         ],
  //       progress: 0,
  //       paidBalance: '$0.00',
  //       remainingBalance: '$300.00',
  //       progress: 0
  //   });
  // const mainUrl = "http://localhost:8080/api/auth";
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
    const res = axios.post(config.apiUrl + "/signout", "");

    console.log(res.data);

    localStorage.clear(); //if you want to clear localstorage data
    // history.replace("/");
    navigate.push("/");
  };

  const stayOnPage = () => {
    const token = localStorage.getItem("key-teacher-user");
    if (token != null) {
      setShowPage(true);
    }
  };

  useEffect(() => {
    stayOnPage();
  }, [showPage]);

  return (
    <Container>
      Teacher home
      {showPage && (
        <Row>
          <Col xs={12} md={4}>
            <Image src={userData.image} rounded />
            <button onClick={goToHome}>Logout</button>
          </Col>
          <Col xs={12} md={8}>
            <h2>{userData.name}</h2>
            <p>Courses:</p>
            {userData.courses.map((course, index) => (
              <div key={index}>
                <h4>{course.name}</h4>
                <p>Paid Balance: {course.paidBalance}</p>
                <p>Remaining Balance: {course.remainingBalance}</p>
                <p>Teacher Name: {course.teacherName}</p>
                <ZoomClass />
                <br />
                <ProgressBar
                  now={course.progress}
                  label={`${course.progress}%`}
                />
                {course.name === "Interview Preparation" && (
                  <Button variant="danger">Deactivate</Button>
                )}
                <br />
                <Button>Quiz</Button>
              </div>
            ))}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default TeacherInfo;
