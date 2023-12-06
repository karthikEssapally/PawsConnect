// Order.js

import React from 'react';

const Order = ({ product }) => {
  // You can use the 'product' prop to display details of the ordered product

  return (
    <div className="order">
      <h2>Order Summary</h2>
      <p>Product:</p>
      <p>Price: </p>
      {/* Add more order details as needed */}
    </div>
  );
};

export default Order;
