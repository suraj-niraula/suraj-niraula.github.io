import { React, useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  }

  function submitForm() {
    console.log(info);
    console.log(
      ` Name: ${info.name} \n Email: ${info.email} \n Phone: ${info.phone} \n Subject: ${info.subject} \n Message: ${info.message}`
    );
  }

  return (
    <div className="contact-page">
      <section className="top-banner">
        <h1>Contact Us</h1>
        <p>
          <Link to={`/home`}>Home</Link> / Contact Us
        </p>
      </section>
      <section className="main-info">
        <div className="info-left">
          <div className="info-title">Opening Hours</div>
          <ul>
            <li>MON-FRI: 9 AM - 6 PM</li>
            <li>SATURDAY: 9 AM - 6 PM</li>
            <li>SUNDAY: Closed</li>
          </ul>
          <div></div>
        </div>
        <div className="right-part">
          <div className="info-title">Feel free to reach out</div>
          <form className="contact-form">
            <input
              placeholder="Your Name *"
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              required
            ></input>
            <input
              placeholder="Your Email *"
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
            ></input>
            <input
              placeholder="Your Phone"
              type="tel"
              id="phone"
              name="phone"
              onChange={handleChange}
            ></input>
            <input
              placeholder="Subject"
              type="text"
              id="subject"
              name="subject"
              onChange={handleChange}
              required
            ></input>
          </form>
          <div class="input-message">
            <input
              placeholder="Your Message..."
              type="text"
              id="message"
              name="message"
              onChange={handleChange}
              required
            ></input>
          </div>

          <button type="submit" className="explore-button" onClick={submitForm}>
            Submit Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
