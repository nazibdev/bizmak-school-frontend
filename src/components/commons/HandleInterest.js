import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function HandleInterest(props) {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState("top-center");

  return (
    <>
      <ButtonGroup className="me-2" aria-label="Second group">
        <Button
          variant="primary"
          className="card-link"
          onClick={() => setShow(true)}
        >
          Interested
        </Button>
      </ButtonGroup>
      <ToastContainer position={position} className="p-3">
        <Toast onClose={() => setShow(false)} show={show} delay={4000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>1 min ago</small>
          </Toast.Header>
          <Toast.Body>
            Your Interest for {props.courseName} has been acknowledged
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default HandleInterest;
