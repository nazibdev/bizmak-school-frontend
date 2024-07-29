import { useEffect, useState } from "react";
import { Container, Alert } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import axios from "axios";
import config from "../../config";

const SuccessStatic = () => {
  const [show, setShow] = useState(true);
  const location = useLocation();
  const [ids, setIds] = useState("");
  const mainUrl =
    // "http://ec2-18-191-222-58.us-east-2.compute.amazonaws.com:8080/api/public/";
  // const [response, setResponse] = useState(null);

  useEffect(() => {
    // Extract session ID from the URL
    const sessionId = new URLSearchParams(location.search).get("session_id");

    // Call a function to get session ID based info
    if (sessionId) {
      // async () => {
      try {
        const res = axios.get(config.apiUrl + "isItSucceed/" + sessionId); // Replace with your API endpoint
        console.log(res.data);
        setIds(res.data.message);
        // setClientSt(res.data.objects[0]);
      } catch (error) {
        console.error("Error fetching response:", error);
      }
      // };
      console.log();
    }
  }, [location.search]);

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
          <Alert key="success" variant="success">
            <h1>Thanks for your order!</h1>
            Your Payment Was successfull!
            <p>
              We appreciate your business! If you have any questions, please
              email
            </p>
            <i>{ids}</i>
            <a href="mailto:orders@bizmakitsolutions.com">orders@example.com</a>
          </Alert>
        </div>
      </Container>
    )
  );
};
export default SuccessStatic;
