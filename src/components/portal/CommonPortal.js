import { useEffect, useState } from "react";
import { Container, Alert, Row, Col, Button } from "react-bootstrap";
import StudentHome from "./StudentHome";
import TeacherHome from "./TeacherHome";

const CommonPortal = () => {
  return (
    <div>
      <Row>
        <Col className="w-50 text-center">
          <StudentHome />
        </Col>
        <div className="vr" />
        <Col className="w-50 text-center">
          <TeacherHome />
        </Col>
      </Row>
    </div>
  );
};
export default CommonPortal;
