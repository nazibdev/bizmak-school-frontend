import React from "react";
import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ChooseUs from "./ChooseUs";
import "../css/styles.css";

const Services = () => {
  const [readMoreLearn, setReadMoreLearn] = useState(false);
  const extraContenLearn = (
    <div>
      <p classNameName="extra-content">
        Our bootcamp is an intensive and immersive training program designed to
        provide you with the technical skills and practical knowledge you need
        to excel in the fast-paced and constantly evolving tech industry.
        Whether you're a complete beginner or an experienced professional
        looking to upskill, our bootcamp will help you achieve your career goals
        and stand out in a competitive job market.
        <br />
        <br />
        Our curriculum is carefully crafted and regularly updated to ensure that
        it covers the latest industry trends and technologies. You'll learn from
        expert instructors with years of real-world experience in your chosen
        field, who will guide you through hands-on projects and assignments that
        simulate real-world scenarios.
        <br />
        <br />
        In addition to technical skills, our bootcamp also focuses on
        professional development and soft skills. You'll learn how to work
        collaboratively in a team environment, communicate effectively, and
        develop a strong work ethic that will set you apart from your peers.
        <br />
        <br />
        Our supportive community of fellow students and alumni will be there to
        cheer you on and provide you with networking opportunities, mentorship,
        and job placement assistance after graduation. Join us and start your
        journey towards a successful career in tech today.
      </p>
    </div>
  );
  const linkNameLearn = readMoreLearn ? " less... " : " more... ";

  const [readMoreResume, setReadMoreResume] = useState(false);
  const extraContenResume = (
    <div>
      <p classNameName="extra-content">
        At our resume service, we understand that a well-crafted resume is the
        key to landing your dream job. That's why we offer personalized resume
        writing services that are tailored to your unique skills, experience,
        and career goals. Our team of experienced and certified resume writers
        will work with you one-on-one to understand your background and
        objectives, and create a customized resume that effectively highlights
        your strengths and accomplishments.
        <br />
        <br />
        We use a proven methodology that combines industry best practices with
        your individual career aspirations to create a professional resume that
        stands out from the competition. Our writers are experts in a wide range
        of industries and have experience crafting resumes for entry-level to
        executive-level professionals.
        <br />
        <br />
        Our resume writing process includes a comprehensive review of your
        existing resume or a detailed consultation if you don't have one,
        followed by a collaborative writing process to ensure that your new
        resume accurately reflects your achievements and aligns with your career
        goals. We also offer revisions until you are completely satisfied with
        the final product.
        <br />
        <br />
        At our resume service, we pride ourselves on our attention to detail and
        commitment to client satisfaction. Our services include not only resume
        writing, but also cover letter writing, LinkedIn profile optimization,
        and job search coaching. Let us help you take the first step towards
        your dream career today.
      </p>
    </div>
  );
  const linkNameResume = readMoreResume ? " less... " : " more... ";

  const [readMoreInterview, setReadMoreInterview] = useState(false);
  const extraContenInterview = (
    <div>
      <p classNameName="extra-content">Add Text</p>
    </div>
  );
  const linkNameInterview = readMoreInterview ? " less... " : " more... ";

  return (
    <div className="">
      <div>
        <h3 className="text-center">Learn . Apply . Know . how</h3>
      </div>
      <div className="sc-bgrGEg edtqif">
        <div className="sc-dmRaPn gfwKde MuiBox-root about-header">
          {/* <h2 className="sc-bczRLJ jNGtkI MuiTypography-root MuiTypography-h3">Learn. Apply. Know-how.</h2> */}
          <p className="sc-bczRLJ iinyyu MuiTypography-root MuiTypography-body1">
            With BCAMP, discover a new way of learning: 20% theory, 80%
            practice.
          </p>
        </div>
        <div data-testid="uvp-container-children" className="sc-erPKsr khUGRK">
          <Row>
            <div data-testid="uvp-copmponent" className="sc-eTgnfb ZeFHk">
              <div
                data-testid="uvp-img"
                className="sc-fbHdRr sc-bjjCGC jndZiZ bDCQRr"
              >
                <img
                  alt=""
                  src="https://openclassrooms.com/modules/sdzv4-main/latest/images/online_study-011feaaa33df196e1ae0.svg"
                ></img>
              </div>
              <div>
                <p className="sc-bczRLJ iQAqpS MuiTypography-root MuiTypography-h4">
                  <span>
                    <b>Learn wherever you are </b>
                  </span>
                </p>
                <p className="sc-bczRLJ jiWuAX MuiTypography-root MuiTypography-body1">
                  Access your 100% online training program at the office, at
                  home, in town, in the mountains - wherever you want!
                </p>
              </div>
            </div>
            <div data-testid="uvp-copmponent" className="sc-eTgnfb ZeFHk">
              <div
                data-testid="uvp-img"
                className="sc-fbHdRr sc-bjjCGC jndZiZ bDCQRr"
              >
                <img
                  alt=""
                  src="https://openclassrooms.com/modules/sdzv4-main/latest/images/mentoring-d3132f53ba0a521499a9.svg"
                ></img>
              </div>
              <div>
                <p className="sc-bczRLJ iQAqpS MuiTypography-root MuiTypography-h4">
                  <span>
                    <b> A mentor to support you </b>
                  </span>
                </p>
                <p className="sc-bczRLJ jiWuAX MuiTypography-root MuiTypography-body1">
                  Get weekly guidance from a field expert who's there to help
                  you progress throughout your training program.
                </p>
              </div>
            </div>
            <div data-testid="uvp-copmponent" className="sc-eTgnfb ZeFHk">
              <div
                data-testid="uvp-img"
                className="sc-fbHdRr sc-bjjCGC jndZiZ bDCQRr"
              >
                <img
                  alt=""
                  src="https://openclassrooms.com/modules/sdzv4-main/latest/images/job_ready-7cd674ffd711044da492.svg"
                ></img>
              </div>
              <div>
                <p className="sc-bczRLJ iQAqpS MuiTypography-root MuiTypography-h4">
                  <span>
                    <b> Work on career-focused projects </b>
                  </span>
                </p>
                <p className="sc-bczRLJ jiWuAX MuiTypography-root MuiTypography-body1">
                  Acquire skills you can use in the workplace thanks to projects
                  based on actual business cases.
                </p>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Services;

{
  /* <ChooseUs/>
      <div classNameName="top-rated-courses text-center border-bottom">
      <h2 classNameName="text-center" color='green'>Our Services</h2>
      <br/>
      <Row classNameName="gap-4">
        <Col md={4}>
          <Card border='primary' style={{ width: '25rem', color: 'darkred', backgroundColor: 'coral' }} >
            <Card.Body>
              <Card.Img src="https://images.unsplash.com/photo-1524514587686-e2909d726e9b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt='img'></Card.Img>
              <Card.Title>Bootcamp</Card.Title>
              <Card.Text>
                Our bootcamp is a comprehensive training program designed to equip you with the skills and knowledge you need to succeed in the tech industry. With hands-on training, expert instructors, and a supportive community, our bootcamp will help you achieve your career goals and succeed in your chosen field.
              <a classNameName="read-more-link" onClick={()=>{setReadMoreLearn(!readMoreLearn)}}>{linkNameLearn}</a>
                            {readMoreLearn && extraContenLearn}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <Row classNameName="gap-4">
        <Col md={4}>
          <Card border='primary' style={{ width: '25rem', color: 'dark', backgroundColor: 'plum' }}>
            <Card.Body>
              <Card.Img src="https://images.unsplash.com/photo-1531053326607-9d349096d887?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt='img'></Card.Img>  
              <Card.Title>Resume Services</Card.Title>
              <Card.Text>
                Our resume services are designed to help you stand out from the competition and get noticed by potential employers. Whether you're just starting out or looking to make a career change, our team of experienced resume writers will work with you to create a compelling and professional resume that showcases your skills, experience, and achievements.
                <a classNameName="read-more-link" onClick={()=>{setReadMoreResume(!readMoreResume)}}>{linkNameResume}</a>
                            {readMoreResume && extraContenResume}
              
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <Row classNameName="gap-4">
        <Col md={4}>
          <Card border='primary' style={{ width: '25rem', color: 'floralwhite', backgroundColor: 'darkgreen' }}>
            <Card.Body>
              <Card.Img src="https://images.unsplash.com/photo-1542042953945-ddfcee22a1a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt='img'></Card.Img>  
              <Card.Title>Interview Preparation</Card.Title>
              <Card.Text>
                Our interview preparation services are designed to help you feel confident and ready for your next job interview. Whether you're looking for advice on what to wear, tips on how to answer common interview questions, or a mock interview to help you practice your responses, our team of experts will be there to support you every step of the way.
                <a classNameName="read-more-link" onClick={()=>{setReadMoreInterview(!readMoreInterview)}}>{linkNameInterview}</a>
                            {readMoreInterview && extraContenInterview}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </div>
      <br/><br/><br/> */
}
