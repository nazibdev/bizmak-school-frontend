import { useEffect, useState } from "react";
import { Container, Alert } from "react-bootstrap";

const CancelStatic = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeId = () =>
      setTimeout(() => {
        setShow(false);
      }, 5000);
    timeId();
  }, []);

  if (show) {
    console.log(show);
  }

  return (
    { show } && (
      <Container>
        <div className="py-5 text-center">
          <Alert key="danger" variant="danger">
            You Cancel your payment! Please click on Home
          </Alert>
        </div>
        <div></div>
      </Container>
    )
  );
};
export default CancelStatic;
