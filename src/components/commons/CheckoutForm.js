import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import config from "../../config";
const stripePromise = loadStripe(
  "pk_test_51NAaUkDSt0sogWbNYIRRizLO1ICvTWi7oEuq297IOtYozNfP25EtnnuC0dB75iUzS0OGmjpAYlu2ZaMxOYHHCCvQ00xC9CMG5u"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(card);

    if (error) {
      setError(error.message);
    } else {
      setError(null);

      // Send the token to your server.
      // You can make a POST request to your server endpoint here.
      console.log(token);
      // Example:
      const res = await axios.post(config.apiUrl + "/create-charge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          token: token,
        }),
      });
      console.log(res);
      // .then((data) => {
      //   console.log(res.data.message);
      //   alert(res.data.message);
      // });
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <input type="hidden" id="api-key" value="your_stripe_public_key" />
      <div className="form-group">
        <label className="font-weight-medium" htmlFor="card-element">
          Enter credit or debit card below
        </label>
        <CardElement id="card-element" />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          id="email"
          name="email"
          placeholder="Email Address"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {/* Used to display Element errors. */}
      {error && (
        <div className="text-danger w-100" id="card-errors" role="alert">
          {error}
        </div>
      )}
      <div className="form-group pt-2">
        <button
          className="btn btn-primary btn-block"
          id="submitButton"
          type="submit"
        >
          Pay With Your Card
        </button>
        <div className="small text-muted mt-2">
          Pay securely with Stripe. By clicking the button above, you agree to
          our{" "}
          <a target="_blank" href="#">
            Terms of Service
          </a>
          ,{" "}
          <a target="_blank" href="#">
            Privacy
          </a>
          , and{" "}
          <a target="_blank" href="#">
            Refund
          </a>{" "}
          policies.
        </div>
      </div>
    </form>
  );
};

function Charge() {
  return (
    <div className="bg-light pt-5">
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-12 my-auto mx-auto">
              <h1>Stripe One-Time Charge</h1>
              <p className="lead mb-4">
                Please fill the form below to complete the order payment
              </p>
              <div className="card mb-4">
                <div className="card-body">
                  <h5>Leather Bag</h5>
                  <p className="lead">USD 9.99</p>
                </div>
              </div>
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
              <p className="mt-5 text-muted">
                <small>
                  An example project by{" "}
                  <a href="https://github.com/GretiCani" target="_blank">
                    Greti
                  </a>
                  .
                </small>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Charge;
