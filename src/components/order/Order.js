import React from 'react';

const Order = () => {
  // You can use the 'product' prop to display details of the ordered product
  const placeOrder = (product)=>{
    console.log(product);
  }
  return (
    <div className="order" style={{ marginTop: '200px' }}>
      <h2>Order Summary</h2>

      <p>Product:</p>
      <p>Price: </p>
      {/* Add more order details as needed */}
    </div>
  );
};

export default Order;
