import React, { useEffect, useState } from "react";
import "../logoSliders.css";

import logo1 from "../images/logos/Cognizant-qc4ulxohimtlp7eqwx4folnxik8e9ryxxb4bj7n7bw.png";
import logo2 from "../images/logos/infosys-logo-qc4y1jgg8c10f7v75ckakes1on00gwo8x3gxf4dh3w.png";
import logo3 from "../images/logos/Accenture-logo-qc4v9ctpt0vszfe15jksb6wed6sn29y658av0ex2ak.png";
import logo4 from "../images/logos/Synosos-health-qc4vgwh2o57o6qfg3azytscm1jlpuswliku6pdqacc.png";
import logo5 from "../images/logos//Capital-one-qc4xk6drzi9byj35jcde0aiinekxa6qqv5n1a44a1o.png";
import logo6 from "../images/logos//J.P-qc4x0ety9x79tpspyast2s2kyq02fb9xtbsgznfavw.png";
// import logo7 from "../images/logos//Cognizant-qc4ulxohimtlp7eqwx4folnxik8e9ryxxb4bj7n7bw.png";
import logo8 from "../images/logos//Cenetne-qc4wtyntdudg615ym0fygwnq8jsem2o8lenjgazjks.png";
import logo9 from "../images/logos//Aetna-qc4wpiv940apcbm2j3ddp0zd91o09j1vbfqzv9kgyk.png";
import logo10 from "../images/logos//Cvs-health-logo-qc4wif75h2kpmdxg00uuuthzo8o63uuvoaaxc03jz0.png";
import logo11 from "../images/logos//Independe-blue-cross-logo-qc4wb9ndggs598bjrxj2vmhownxlisgfcvjvu6pfbw.png";
import logo12 from "../images/logos//Fivserv-logo-qc4vv7kmpcssx1n8jhnis6d7kp2v0xpi5ec9p0ijmk.png";
import logo13 from "../images/logos//state-of-ny-logo-qc4w48sse160i4itse8fqwap40jv07kmq429qr4bto.png";

