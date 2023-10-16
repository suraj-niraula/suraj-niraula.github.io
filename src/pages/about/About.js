import React from "react";
import "./About.css";
import image from "./image1.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <section className="top-banner">
        <h1>About Us</h1>
        <p>
          <Link to={`/home`}>Home</Link> / About Us
        </p>
      </section>
      <section className="history">
        <div className="img">
          <img className="image1" src={image} alt="" />
        </div>
        <div className="description">
          <h1>Serving Unparalleled Excellence Since 1997</h1>
          <p>
            Coffee, Culture, and Cuisine has proudly stood as a culinary
            institution, offering a delectable journey through our rich culinary
            heritage. Over more than two decades, we've continuously evolved to
            meet the changing needs of our cherished patrons. With a commitment
            to excellence that spans generations, we've recently expanded our
            presence online, making it easier than ever for you to enjoy our
            exceptional cuisine from the comfort of your own space. Explore our
            extensive menu, from timeless classics to our newest creations, and
            discover the perfect balance of flavors that has made us a trusted
            name in the world of cuisine.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
