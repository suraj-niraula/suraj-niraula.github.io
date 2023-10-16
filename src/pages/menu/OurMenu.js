import React from "react";
import "./OurMenu.css";
import { Link } from "react-router-dom";

const OurMenu = () => {
  return (
    <div className="our-menu">
      <section className="top-banner">
        <h1>Our Menu</h1>
        <p>
          <Link to={`/home`}>Home</Link> / Our Menu
        </p>
      </section>
      <section className="our-menu-section">
        <div className="menu-container">
          <div className="title-box">
            <div className="sub-title">CHOOSE AND TRY</div>
            <h2 className="main-title">Discover Menu</h2>
          </div>
          <div className="menu-row">
            <div className="menu">
              <div className="menu-items">
                <h4>Creamy Pesto with Chicken</h4>
                <p>Savory chicken in rich, creamy pesto</p>
              </div>
              <div className="price">$36.00</div>
            </div>
            <div className="menu">
              <div className="menu-items">
                <h4>Eggs Benedict</h4>
                <p>Perfectly Poached Bliss</p>
              </div>
              <div className="price">$19.00</div>
            </div>
            <div className="menu">
              <div className="menu-items">
                <h4>Grilled Salmon with Lemon Butter</h4>
                <p>Grilled Salmon in Zesty Lemon Butter</p>
              </div>
              <div className="price">$13.00</div>
            </div>
            <div className="menu">
              <div className="menu-items">
                <h4>Shrimp and Lobster Paella</h4>
                <p>Succulent shrimp and tender lobster</p>
              </div>
              <div className="price">$25.00</div>
            </div>
            <div className="menu">
              <div className="menu-items">
                <h4>Mint-Crusted Roast Lamb</h4>
                <p>Tender, Herb-Infused Delight</p>
              </div>
              <div className="price">$19.00</div>
            </div>
            <div className="menu">
              <div className="menu-items">
                <h4>Fettuccine Alfredo</h4>
                <p>Creamy Italian Pasta Delight</p>
              </div>
              <div className="price">$20.00</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMenu;
