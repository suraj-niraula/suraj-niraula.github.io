import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import OurMenu from "./pages/menu/OurMenu";
import Reservation from "./pages/reservation/Reservation";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import NotFound from "./pages/notFound/NotFound";
import Cart from "./pages/cart/Cart";

function App() {
  // State to track the cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (quantity, price) => {
    // Update the cartItems state with the quantity and price
    const newItem = { quantity, price };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path="/home" element={<Home addToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<OurMenu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cartItems={cartItems || []} />} />
        <Route element={<Home addToCart={addToCart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
