import React, { useState, useEffect } from "react";
import "./Cart.css";

const Cart = ({ cartItems }) => {
  const [updatedCartItems, setUpdatedCartItems] = useState([]);

  useEffect(() => {
    setUpdatedCartItems(
      cartItems.map((item) => ({
        ...item,
        totalPrice: item.quantity * item.price,
      }))
    );
  }, [cartItems]);

  const getTotalPrice = () => {
    return updatedCartItems.reduce((total, item) => total + item.totalPrice, 0);
  };

  const incrementQuantity = (index) => {
    const updatedItems = [...updatedCartItems];
    updatedItems[index].quantity += 1;
    updatedItems[index].totalPrice =
      updatedItems[index].quantity * updatedItems[index].price;
    setUpdatedCartItems(updatedItems);
  };

  const decrementQuantity = (index) => {
    const updatedItems = [...updatedCartItems];
    if (updatedItems[index].quantity > 0) {
      updatedItems[index].quantity -= 1;
      updatedItems[index].totalPrice =
        updatedItems[index].quantity * updatedItems[index].price;
      setUpdatedCartItems(updatedItems);
    }
  };

  const deleteItem = (index) => {
    const updatedItems = [...updatedCartItems];
    updatedItems.splice(index, 1); // Remove the item from the array
    setUpdatedCartItems(updatedItems);
  };

  return (
    <div className="cart-container">
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {updatedCartItems.map((item, index) => (
            <li key={index}>
              <div className="cart-item">
                <div className="item-info">
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price ? item.price.toFixed(2) : "N/A"}</p>
                  <div className="add-delete-button">
                    <button onClick={() => incrementQuantity(index)}>+</button>
                    <button onClick={() => decrementQuantity(index)}>-</button>
                    <button onClick={() => deleteItem(index)}>Remove</button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="total">
          <p>Total Price: ${getTotalPrice().toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