function LogoSwipe() {
  const imagees = [logo1, logo2, logo3, logo4, logo5, logo6];
  const logos = [logo8, logo9, logo10, logo11, logo12, logo13];
  const [currentLogo, setCurrentLogo] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next logo (or back to the first one if it's the last)
      setCurrentImage((currentImage + 1) % imagees.length);
    }, 1000); // Change logo every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentImage, imagees.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next logo (or back to the first one if it's the last)
      setCurrentLogo((currentLogo + 1) % logos.length);
    }, 1500); // Change logo every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentLogo, logos.length]);

  return (
    <div>
      <br />
      <div className="logo-slider">
        {imagees.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className={`logo ${index === currentImage ? "active" : ""}`}
          />
        ))}
      </div>
      <br />
      <div className="logo-slider">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className={`logo ${index === currentLogo ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );

  /*<div className="e-con-inner">
      <div
        className="elementor-element elementor-element-417a952 exad-sticky-section-no exad-glass-effect-no elementor-widget elementor-widget-heading"
        data-id="417a952"
        data-element_type="widget"
        data-widget_type="heading.default"
      >
        <div className="elementor-widget-container">
          <h2 className="elementor-heading-title elementor-size-default text-center">
            Our Learners Work at Global Companies & Startups
          </h2>
        </div>
      </div>
      <div
      // className="elementor-element elementor-element-4f43375 elementor-widget-mobile__width-initial exad-sticky-section-no exad-glass-effect-no elementor-widget elementor-widget-image-carousel e-widget-swiper"
      // data-id="4f43375"
      // data-element_type="widget"
      // data-settings='{ "slides_to_show": "12", "navigation": "none", "autoplay_speed": 2000, "speed": 2000, "autoplay": "yes", "pause_on_hover": "yes", "pause_on_interaction": "yes", "infinite": "yes" }'
      // data-widget_type="image-carousel.default"
      // aria-roledescription="carousel"
      // aria-label="Carousel | Horizontal scrolling: Arrow Left & Right"
      >
         <div className="elementor-widget-container">
          <style></style>
          <Container>
            <Row>
              <Col>
                <Carousel 
                // slidesToShow={12}
                // controls={true}
                // autoplay={true}
                // pauseOnHover={true}
                // pauseOnInteraction={true}
                // infinite={true}
                // speed={2000}
                // autoplaySpeed={2000}
                // >
                <img
                  src="https://techagility.co/wp-content/uploads/elementor/thumbs/Cognizant-qc4ulxohimtlp7eqwx4folnxik8e9ryxxb4bj7n7bw.png"
                  alt="Cognizant"
                />
                <img
                  src="https://techagility.co/wp-content/uploads/elementor/thumbs/infosys-logo-qc4y1jgg8c10f7v75ckakes1on00gwo8x3gxf4dh3w.png"
                  alt="Infosys"
                />
                <img
                  src="https://techagility.co/wp-content/uploads/elementor/thumbs/Accenture-logo-qc4v9ctpt0vszfe15jksb6wed6sn29y658av0ex2ak.png"
                  alt="Accenture"
                />
                <img
                  src="https://techagility.co/wp-content/uploads/elementor/thumbs/Synosos-health-qc4vgwh2o57o6qfg3azytscm1jlpuswliku6pdqacc.png"
                  alt="Synosos Health"
                />
                <img
                  src="https://techagility.co/wp-content/uploads/elementor/thumbs/Fivserv-logo-qc4vv7kmpcssx1n8jhnis6d7kp2v0xpi5ec9p0ijmk.png"
                  alt="Fivserv"
                />
                <img
                  src="https://techagility.co/wp-content/uploads/elementor/thumbs/state-of-ny-logo-qc4w48sse160i4itse8fqwap40jv07kmq429qr4bto.png"
                  alt="State of NY"
                />
                <img
                  src="https://techagility.co/wp-content/uploads/elementor/thumbs/Independe-blue-cross-logo-qc4wb9ndggs598bjrxj2vmhownxlisgfcvjvu6pfbw.png"
                  alt="Independent Blue Cross"
                />
                <img
                  src="https://techagility.co/wp-content/uploads/elementor/thumbs/Cvs-health-logo-qc4wif75h2kpmdxg00uuuthzo8o63uuvoaaxc03jz0.png"
                  alt="CVS Health"
                />
                <img
                  src="https://techagility.co/wp-content/uploads/elementor/thumbs/Aetna-qc4wpiv940apcbm2j3ddp0zd91o09j1vbfqzv9kgyk.png"
                  alt="Aetna"
                />
                <img
                  src="https://techagility.co/wp-content/uploads/elementor/thumbs/Cenetne-qc4wtyntdudg615ym0fygwnq8jsem2o8lenjgazjks.png"
                  alt="Cenetne"
                />
                <img
                  src="https://techagility.co/wp-content/uploads/elementor/thumbs/J.P-qc4x0ety9x79tpspyast2s2kyq02fb9xtbsgznfavw.png"
                  alt="J.P"
                />
                <img
                  src="https://techagility.co/wp-content/uploads/elementor/thumbs/Capital-one-qc4xk6drzi9byj35jcde0aiinekxa6qqv5n1a44a1o.png"
                  alt="Capital One"
                />
                <img
                    src="https://techagility.co/wp-content/uploads/elementor/thumbs/Gainwell-qc4xnzm7pbh71ljt9zox4bvtdnsihz1sm52acrs9vw.png"
                    alt="Gainwell"
                  />
                  <img
                    src="https://techagility.co/wp-content/uploads/elementor/thumbs/Cloverhealth-qc4yfmgxvvl4lz8j1br2esapf5th4f8dm7jraazkto.png"
                    alt="Clover Health"
                  />
                 </Carousel>
              </Col>
            </Row>
          </Container> 
        </div>
      </div>
    </div>*/
}

export default LogoSwipe;
