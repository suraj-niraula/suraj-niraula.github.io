import React from "react";
import "./Footer.css";
import logo from "../navbar/main-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section class="contact" id="contact-us">
      <div class="contact-info">
        <div class="basic-info">
          {/* <h5>CONTACT INFO</h5> */}
          <Link to={`/home`}>
            {" "}
            <img class="logo" src={logo} alt="logo" />
          </Link>

          <p>
            84 Noalimba Avenue <br />
            Hanging Rock, New South Wales 2340
          </p>
          <p>(02) 6794 1187</p>
          <p>someone@gmail.com</p>
        </div>
        <div class="support">
          <h5>SUPPORT</h5>
          <a href="#">
            <p>Contact Us</p>
          </a>
          <a href="#">
            <p>Payment Options</p>
          </a>
          <a href="#">
            <p>Onlie Order</p>
          </a>
          <a href="#">
            <p>FAQs</p>
          </a>
        </div>

        <div class="information">
          <h5>INFORMATION</h5>
          <a href="#">
            <p>About Us</p>
          </a>
          <a href="#">
            <p>Careers</p>
          </a>
          <a href="#">
            <p>Privacy & Security</p>
          </a>
          <a href="#">
            <p>Reservations</p>
          </a>
        </div>
        <div class="subscribe">
          <h5>FOLLOW US</h5>
          <div class="social-icons">
            <a href="">
              {" "}
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="">
              {" "}
              <i class="bx bxl-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <footer class="end">
        <p>
          &#169;2023 Coffee World | All rights reserved. Designed by Suraj
          Niraula
        </p>
      </footer>
    </section>
  );
};

export default Footer;
