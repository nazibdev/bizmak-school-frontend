import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import NewsAndSuccessStories from "./NewsAndSuccessStories";
import TopRatedCourses from "./TopRatedCourses";
import Services from "../commons/Services";
import ControllCarousel from "./ControllCarousel";
import ChooseUs from "../commons/ChooseUs";
import SubscribeWithUs from "../commons/SubscribeWithUs";
import Carousel from "react-bootstrap/Carousel";
import LogoSwipe from "../Blogger/LogoSwipe";
import config from "../../config";
import axios from "axios";
import { useState } from "react";
// import { useEffect } from "react";

const HomePage = () => {
  const [meeting, setMeeting] = useState();

  const navigate = useHistory();
  const viewCourses = (e) => {
    navigate.push("/course");
  };

  const redirectToExternalPage = () => {
    console.log(meeting);
    window.open(meeting, "_blank");
  };

  const checkout = async (e) => {
    e.preventDefault();

    
  };

  const courses = [
    {
      title: "Manual UI Testing",
      description:
        "Manual UI testing is a critical part of ensuring the quality and usability of software applications. It involves reviewing the application's user interface, features, and functionality to identify any issues or defects that could impact the user experience.",
      //     <br/>
      //     During manual UI testing, testers follow a predefined set of test cases or scenarios that simulate typical user interactions with the application. These test cases cover a wide range of use cases, including user registration, navigation, data input and output, and error handling.
      //   <br/>
      //   Testers pay close attention to the layout and design of the application's user interface, looking for inconsistencies, poor usability, or other issues that could impact the user experience. They also test the application's functionality, verifying that it performs as expected and that all features and functions work correctly.
      //   <br/>
      //   One of the key benefits of manual UI testing is that it allows testers to identify issues that may not be caught by automated testing. Testers can use their experience and intuition to identify potential user experience issues and provide valuable feedback to developers to improve the application.
      //   <br/>
      //   At our company, we take manual UI testing seriously and have a team of experienced testers who specialize in this area. We use a variety of tools and techniques to ensure thorough and efficient testing, and our goal is to deliver high-quality applications that meet or exceed our clients' expectations.",
      rating: 4.8,
    },
    {
      title: "Manual API Testing",
      description:
        "Get started with Node.js and build server-side applications with JavaScript.",
      rating: 4.7,
    },
    {
      title: "Automated UI Testing",
      description:
        "Understand the core concepts of JavaScript and develop your programming skills.",
      rating: 4.8,
    },
    {
      title: "Automated API Testing",
      description:
        "Get started with Node.js and build server-side applications with JavaScript.",
      rating: 4.7,
    },
    {
      title: "Java Basics",
      description:
        "Learn the basics of React and start building dynamic web applications.",
      rating: 4.5,
    },
  ];

  return (
    <Container>
      {/* <div className="b-example-divider"></div> */}
      <ControllCarousel />
      <div className="px-2 pt-3 my-3 text-center border-bottom">
        {/* <h1 className="display-4 fw-bold">Build Career</h1> */}

        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            <b>
              <i>
                Build and Grow your career in 4 months and Start Making 90K+*
              </i>
            </b>
          </p>

          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button
              type="button"
              className="btn btn-outline-primary btn-lg px-4 me-sm-3"
              onClick={checkout}
            >
              BOOK FREE CLASS
            </button>
            <button
              type="button"
              className="btn btn-outline-success btn-lg px-4 me-sm-3"
              onClick={viewCourses}
            >
              EXPLORE COURSES
            </button>
            {/* <button
              type="button"
              className="btn btn-outline-success btn-lg px-4"
              onClick={viewCourses}
            >
              View Courses
            </button> */}
          </div>
        </div>
        {/* style="max-height: 30vh;" */}
        <div className="overflow-hidden border-bottom">
          <div className="container px-5">
            {/* <img src="bootstrap-docs.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"> */}
          </div>
        </div>
      </div>

      <div className="border-bottom">
        <br />
        <ChooseUs />
      </div>

      <div>
        {/* <TopRatedCourses courses={courses} /> container px-5 */}
        {/* <CourseMap courses={courses} /> */}
      </div>

      <div className="border-bottom">
        <Services />
      </div>

      <div className="about-header border-bottom">
        <br />
        {/* <h2 className="text-center ">News and Blogs</h2> */}
        <SubscribeWithUs />
      </div>

      <div>
        {/* <Carousel interval={1000} keyboard={false}>
          {imagees.map((imgs, key) => (
            <Carousel.Item key={key} style={{ maxHeight: 250, maxWidth: 250 }}>
              <img className="d-block w-100" src={imgs.src} alt={imgs.title} />
            </Carousel.Item>
          ))}
        </Carousel> */}
        <LogoSwipe />
      </div>
    </Container>
  );
};

export default HomePage;
