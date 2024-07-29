import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Accordion from "react-bootstrap/Accordion";

function CourseOutline(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    //work on backend to publish course outline
    console.log(props.courseId);
  }, [show]);

  const getCourseOutline = () => {
    // Based on the selected courseName, return the corresponding course outline
    if (props.courseName === "Manual Testing (QA)") {
      return (
        <>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Module 1: Introduction to Software Testing
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Overview of Software Testing</li>
                  <li>Importance of Manual Testing</li>
                  <li>Roles and Responsibilities of a Manual Tester</li>
                  <li>Types of Testing (Functional vs. Non-functional)</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Module 2: Testing Life Cycle</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Software Development Life Cycle (SDLC)</li>
                  <li>Software Testing Life Cycle (STLC)</li>
                  <li>Test Planning and Strategy</li>
                  <li>Test Case Design Techniques</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Module 3: Web Application Testing
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Session 1: Introduction to Web Technologies
                    <ul>
                      <li>Understanding Web Architecture</li>
                      <li>Basics of HTML, CSS, and JavaScript</li>
                      <li>Web Browsers and Cross-browser Testing</li>
                    </ul>
                  </li>
                  <li>
                    Session 2: Functional Testing for Web Applications
                    <ul>
                      <li>Testing Web Forms and User Inputs</li>
                      <li>Navigation Testing</li>
                      <li>Link and Integration Testing</li>
                      <li>Usability and Compatibility Testing</li>
                    </ul>
                  </li>
                  <li>
                    Session 3: Non-functional Testing for Web Applications
                    <ul>
                      <li>Performance Testing</li>
                      <li>Security Testing</li>
                      <li>Load and Stress Testing</li>
                      <li>Accessibility Testing</li>
                    </ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Module 4: Mobile Application Testing
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Session 1: Introduction to Web Technologies
                    <ul>
                      <li>
                        Session 1: Introduction to Mobile Technologies
                        <ul>
                          <li>Mobile App Architecture</li>
                          <li>Types of Mobile Apps (Native, Web, Hybrid)</li>
                          <li>Key Mobile Platforms (iOS, Android)</li>
                        </ul>
                      </li>
                      <li>
                        Session 2: Functional Testing for Mobile Applications
                        <ul>
                          <li>Installation and Uninstallation Testing</li>
                          <li>UI and Usability Testing</li>
                          <li>Mobile Gesture Testing </li>
                          <li>Compatibility Testing</li>
                        </ul>
                      </li>
                      <li>
                        Session 3: Non-functional Testing for Mobile
                        Applications
                        <ul>
                          <li>Performance Testing for Mobile</li>
                          <li>Security Testing for Mobile</li>
                          <li>Battery Consumption Testing</li>
                          <li>Network Connectivity Testing</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Module 5: API Testing</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Session 1: Introduction to Web Technologies
                    <ul>
                      <li>
                        Session 1: Basics of APIs
                        <ul>
                          <li>Understanding APIs and Web Services</li>
                          <li>Types of APIs (RESTful, SOAP)</li>
                          <li>API Documentation and Endpoints</li>
                        </ul>
                      </li>
                      <li>
                        Session 2: Testing APIs
                        <ul>
                          <li>API Functional Testing</li>
                          <li>Parameter and Payload Testing</li>
                          <li>Error Handling in APIs</li>
                          <li>Security Testing for APIs</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Module 6: Test Management and Reporting
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Session 1: Introduction to Web Technologies
                    <ul>
                      <li>Test Execution and Logging</li>
                      <li>Defect Life Cycle</li>
                      <li>Test Metrics and Reporting</li>
                      <li>Test Closure Activities</li>
                    </ul>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                Module 7: Tools in Manual Testing
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Introduction to Testing Tools</li>
                  <li>Test Case Management Tools</li>
                  <li>Bug Tracking Tools</li>
                  <li>Collaboration Tools</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                Module 8: Best Practices in Manual Testing
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Effective Communication in Testing</li>
                  <li>Collaboration with Development Teams</li>
                  <li>Continuous Learning in Testing</li>
                  <li>Career Paths in Software Testing</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <span>
            <p>
              <b>Prerequisites:</b>
              <ul>
                <li>Basic understanding of software development concepts.</li>
                <li>
                  Familiarity with basic programming concepts is a plus but not
                  mandatory.
                </li>
              </ul>
            </p>
          </span>
        </>
      );
    } else if (
      props.courseName === "Software Development Engineer in Test (SDET)"
    ) {
      return (
        <>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Module 1: Introduction to Automation Testing
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Overview of Automation Testing</li>
                  <li>Advantages and challenges</li>
                  <li>Introduction to Selenium, Cucumber, and Java</li>
                  <li>Setting up the testing environment</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Module 2: Core Java for Test Automation
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Introduction to Java for testers</li>
                  <li>Basic syntax and data types</li>
                  <li>Object-oriented programming concepts</li>
                  <li>Exception handling and file I/O</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Module 3: Selenium WebDriver Basics
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Introduction to Selenium WebDriver</li>
                  <li>Locators and WebDriver commands</li>
                  <li>Working with different web elements</li>
                  <li>Synchronization strategies</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Module 4: Advanced Selenium WebDriver
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Handling dynamic elements</li>
                  <li>Working with multiple windows and frames</li>
                  <li>Page Object Model (POM)</li>
                  <li>TestNG integration for testing</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Module 5: Introduction to Cucumber
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Understanding Behavior Driven Development (BDD)</li>
                  <li>Gherkin language syntax</li>
                  <li>Writing and executing Cucumber scenarios</li>
                  <li>Integration with Selenium</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Module 6: API Testing with RestAssured
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Introduction to API testing</li>
                  <li>RestAssured framework basics</li>
                  <li>Testing RESTful APIs</li>
                  <li>Handling JSON and XML responses</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>
                Module 7: Mobile Automation with Appium
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Introduction to mobile automation</li>
                  <li>Setting up Appium for Android and iOS</li>
                  <li>Working with mobile elements</li>
                  <li>Running mobile tests in parallel</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>
                Module 8: Continuous Integration and Jenkins
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Introduction to Continuous Integration (CI)</li>
                  <li>Setting up Jenkins for test automation</li>
                  <li>Running automated tests in Jenkins</li>
                  <li>Integration with version control systems</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header>
                Module 9: Best Practices and Frameworks
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Best practices in automation testing</li>
                  <li>Overview of testing frameworks (TestNG, JUnit)</li>
                  <li>Building and maintaining automation frameworks</li>
                  <li>Reporting and logging</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9">
              <Accordion.Header>
                Module 10: Final Project and Real-world Application
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Applying learned concepts in a comprehensive project</li>
                  <li>Real-world scenarios and challenges</li>
                  <li>Project presentation and feedback</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      );
    } else if (props.courseName === "DevOps") {
      return (
        <>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Module 1: Introduction to DevOps
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Overview of DevOps</li>
                  <li>Key principles and practices</li>
                  <li>Benefits and challenges of DevOps</li>
                  <li>Evolution of DevOps in the industry</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Module 2: Version Control Systems (VCS)
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Introduction to version control</li>
                  <li>Git fundamentals</li>
                  <li>Branching and merging strategies</li>
                  <li>Collaboration with Git</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Module 3: Continuous Integration (CI)
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Principles of CI/CD</li>
                  <li>Jenkins introduction and setup</li>
                  <li>Creating and configuring Jenkins jobs</li>
                  <li>Automated testing in CI</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            {/* Repeat the pattern for other modules... */}

            <Accordion.Item eventKey="9">
              <Accordion.Header>Module 9: Security in DevOps</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>DevSecOps principles</li>
                  <li>Secure coding practices</li>
                  <li>Continuous security testing</li>
                  <li>Compliance and auditing</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="10">
              <Accordion.Header>
                Module 10: DevOps Best Practices and Case Studies
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Industry best practices</li>
                  <li>Real-world DevOps case studies</li>
                  <li>Lessons learned and continuous improvement</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="11">
              <Accordion.Header>
                Final Project: Implementing a DevOps Pipeline
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Applying learned concepts to build a complete DevOps
                    pipeline
                  </li>
                  <li>Collaborative project work</li>
                  <li>Presentation and feedback</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      );
    } else if (props.courseName === "Business Analyst (BA)") {
      return (
        <>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Module 1: Introduction to Business Analysis
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Overview of Business Analysis</li>
                  <li>Role and responsibilities of a Business Analyst</li>
                  <li>
                    Importance of business analysis in software development
                  </li>
                  <li>Skills required for a successful Business Analyst</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Module 2: Software Development Life Cycle (SDLC)
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Understanding different SDLC models</li>
                  <li>Role of a Business Analyst in each phase of SDLC</li>
                  <li>Waterfall, Agile, and other methodologies</li>
                  <li>Adapting to the project's SDLC</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Module 3: Requirements Elicitation and Gathering
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Techniques for gathering requirements</li>
                  <li>Interviews, surveys, and workshops</li>
                  <li>Use case modeling and prototyping</li>
                  <li>Documenting and prioritizing requirements</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Module 4: Requirements Analysis and Documentation
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Analyzing and documenting functional and non-functional
                    requirements
                  </li>
                  <li>Creating user stories and acceptance criteria</li>
                  <li>Traceability matrix</li>
                  <li>Validating and verifying requirements</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Module 5: Business Process Modeling
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Understanding and mapping business processes</li>
                  <li>Tools and techniques for process modeling</li>
                  <li>Identifying process improvements</li>
                  <li>Optimizing business processes</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Module 6: Stakeholder Management
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Identifying and analyzing stakeholders</li>
                  <li>Effective communication with stakeholders</li>
                  <li>Handling conflicts and managing expectations</li>
                  <li>Building and maintaining stakeholder relationships</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>
                Module 7: Quality Assurance and Testing
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Understanding testing processes and methodologies</li>
                  <li>Creating test cases and scenarios</li>
                  <li>Collaborating with the testing team</li>
                  <li>Ensuring quality in software delivery</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>
                Module 8: Data Analysis and Modeling
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Analyzing and modeling data requirements</li>
                  <li>Database concepts for Business Analysts</li>
                  <li>Normalization and denormalization</li>
                  <li>Data mapping and data dictionaries</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header>
                Module 9: Agile Business Analysis
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Agile principles and values</li>
                  <li>Scrum, Kanban, and other Agile frameworks</li>
                  <li>Adapting business analysis in Agile environments</li>
                  <li>Participating in Agile ceremonies</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9">
              <Accordion.Header>
                Module 10: Case Studies and Real-world Projects
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    Applying business analysis techniques to real-world
                    scenarios
                  </li>
                  <li>Case studies and project work</li>
                  <li>Presenting findings and recommendations</li>
                  <li>Feedback and improvement strategies</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      );
    } else if (props.courseName === "Java Language") {
      return (
        <>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Module 1: Introduction to Java
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Overview of Java Programming Language</li>
                  <li>Java Development Environment Setup</li>
                  <li>Writing and Running Your First Java Program</li>
                  <li>Basic Concepts: Variables, Data Types, and Operators</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Module 2: Control Flow Statements
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Conditional Statements: if, else, switch</li>
                  <li>Looping Statements: for, while, do-while</li>
                  <li>Break and Continue Statements</li>
                  <li>Understanding Exception Handling</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Module 3: Object-Oriented Programming in Java
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Classes and Objects</li>
                  <li>Inheritance, Polymorphism, and Encapsulation</li>
                  <li>Abstract Classes and Interfaces</li>
                  <li>Working with Packages and Access Modifiers</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Module 4: Exception Handling and File I/O
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Understanding Checked and Unchecked Exceptions</li>
                  <li>Try, Catch, Finally Blocks</li>
                  <li>Reading and Writing to Files</li>
                  <li>Working with Streams</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Module 5: Collections Framework
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Introduction to Java Collections</li>
                  <li>List, Set, Map Interfaces</li>
                  <li>ArrayList, LinkedList, HashSet, HashMap, etc.</li>
                  <li>Iterators and Comparators</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Module 6: Multi-Threading in Java
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Understanding Threads and Processes</li>
                  <li>Creating and Managing Threads</li>
                  <li>Synchronization and Thread Safety</li>
                  <li>Concurrency Utilities</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>
                Module 7: JDBC and Database Connectivity
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Introduction to JDBC (Java Database Connectivity)</li>
                  <li>Connecting to Databases</li>
                  <li>Executing SQL Queries</li>
                  <li>Transaction Management</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>
                Module 8: Java GUI Programming (Swing and JavaFX)
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Introduction to GUI Programming</li>
                  <li>Swing Components: JFrame, JPanel, JButton, etc.</li>
                  <li>Event Handling in GUI</li>
                  <li>Introduction to JavaFX</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header>
                Module 9: Web Development with Java
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Servlets and JSP (JavaServer Pages)</li>
                  <li>Introduction to Spring Framework</li>
                  <li>Building RESTful Web Services</li>
                  <li>Introduction to Hibernate ORM</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9">
              <Accordion.Header>
                Module 10: Project Work and Real-world Applications
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Working on Java Projects</li>
                  <li>Best Practices and Design Patterns</li>
                  <li>Version Control with Git</li>
                  <li>Preparing for Java Certification Exams</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      );
    } else if (props.courseName === "JavaScript Language") {
      return <></>;
    } else if (props.courseName === "Python Language") {
      return <></>;
    } else if (props.courseName === "Spring Boot") {
      return (
        <>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Module 1: Introduction to Spring Boot
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Overview of Spring Boot</li>
                  <li>Advantages of Spring Boot over traditional Spring</li>
                  <li>Setting up a Spring Boot Project</li>
                  <li>Understanding the Spring Boot Starter</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Module 2: Building RESTful APIs with Spring Boot
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Introduction to REST and RESTful Services</li>
                  <li>Creating a RESTful Controller</li>
                  <li>Request Mapping and HTTP Methods</li>
                  <li>Handling Request and Response</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Module 3: Data Access with Spring Boot
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Connecting to a Database with Spring Boot</li>
                  <li>Spring Data JPA for Database Interaction</li>
                  <li>CRUD Operations with Spring Boot</li>
                  <li>Transactional Support</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Module 4: Spring Boot and Microservices Architecture
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Microservices Architecture Overview</li>
                  <li>Building Microservices with Spring Boot</li>
                  <li>Service Discovery and Load Balancing</li>
                  <li>Communication between Microservices</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Module 5: Spring Boot Security
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Securing a Spring Boot Application</li>
                  <li>Authentication and Authorization</li>
                  <li>OAuth 2.0 and OpenID Connect</li>
                  <li>Best Practices for Security</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>Module 6: Spring Boot Testing</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Unit Testing with JUnit and Mockito</li>
                  <li>Integration Testing in Spring Boot</li>
                  <li>Testing RESTful Services</li>
                  <li>Test Automation and Best Practices</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>
                Module 7: Building a Real-world Project
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Understanding Project Requirements</li>
                  <li>Designing and Implementing a Spring Boot Application</li>
                  <li>Deploying and Managing the Application</li>
                  <li>Performance Tuning and Optimization</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>
                Module 8: Advanced Topics in Spring Boot
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Spring Boot Actuator for Monitoring and Management</li>
                  <li>Building Custom Starters</li>
                  <li>Internationalization and Localization</li>
                  <li>Working with Spring Boot CLI</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header>
                Module 9: Deployment and DevOps with Spring Boot
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Containerization with Docker</li>
                  <li>Orchestration with Kubernetes</li>
                  <li>
                    Continuous Integration and Continuous Deployment (CI/CD)
                  </li>
                  <li>Monitoring and Logging Strategies</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      );
    } else if (props.courseName === "Hibernate/Spring Jpa With Spring boot") {
      return (
        <>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Module 1: Introduction to Hibernate and Spring Data JPA
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Understanding Object-Relational Mapping (ORM)</li>
                  <li>Introduction to Hibernate Framework</li>
                  <li>Introduction to Spring Data JPA</li>
                  <li>Advantages of Hibernate and Spring Data JPA</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Module 2: Setting Up the Development Environment
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Installing and Configuring Hibernate</li>
                  <li>Setting Up a Spring Boot Project</li>
                  <li>Configuring Data Source and JPA Properties</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Module 3: Entity Mapping with Hibernate Annotations
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Mapping Entities to Database Tables</li>
                  <li>Understanding Primary Keys and Generated Values</li>
                  <li>
                    Relationship Mapping (One-to-One, One-to-Many, Many-to-One,
                    Many-to-Many)
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Module 4: Spring Data Repositories
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Creating Repositories with Spring Data JPA</li>
                  <li>Query Methods and Named Queries</li>
                  <li>Custom Repository Methods</li>
                  <li>Sorting and Pagination</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Module 5: Spring Boot and Hibernate Integration
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Bootstrapping Hibernate with Spring Boot</li>
                  <li>
                    Configuring Data Source and JPA Properties in Spring Boot
                  </li>
                  <li>Transaction Management with Spring Boot</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Module 6: Advanced Topics</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Caching Strategies with Hibernate</li>
                  <li>Using Hibernate Envers for Auditing</li>
                  <li>Integration with Spring Security</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      );
    } else if (props.courseName === "ReactJs") {
      return <></>;
    } else {
      // Handle other course types if needed
      return <p>Course outline not available for {props.courseName}</p>;
    }
  };

  return (
    <>
      <ButtonGroup className="me-2" aria-label="Third group">
        <Button variant="primary" onClick={handleShow} className="card-link">
          Course Outline
        </Button>
      </ButtonGroup>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Course Outline for {props.courseName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{getCourseOutline()}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default CourseOutline;
