import React from "react";
import "./Navbar.css";
import logo from "./main-logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <header>
      {/* <!-- Logo --> */}
      <Link to={`/home`}>
        {" "}
        <img class="logo" src={logo} alt="logo" />
      </Link>
      {/* <!-- nav menu --> */}
      <ul class="nav-menu">
        <li>
          <Link to={`/home`}>Home</Link>
        </li>
        <li>
          <Link to={`/about`}>About Us</Link>
        </li>
        <li>
          <Link to={`/menu`}>Our Menu</Link>
        </li>
        <li>
          <Link to={`/reservation`}>Reservation</Link>
        </li>
        <li>
          <Link to={`/contact`}>Contact</Link>
        </li>
      </ul>
      <div class="nav-icons">
        <a href="#">
          <i class="bx bx-search"></i>
        </a>
        <a href="#">
          <i class="bx bx-user"></i>
        </a>
        <Link to="/cart">
          <div className="cart-icon">
            <i className="bx bx-cart"></i>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </Link>

        <div class="bx bx-menu" id="menu-icon"></div>
      </div>
    </header>
  );
};

export default Navbar;
