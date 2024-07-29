import { Container, Modal, Button, ButtonGroup } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Icon from "react-bootstrap/Icon";
import { useEffect, useState } from "react";
import axios from "axios";
import CourseCart from "./CourseCart";
import Alert from "react-bootstrap/Alert";

import CourseOutline from "./CourseOutline";
import HandleInterest from "./HandleInterest";
import DrawerSetup from "./DrawerSetup";
import config from "../../config";

const Courses = () => {
  // const mainUrl = { config.url };
  // "http://ec2-18-191-222-58.us-east-2.compute.amazonaws.com:8080/api/public/";
  const [courses, setCourses] = useState();
  const [show, setShow] = useState(true);

  const handleCourse = async (e) => {
    try {
      console.log(config.apiUrl);
      const res = await axios
        .get(config.apiUrl + "viewcourses")
        .then((response) => response.data)
        .then((response) => setCourses(response));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleCourse();
  }, []);

  const pushSuccessMessage = async () => {};

  return (
    <div className="">
      <div key="success" id="show-message" variant="success"></div>
      <div className="cart">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/fluency/48/shopping-cart.png"
          alt="shopping-cart"
          id="cart-option"
          style={{ visibility: "hidden" }}
        />
        <a
          href="/course/checkout"
          id="cart-option-checkout"
          style={{ visibility: "hidden" }}
        >
          Continue Checkout
          {/* <PayButton /> */}
        </a>
      </div>
      <br />
      <CourseMap courses={courses ?? courses} />
    </div>
  );
};

const CourseMap = ({ courses }) => {
  const renderCourses = () => {
    const courseRows = [];
    for (let i = 0; i < courses?.length; i += 2) {
      const course1 = courses?.[i];
      const course2 = courses?.[i + 1];
      const row = (
        <Row id="row_" className="gap-4">
          <Col>
            <Course key={course1.courseId} course={course1} />
          </Col>
          <Col>
            {course2 && <Course key={course2.courseId} course={course2} />}
          </Col>
        </Row>
      );
      courseRows.push(row);
    }
    return courseRows;
  };

  return (
    <div>
      <div className="container">{renderCourses()}</div>
      {/* {courses?.map((course) => (
        <Course key={course.courseId} course={course} />
      ))} */}
    </div>
  );
};

const Course = ({ course }) => {
  const { courseId, courseName, courseRate, courseDescription } = course;
  const [showMore, setShowMore] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const [responseData, setResponseData] = useState();

  const mainUrl = "http://localhost:8080/api/public/";
  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  // function Example() {
  //   return (
  //     <>
  //       {["start", "end", "top", "bottom"].map((placement, idx) => (
  //         <CourseCart key={idx} placement={placement} name={placement} />
  //       ))}
  //     </>
  //   );
  // }

  const handleAddToCart = async () => {
    // setCartItems([...cartItems, course]);
    // setShowCart(true);
    // e.preventDefault();
    try {
      const res = await axios.post(mainUrl + "cart/1/course/" + courseId);
      // if (res.data.status === 200) {
      setResponseData(res.data);
      setCartItems([...cartItems, course]);
      // setShowCart(true);
      // showCartIcon();
      // }

      if (res.data.success === true) {
        setSuccessMsg(res.data.message);
        document.getElementById("show-message").innerHTML =
          course?.courseName + " Course is added to your Cart";
        localStorage.setItem("cart-course", successMsg);
        showCartIcon();
      } else {
        setSuccessMsg(res.data.message);
      }
    } catch (error) {
      console.error(error.data);
    }
  };

  const addToCart = (course) => {
    setCartItems([...cartItems, course]);
  };

  const showCartIcon = async () => {
    // if (showCart) {
    // }

    document.getElementById("cart-option").style = "visible";
    document.getElementById("cart-option-checkout").style = "visible";
  };

  const handleContinueCheckout = () => {
    console.log(`Course ${course.courseId} added to cart`);
  };

  const handleCourseOutline = () => {
    // Logic to handle adding the course to the cart
    console.log(`Course ${course.courseId} outline retrived`);
  };

  const handleInterestedCourse = () => {
    // Logic to handle adding the course to the cart
    document.getElementById("show-message").innerHTML =
      course?.courseName + " listed as your next Interest";
    document.getElementById("show-message").style.color = "green";
    document.getElementById("show-message").background.color = "green";

    // <Alert key="success" variant="success">
    //   {courseName} + " listed as your next Interest"
    // </Alert>;
  };
  //icons8.com/icon/j3XI41kBOIXY/shopping-cart
  const [position, setPosition] = useState("top-start");
  return (
    <div>
      {/* {{ showCart } && { showCartIcon }} */}
      {/* <Row id={course.courseId} className="gap-4"> */}
      {/* <Col> */}

      <div
        className="card border border-success box"
        style={{ width: "33rem" }}
        key={course?.courseId}
      >
        <div className="card-body">
          <h5 className="card-title" id="BasicCoding-">
            {course?.courseName}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {course?.courseRate}
          </h6>
          {/* <p>
            {course?.courseDescription.slice(0, 150)}
            {!showMore && "... "}
            <span className="more-link" onClick={toggleDescription}>
              {showMore ? "Less" : "More"}
            </span>
          </p>
          {showMore && <div>{course.courseDescription}</div>} */}

          <p>
            {course?.courseDescription && (
              <>
                {showMore
                  ? course.courseDescription
                  : `${course.courseDescription.slice(0, 150)}${
                      course.courseDescription.length > 150 ? "..." : ""
                    } `}
                <span className="more-link" onClick={toggleDescription}>
                  <a>{showMore ? " [Collapse]" : " [Read More]"}</a>
                </span>
              </>
            )}
          </p>
          <br />
          <ButtonGroup className="me-2" aria-label="First group">
            {/* <Button
              onClick={handleAddToCart}
              className="card-link"
              type="submit"
            >
              Add to Cart
            </Button> */}
            <DrawerSetup
              courseName={course?.courseName}
              coursePrice={course?.coursePrice}
            />
          </ButtonGroup>
          {showCart && showCartIcon}
          {/* {showCart && <CourseCart />} */}
          {/* <Button onClick={handleInterestedCourse} className="card-link">
            Interested
          </Button> */}
          <HandleInterest courseName={course?.courseName} />
          {/* <Button onClick={handleCourseOutline} className="card-link">
            Course Outline
          </Button> */}
          <CourseOutline
            courseName={course?.courseName}
            courseId={course?.courseId}
          />
          {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
        </div>
      </div>
      {/* </Col> */}
      {/* </Row> */}
      <br />
    </div>
  );
};

export default Courses;
