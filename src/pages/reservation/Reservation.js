import React, { useState } from "react";
import "./Reservation.css";
import reservation from "../home/images/reservation.webp";
import image1 from "../home/images/icon-1.png";
import image2 from "../home/images/icon-2.png";
import image3 from "../home/images/icon-3.png";
import image4 from "../home/images/icon-4.png";
import { Link } from "react-router-dom";

const Reservation = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });

  const sendForm = () => {
    console.log(info.name, info.email, info.phone, info.date);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInfo({ ...info, [name]: value });
  };
  return (
    <div className="reservation-page">
      <section className="top-banner">
        <h1>Reservation</h1>
        <p>
          <Link to={`/home`}>Home</Link> / Reservation
        </p>
      </section>
      <section className="features-section1">
        <div className="feature-block">
          <div className="icon">
            <img src={image1} alt="" />
          </div>
          <h4>Professional Chefs</h4>
          <p>Crafting Flavors with Expertise, Elevating Every Plate.</p>
        </div>
        <div className="feature-block">
          <div className="icon">
            <img src={image2} alt="" />
          </div>
          <h4>Fresh Food</h4>
          <p>Flavorful Fresh Food for Your Health and Happiness.</p>
        </div>
        <div className="feature-block">
          <div className="icon">
            <img src={image3} alt="" />
          </div>
          <h4>Delicious Coffee</h4>
          <p>Savoring Life, One Cup of Rich, Delicious Coffee.</p>
        </div>
        <div className="feature-block">
          <div className="icon">
            <img src={image4} alt="" />
          </div>
          <h4>Fusion Cuisine</h4>
          <p>Experience Unique Flavors in Our Inspired Fusion Cuisine.</p>
        </div>
      </section>
      <section className="reservation">
        <div className="left-part">
          <div className="img-reservation">
            <img src={reservation} alt="" />
          </div>
        </div>
        <disv className="right-part">
          <div className="sub-title">Make A Reservation</div>
          <h2 className="sec-title">Reserve a Table</h2>
          <div className="reservation-form">
            <form>
              <input
                placeholder="Your Name"
                type="text"
                id="name"
                name="name"
                required
                value={info.name}
                onChange={handleChange}
              />
              <br />
              <br />

              <input
                placeholder="Email Address"
                type="email"
                id="email"
                name="email"
                required
                value={info.email}
                onChange={handleChange}
              />
              <br />
              <br />

              <input
                placeholder="Phone Number"
                type="tel"
                id="phone"
                name="phone"
                required
                value={info.phone}
                onChange={handleChange}
              />
              <br />
              <br />

              <input
                type="date"
                id="date"
                name="date"
                required
                value={info.date}
                onChange={handleChange}
              />
              <br />
              <br />
              <button
                type="submit"
                className="reservation-button"
                onClick={sendForm}
              >
                Reservation
              </button>
            </form>
          </div>
        </disv>
      </section>
    </div>
  );
};

export default Reservation;
