import { useState } from "react";
import "../css/styles.css";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import config from "../../config";

const ChooseUs = () => {
  // const config.apiurl =
  //   "http://ec2-18-191-222-58.us-east-2.compute.amazonaws.com:8080/api/public/";
  const [Optiondescription, setOptiondescription] = useState();
  const image1 = require("../images/heros/why-choose-our-course.jpg");
  const chooseUsDesc = async () => {
    try {
      await axios
        .get(config.apiurl + "chooseus")
        .then((response) => response.data)
        .then((response) => setOptiondescription(response));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="about ">
      <div className="about-header">
        <h3 className="text-center">How Does It Work?</h3>
        <br />
        <div>
          Welcome to our comprehensive selection of online courses designed to
          empower individuals seeking to excel in the fields of Quality
          Assurance (QA), DevOps, and Business Analysis (BA). We understand that
          choosing the right course is a critical step on your journey to
          acquiring valuable skills and advancing your career. Our "Choose a
          Course" option has been tailored to assist you in making the best
          choice for your professional development.
          <br />
          <br />
          <br />
          <h4>
            <span>Why Choose Our Courses?</span>
          </h4>
        </div>
      </div>
      <br></br>
      <br></br>
      <div>
        <Row>
          <Col>
            <div>
              <div className="about-column about-column-inv fade-in-image why-choose-us">
                <img
                  className="why-choose-us"
                  src={image1}
                  // loading="lazy"
                  // width="relative"
                  // height="450px"
                  alt="checkout and wait"
                  // style={{ maxHeight: "relative", maxWidth: "relative" }}
                ></img>
                {/* <Image src={image1} alt="checkout and wait" fluid /> */}
              </div>
            </div>
          </Col>
          <Col>
            <br></br>
            <br></br>
            <div>
              <ul>
                <li>
                  <b>Designed for Beginners:</b> Our courses are thoughtfully
                  crafted for individuals who are new to the world of IT and
                  coding. No prior experience is required.
                </li>

                <li>
                  <b>Experienced Instructors:</b> Learn from seasoned
                  instructors with years of industry expertise. They excel in
                  simplifying complex topics for beginners.
                </li>

                <li>
                  <b>Flexible Pacing:</b> Our self-paced courses empower you to
                  learn at your own convenience, fitting seamlessly into your
                  schedule.
                </li>

                <li>
                  <b>Affordable Tuition:</b> We offer competitive pricing that's
                  budget-friendly, making quality IT education accessible to
                  all.
                </li>

                <li>
                  <b>Mentorship Included:</b> Receive personalized 1-on-1
                  guidance and mentorship from our instructors throughout your
                  courses.
                </li>

                <li>
                  <b>Interview Preparation:</b> Prepare effectively for IT job
                  interviews with our specialized training and practice
                  sessions.
                </li>

                <li>
                  <b>Engaging Community:</b> Connect and collaborate with fellow
                  students, fostering a sense of community and mutual
                  accountability.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ChooseUs;

{
  /* <div>
        <div className="about-row">
          <div className="about-column">
            <h3>
              <span>1. </span>Choose a Course
            </h3>
            <p>
              {/* {Optiondescription[0].desc} 
              We are a leading social media growth company that has helped
              numerous account holders towards their dreams concerning account
              growth and generating organic engagements. We offer high-quality
              followers with operational accounts, likes, and views from active
              accounts on your stories, reels, and video posts. To get started
              check out our various plans for each service by clicking on the
              action buttons above. Our plans are tiered to accommodate whatever
              budget you are working with. We can process orders to meet the
              needs of our clients in good time.
            </p>
          </div>
          <div className="about-column about-column-inv fade-in-image">
            <img
              src="https://images.unsplash.com/photo-1524514587686-e2909d726e9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              loading="lazy"
              width="550px"
              height="450px"
              alt="choose plan"
            ></img>
          </div>
        </div>
        <div className="about-row">
          <div className="about-column about-column-responsive fade-in-image">
            <img
              src="https://images.unsplash.com/photo-1531053326607-9d349096d887?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
              alt="submit username"
              loading="lazy"
              width="450px"
              height="450px"
            ></img>
          </div>
          <div className="about-column">
            <h3>
              <span>2. </span>Submit Username
            </h3>
            <p>
              We use your username to identify your account so that your likes,
              follows, and views are sent to the right account. When you put in
              your username, we have no access to your accounts beyond what a
              fellow Instagram user does. Your profile photo, bio, follower
              count, and following will be visible if you are going for follows.
              For the likes service, your posts will also be visible. Then, you
              will be able to choose multiple posts across which your likes will
              be spread. This is also the same for views. You will be able to
              see your stories, reels, and video posts to choose where the views
              should be sent. Ensuring that we do not have more access to our
              account than is required to do our job is a way of keeping your
              account safe.
            </p>
          </div>
        </div>
        <div className="about-row">
          <div className="about-column">
            <h3>
              <span>3. </span> Checkout and Await Results
            </h3>
            <p>
              Once you have selected your package and entered your username, you
              proceed to the checkout to finalize your order. Our payment
              platform is secure, and PSI compliant. We use secure gateways
              because our clients’ safety matters to us. You can make payments
              with your credit card. Note that we do not retain your credit card
              information. Our orders are usually processed and delivered
              instantly; up to one hour after your order is placed. Once your
              order is placed successfully, you can expect to start seeing
              results almost instantly.
            </p>
          </div>
          <div className="about-column about-column-inv fade-in-image">
            <img
              src="https://images.unsplash.com/photo-1542042953945-ddfcee22a1a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              loading="lazy"
              width="550px"
              height="450px"
              alt="checkout and wait"
            ></img>
          </div>
        </div>
      </div> */
}
