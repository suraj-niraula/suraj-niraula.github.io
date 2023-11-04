import React, { useState } from "react";
import "./Home.css";
import image1 from "./images/icon-1.png";
import image2 from "./images/icon-2.png";
import image3 from "./images/icon-3.png";
import image4 from "./images/icon-4.png";
import aboutUs from "./images/aboutUs.png";
import reservation from "./images/reservation.webp";
import dish1 from "./images/Eggs Benedict on asparagus with bacon and hollandaise sauce.png";

const Home = ({ addToCart }) => {
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

  // Call the addToCart function to update the cart count
  const handleAddToCart = () => {
    const itemPrice = 19.0;
    const itemQuantity = 1;

    addToCart(itemQuantity, itemPrice);
  };

  return (
    <div>
      <section className="main-home">
        <div className="main-outline">
          <h1>
            Coffee, People, & <br />
            Lifestyle !
          </h1>
          <p>Serving the best coffee since 1997</p>
          <button className="explore-button">Explore Now</button>
        </div>
      </section>

      {/* <!-- features-section start --> */}
      <section className="features-section">
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
      {/* <!-- features-section end --> */}

      {/* <!-- about us section start --> */}
      <section className="about-us" id="about-us">
        <div className="left-part">
          <div className="img-one">
            <img className="image1" src={aboutUs} alt="" />
          </div>
        </div>
        <div className="right-part">
          <div className="sub-title">About us</div>
          <h2 className="sec-title">
            Welcome To Coffee <br />
            World & Restaurant
          </h2>
          <p>
            Discover the aroma and taste of our carefully crafted coffee blends.
            Immerse yourself in the cozy ambiance of our restaurant as you savor
            every sip and bite.
          </p>
          <ul>
            <li>MON-FRI: 9 AM - 6 PM</li>
            <li>SATURDAY: 9 AM - 6 PM</li>
            <li>SUNDAY: Closed</li>
          </ul>
          <button className="explore-button">Discover More</button>
        </div>
      </section>
      {/* <!-- about-us-section end --> */}

      {/* <!-- our-menu-section start--> */}
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
      {/* <!-- our-menu-section-end --> */}

      {/* <!-- online-orders-section start --> */}
      <section className="online-order">
        <div class="image-mask"></div>
        <div className="online-order-content">
          <h2>
            Online Orders Are <br />
            Available.
          </h2>
          <p>Order Online and Satisfy Your Cravings!</p>
          <button className="explore-button">Order Now</button>
        </div>
      </section>

      {/* <!-- online-orders-section end --> */}

      {/* <!-- popular-dishes-start --> */}
      <section className="popular-dishes">
        <div className="dishes-container">
          <div className="title-box">
            <div className="sub-title">Special Food</div>
            <h2 className="main-title">Our Exclusive Dishes</h2>
          </div>
          <div className="dishes-row">
            <div className="dishes-block">
              <div className="inner-box">
                <div className="image">
                  <img width="312" height="246" src={dish1} alt="" />
                </div>
                <h4>Eggs Benedict with Asparagus</h4>
                <div className="price">$19.00</div>
                <div className="text">
                  Consectur dolor sit amet consectur adipiscing.
                </div>
                <button onClick={handleAddToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="dishes-block">
              <div className="inner-box">
                <div className="image">
                  <img width="312" height="246" src={dish1} alt="" />
                </div>
                <h4>Eggs Benedict with Asparagus</h4>
                <div className="price">$19.00</div>
                <div className="text">
                  Consectur dolor sit amet consectur adipiscing.
                </div>
                <button onClick={handleAddToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="dishes-block">
              <div className="inner-box">
                <div className="image">
                  <img width="312" height="246" src={dish1} alt="" />
                </div>
                <h4>Eggs Benedict with Asparagus</h4>
                <div className="price">$19.00</div>
                <div className="text">
                  Consectur dolor sit amet consectur adipiscing.
                </div>
                <button onClick={handleAddToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="dishes-block">
              <div className="inner-box">
                <div className="image">
                  <img width="312" height="246" src={dish1} alt="" />
                </div>
                <h4>Eggs Benedict with Asparagus</h4>
                <div className="price">$19.00</div>
                <div className="text">
                  Consectur dolor sit amet consectur adipiscing.
                </div>
                <button onClick={handleAddToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="dishes-block">
              <div className="inner-box">
                <div className="image">
                  <img width="312" height="246" src={dish1} alt="" />
                </div>
                <h4>Eggs Benedict with Asparagus</h4>
                <div className="price">$19.00</div>
                <div className="text">
                  Consectur dolor sit amet consectur adipiscing.
                </div>
                <button onClick={handleAddToCart}>Add to Cart</button>
              </div>
            </div>
            <div className="dishes-block">
              <div className="inner-box">
                <div className="image">
                  <img width="312" height="100" src={dish1} alt="" />
                </div>
                <h4>Eggs Benedict with Asparagus</h4>
                <div className="price">$19.00</div>
                <div className="text">
                  Consectur dolor sit amet consectur adipiscing.
                </div>
                <button onClick={handleAddToCart}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- popular-dishes-end --> */}

      {/* <!-- reservation-section-start --> */}
      <section className="reservation">
        <div className="left-part">
          <div className="img-reservation">
            <img src={reservation} alt="" />
          </div>
        </div>
        <div className="right-part">
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
        </div>
      </section>
      {/* <!-- reservation-section-end --> */}
    </div>
  );
};

export default Home;
