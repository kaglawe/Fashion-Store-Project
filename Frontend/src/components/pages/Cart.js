import React, { useState } from 'react';


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  

  const totalPrice = cartItems.reduce((total, product) => total + parseFloat(product.price.slice(1)), 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="place-order-button">Place Order</button>
      </div>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price">
        <p>Total: {totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;
