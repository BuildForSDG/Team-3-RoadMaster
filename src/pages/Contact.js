import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/Contact/ContactForm";
import ContactAddress from "../components/Contact/ContactAddress";
import ContactMap from "../components/Contact/ContactMap";

const Contact = () => {
  return (
    <>
      <Header />
      <ContactMap />
      <footer className="footer" id="contact">
        <div className="container">
          <div className="row">
            <ContactForm />
            <ContactAddress />
          </div>
        </div>
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
