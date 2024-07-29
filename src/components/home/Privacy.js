import React from "react";
import Container from "react-bootstrap/Container";

const Privacy = () => {
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate() - 5;
    return `${month}/${date}/${year}`;
  }
  const lastUpdate = getDate();

  return (
    <Container>
      <h1 className="text-center">Privacy Statement</h1>
      <h6 className="text-center">Last Updated {lastUpdate}</h6>
      <div>
        <div>
          <h4>
            <i>
              <u>Introduction</u>
            </i>
          </h4>
          <span>
            <p>
              Welcome to BCAMP Solutions, an online learning platform committed
              to providing top-notch education and job assistance across diverse
              courses. We highly value your privacy and want you to understand
              how we collect, use, and safeguard your personal information.
            </p>
          </span>
        </div>

        <div>
          <h4>
            <i>
              <u>Information We Collect</u>
            </i>
          </h4>
          <ul>
            <li>
              <b>Personal Identification Information:</b>
            </li>
            <p>
              We may collect your name, email address, and other identifiable
              information when you register for courses.{" "}
              <u>We don't Sell your information.</u>
            </p>
            <li>
              <b>Payment Information:</b>
            </li>
            <p>
              To facilitate course enrollment, we collect payment details which
              are processed securely.
            </p>
            <li>
              <b>Usage Data:</b>
            </li>
            <p>
              We gather data on your interaction with our platform, including
              course progress and assessment results.
            </p>
          </ul>
        </div>
        <div>
          <h4>
            <i>
              <u>How We Use Your Information</u>
            </i>
          </h4>
          <ul>
            <li>
              <b>Course Delivery:</b>
            </li>
            <p>
              Your personal information is used to provide you with the courses
              you've enrolled in.
            </p>
            <li>
              <b>Communication:</b>
            </li>
            <p>
              We use your contact information for course updates, important
              notifications, and promotional material.
            </p>
            <li>
              <b>Improvement of Services:</b>
            </li>
            <p>
              Data on your usage helps us enhance our courses and optimize user
              experience.
            </p>
          </ul>
        </div>
        <div>
          <h4>
            <i>
              <u>Data Security</u>
            </i>
          </h4>
          <span>
            <p>
              We employ industry-standard security measures to protect your data
              from unauthorized access, disclosure, alteration, or destruction.
            </p>
          </span>
        </div>
        <div>
          <h4>
            <i>
              <u>Third-Party Services</u>
            </i>
          </h4>
          <span>
            <p>
              We may use third-party services for analytics, payment processing,
              and communication. These services adhere to their own privacy
              policies.
            </p>
          </span>
        </div>
        <div>
          <h4>
            <i>
              <u>Your Choices</u>
            </i>
          </h4>
          <span>
            <p>
              You have the right to access, correct, or delete your personal
              information. You can also opt-out of promotional communications.
            </p>
          </span>
        </div>
        <div>
          <h4>
            <i>
              <u>Job Assistance Services</u>
            </i>
          </h4>
          <span>
            <p>
              For job assistance services, we may share your resume and related
              information with partner companies. This is only done with your
              explicit consent.
            </p>
          </span>
        </div>
        <div>
          <h4>
            <i>
              <u>Updates to Privacy Notice</u>
            </i>
          </h4>
          <span>
            <p>
              We may update our Privacy Notice to reflect changes in our
              practices. We encourage you to review it periodically.
            </p>
          </span>
        </div>
        <div>
          <h4>
            <i>
              <u>Contact Us</u>
            </i>
          </h4>
          <span>
            <p>
              If you have any questions or concerns about your privacy or our
              practices, please contact us at <a href="/contact">here</a>
            </p>
          </span>
          <p>Thank you for choosing bcamp.com for your educational journey.</p>
        </div>
      </div>
    </Container>
  );
};

export default Privacy;
