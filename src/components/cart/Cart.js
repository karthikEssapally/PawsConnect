import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import "./Cart.css";
import { loginContext } from "../../contexts/loginContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  useEffect(() => {
    const loadRazorpayScript = async () => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        console.log('Razorpay script loaded');
      };
    };

    loadRazorpayScript();
  }, []); 
  const [currentUser, error, userLoginStatus, loginUser, logoutUser] = useContext(loginContext);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/user-api/cart/${currentUser.username}`);
        const { data } = response;
        if (data.message === 'found') {
          setCartItems(data.payload.carts);
        } else {
          // Handle the case where no cart data is found
          setCartItems(["cart"]);
        }
      } catch (error) {
        // Handle the error if needed
        console.log(error);
      }
    };

    fetchCartData();
  }, [currentUser.username]); // Include currentUser.username as a dependency to re-fetch on username change

  const closeCart = () => {
    // Implement the logic to close the cart, this could be setting a state, etc.
    navigate("/products", { replace: true }); 
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Cart products</h2>
        <button className="close-cart-button" onClick={closeCart}>
          Close Cart
        </button>
      </div>
      {cartItems?.length > 0 ? (
  <ul>
    {cartItems.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
    <button onClick={()=>{}}>BUY NOW</button>
  </ul>
) : (
  <p>No items in the cart.</p>
)}

    </div>
  );
}

export default Cart;
