import React from "react";

const ContactAddress = () => {
  return (
    <div className="col-lg-6">
      <div className="contact-address">
        <h4>Address</h4>
        <p>
          Andela - Lagos Office, EPIC tower, 232 Ikorodu RD, Ilupeju, Lagos.{" "}
          <br />
          <br />
          <span className="text-info">You can also reach us on:</span>
        </p>
        <ul>
          <li>
            <div className="contact-address-icon">
              <i className="icofont icofont-headphone-alt"></i>
            </div>
            <div className="contact-address-info">
              <a href="callto:#">+234 8012 435 941</a>
              <a href="callto:#">+234 9041 800 937</a>
            </div>
          </li>
          <li>
            <div className="contact-address-icon">
              <i className="icofont icofont-envelope"></i>
            </div>
            <div className="contact-address-info">
              <a href="mailto:#">team-003gmail.com</a>
            </div>
          </li>
          <li>
            <div className="contact-address-icon">
              <i className="fa fa-github"></i>
            </div>
            <div className="contact-address-info">
              <a href="#s">www.github.com/buildforSDG-003.com</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactAddress;
