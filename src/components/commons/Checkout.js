import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import {
//   PaymentElement,
//   LinkAuthenticationElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import Stripe from "stripe";

const Checkout = () => {
  // const config.apiurl =
  //   "http://ec2-18-191-222-58.us-east-2.compute.amazonaws.com:8080//api/public/";

  const [response, setResponse] = useState(null);
  const [key, setKey] = useState(null);
  const [redirectiveUrl, setRedirectiveUrl] = useState("");
  const [clientst, setClientSt] = useState("null");
  const [paymentIntentId, setPaymentIntentId] = useState();

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const res = await axios.get(config.apiurl + "cart/1/price"); // Replace with your API endpoint
        console.log("here i am");
        setResponse(res.data);
        // setClientSt(res.data.objects[0]);
      } catch (error) {
        console.error("Error fetching response:", error);
      }
    };
    fetchResponse();
  }, []);

  if (!response) {
    return <div>Loading...</div>;
  }

  //checkout functionality

  // useEffect(() => {
  // const stripe = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  const takeMeToCheckout = async () => {
    try {
      const res = await axios.post(config.apiurl + "testcheckout");
      // setRedirectiveUrl(res.data.message);
      console.log(res.data.message);
      // window.location.replace(res.data.message);
      window.open(res.data.message, "_blank", "width=5, height=30").focus();
    } catch (error) {
      console.error(error);
    }
  };
  //   takeMeToCheckout();
  // }, [key]);

  async function handleToken() {
    // console.log(token);
    // const res = await axios
    //   .post(config.apiurl + "create-checkout-session/" + 2000)
    //   .then((res) => {
    //     setRedirectiveUrl(res.data.message);
    //     console.log(res.data);
    //     alert("Payment Intent Success");
    //     window.location.replace(redirectiveUrl);
    //   })
    //   .catch((error) => {
    //     alert("Payment intent is not Success" + error);
    //   });

    const resp = await axios.post(
      config.apiurl + "create-checkout-session/" + 2000
    );
    if (resp.data.status === 200) {
      // const res = await axios.post(config.apiurl + "testcheckout");
      // setRedirectiveUrl(res.data.message);
      // console.log(resp.data.message);
      // window.location.replace({ redirectiveUrl });
      // setKey(resp.data.message);
    }

    // takeMeToCheckout();
    takeMeToCheckout();
  }

  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2>Checkout</h2>
        <p className="lead"></p>
      </div>
      <div className="row">
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Billing address</h4>
          <form className="needs-validation" noValidate>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                  required
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  required
                />
                <div className="invalid-feedback" style={{ width: "100%" }}>
                  Your username is required.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email">
                Email <span className="text-muted">(Optional)</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="1234 Main St"
                required
              />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address2">
                Address 2 <span className="text-muted">(Optional)</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="address2"
                placeholder="Apartment or suite"
              />
            </div>

            <div className="row">
              <div className="col-md-5 mb-3">
                <label htmlFor="country">Country</label>
                <select
                  className="custom-select d-block w-100"
                  id="country"
                  required
                >
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                {/* AdvanceYour1tCareer */}
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="state">State</label>
                <select
                  className="custom-select d-block w-100"
                  id="state"
                  required
                >
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="zip">Zip</label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">Zip code required.</div>
              </div>
            </div>
            {/* <hr className="mb-4" /> */}
            {/*<div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="same-address"
              />
              <label className="custom-control-label" htmlFor="same-address">
                Shipping address is the same as my billing address
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="save-info"
              />
              <label className="custom-control-label" htmlFor="save-info">
                Save this information for next time
              </label>
            </div>
            <hr className="mb-4" />

            <h4 className="mb-3">Payment</h4>

             <div className="d-block my-3">
              <div className="custom-control custom-radio">

                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                />
                <label className="custom-control-label" htmlFor="credit">
                  Credit card
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                />
                <label className="custom-control-label" htmlFor="debit">
                  Debit card
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="custom-control-input"
                  required
                />
                <label className="custom-control-label" htmlFor="paypal">
                  PayPal
                </label>
              </div>
            </div> */}
            {/* <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-name">Name on card</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  placeholder=""
                  required
                />
                <small className="text-muted">
                  Full name as displayed on card
                </small>
                <div className="invalid-feedback">Name on card is required</div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-number">Credit card number</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>
            </div> */}
            {/* <div className="row">
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-expiration">Expiration</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">Expiration date required</div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="cc-cvv">CVV</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">Security code required</div>
              </div>
            </div> */}
            <button
              className="btn btn-success btn-lg btn-block"
              onClick={takeMeToCheckout}
            >
              pay now
            </button>
            {/* <hr className="mb-4" /> */}
            {/* <button
              className="btn btn-success btn-lg btn-block"
              type="submit"
              // onClick={handleCheckout}
              onClick={handleToken}
            >
              Continue to checkout
            </button> */}

            {/* <a href={redirectiveUrl}> */}
          </form>
        </div>
        {/* a
        b
        c
        d
        e 
        <Stripe
              stripeKey="pk_test_51NAaUkDSt0sogWbNYIRRizLO1ICvTWi7oEuq297IOtYozNfP25EtnnuC0dB75iUzS0OGmjpAYlu2ZaMxOYHHCCvQ00xC9CMG5u"
              token={handleToken}
              name="Test User"
            />*/}

        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">{response.objects[0].courseName}</h6>
                <small className="text-muted">
                  {response.objects[0].courseDesc}
                </small>
              </div>
              <span className="text-muted">
                ${response.objects[0].coursePrice}
              </span>
            </li>
            {/* <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Second product</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Third item</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span className="text-success">-$5</span>
            </li> */}
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>${response.objects[0].coursePrice}</strong>
            </li>
          </ul>

          <form className="card p-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Promo code"
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">
                  Redeem
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
