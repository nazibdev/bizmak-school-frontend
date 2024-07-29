import Carousel from "react-bootstrap/Carousel";
import "../css/styles.css";
import Image from "react-bootstrap/Image";

function ControllCarousel() {
  const h1 = require("../images/heros/h1.jpeg");
  const h2 = require("../images/heros/h2.jpeg");
  const h3 = require("../images/heros/h3.jpeg");
  const h4 = require("../images/heros/h4.jpg");

  const image1 = require("../images/image1.jpg");
  const image2 = require("../images/image2.jpg");
  // const image3 = require("../images/image3.jpg");
  const image3 = require("../images/logo-original-1000.png");
  // const viewCourses = e => {
  //     navigate.push("/course");
  // };

  const imagees = [
    {
      id: "12",
      title: "Quality Assurance (QA) Training",
      subTitle:
        "Master the art of software testing and quality assurance with expert-led courses.",
      src: h1,
      alt: "h1",
    },
    {
      id: "12",
      title: "Business Analysis (BA) Certification",
      subTitle:
        "Unlock your potential as a business analyst with our comprehensive BA training.",
      src: h2,
      alt: "h2",
    },
    {
      id: "12",
      title: "DevOps Training and Certification",
      subTitle:
        "Bridge the gap between development and operations in the world of DevOps.",
      src: h3,
    },
    {
      id: "12",
      title: "Advance Your IT Career",
      subTitle:
        "Elevate your skills and job prospects with our online training programs.",
      src: h4,
    },
    // {
    //   id: "321",
    //   title: "Second slide label",
    //   subTitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    //   src: image2,
    // },
    // {
    //   id: "421",
    //   title: "Third slide label",
    //   subTitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    //   src: image3,
    // },
    // {
    //   id: "1232",
    //   title: "Fourth slide label",
    //   subTitle: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    //   src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
    // },
  ];

  const courses = [
    {
      title: "Java Basics",
      description:
        "Learn the basics of React and start building dynamic web applications.",
      rating: 4.5,
    },
    {
      title: "Manual UI Testing",
      description:
        "Understand the core concepts of JavaScript and develop your programming skills.",
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
  ];

  return (
    <>
      <br />
      <Carousel interval={4000} keyboard={false}>
        {imagees.map((imgs, key) => (
          <Carousel.Item
            key={key}
            style={{ maxHeight: 600, maxWidth: "relative" }}
          >
            {/* <img
              className=" hero-image"
              src={imgs.src}
              alt={imgs.alt}
              rounded
            /> */}
            <Image
              className=" hero-image"
              src={imgs.src}
              alt={imgs.alt}
              rounded
            />
            {/* <Carousel.Caption>
              <h3>
                <b>{imgs.title}</b>
              </h3>
              <p><b>{imgs.subTitle}</b></p>
            </Carousel.Caption> */}

            <div className="hero-text">
              <h1 className="hero-title">{imgs.title}</h1>
              <p className="hero-description">{imgs.subTitle}</p>
            </div>
          </Carousel.Item>
        ))}
        {/* {<h1 style={{ top: 10, textAlign: "center", position: "absolute"}}>Overlay title</h1>} */}
      </Carousel>
    </>
    // {<h1 style={{ position: "absolute", top: 0, innerWidth: "100%" }}>Overlay title</h1>}

    // <Carousel interval={10000} keyboard={false}>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={image1}
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //         <h1 className="display-4 fw-bold">Build Career</h1>
    //         <h3>Enroll into Program</h3>
    //         <p>Choose course from Industry standard courses</p>
    //         <div className="col-lg-6 mx-auto">
    //             <p className="lead mb-4">Build and Grow your career in 4 months and Start Making 70K+.</p>
    //             <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
    //             <button type="button" className="btn btn-outline-primary btn-lg px-4 me-sm-3">Enroll Now</button>
    //             {/* <button type="button" className="btn btn-outline-success btn-lg px-4" onClick={viewCourses}>View Courses</button> */}
    //             </div>
    //         </div>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={image2}
    //       alt="Second slide"
    //     />

    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={image3}
    //       alt="Third slide"
    //     />

    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
  );
}

export default ControllCarousel;
