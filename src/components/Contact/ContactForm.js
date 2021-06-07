import React, { useState } from "react";

const ContactForm = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");
  let [message, setMessage] = useState("");
  let [error, setError] = useState("");
  let [msg, setMsg] = useState("");

  const submitQuery = (event) => {
    event.preventDefault();
    if (message.length < 15) {
      setError('*Message Too Short!')
    }
    if (subject.length < 5) {
      setError('*Subject Too Short!')
    }
    setMsg('Message Sent')
  };
  return (
    <div className="col-lg-6">
      <div className="contact-form">
        <h4>Get in Touch</h4>
        <form id="contact-form" action="#" method="POST" onSubmit={submitQuery}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            required
            placeholder="Enter Your Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            required
            placeholder="Enter Your Email"
          />
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            name="subject"
            required
            placeholder="Your Subject"
          />
          <textarea
            placeholder="Message"
            required
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <p data-testid='error' className='text-danger font-weight-bold'>{error}</p>
          <p data-testid='msg' className='text-success'>{msg}</p>
          <button type="submit" name="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
