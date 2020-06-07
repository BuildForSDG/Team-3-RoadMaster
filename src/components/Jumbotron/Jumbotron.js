import React from "react";
import { Link } from "react-router-dom";
import handMockUp from "../../assets/img/hand-mockup.png";

const Jumbotron = () => {
  return (
    <section className="hero-area" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="hero-area-content">
              <h1>Road Safety is our utmost priority</h1>
              <p>
                RoadMaster helps safety and security personnels respond swiftly
                to unplanned events; accidents, crashes, explosions, etc. It
                also suggests alternative routes to avoid unnessecary traffic
                caused during these disasters. RoadMaster is safe and easy to
                use. <br />
                <br />
                Available on andriod and IOS devices.
              </p>

              <Link to="/" className="appao-btn">
                <i className="icofont icofont-brand-android-robot"> </i>
                Google Play
              </Link>
              <Link to="/" className="appao-btn">
                <i className="icofont icofont-brand-apple"> </i>
                App Store
              </Link>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hand-mockup text-lg-left text-center">
              <img src={handMockUp} alt="Hand Mockup" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
