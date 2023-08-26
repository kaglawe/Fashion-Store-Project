import React, { useState } from 'react';
import './Women.css'
import { useNavigate } from 'react-router-dom';

const Women = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: 'Kurti',
      price: '300',
      description: 'yellow color Kurti ',
    },
    {
      id: 2,
      name: 'White Kurti',
      price: '500',
      description: 'White Kurti',
    },
    {
      id: 3,
      name: 'Blue Lehenga',
      price: '1499',
      description: 'Navy blue lehenga in cotton material embellished with Printed Flowers work. ',
    },
    {
      id: 4,
      name: 'Yellow Dress',
      price: '799',
      description: ' Yellow Cord set ',
    },
    {
      id: 5,
      name: 'Elegant Kurti',
      price: '750',
      description: 'Purple Kurti with white Plazo ',
    },
    {
      id: 6,
      name: 'Lined T-shirt',
      price: '250',
      description: 'This is a description of Product Lined T-shirt in white & orange color',
    },
    {
      id: 7,
      name: 'Indian kurti',
      price: '1200',
      description: 'This is a description of Product Indian kurti set in red, orange color',
    },
    {
      id: 8,
      name: 'T-shirt',
      price: '450',
      description: 'Sleeve less T-shirt  ',
    },
    
  ];

  // Define image paths after products array
  products.forEach((product) => {
    product.image = require(`/public/images/women/${product.name}.jpg`);
    
  });

  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSizes((prevSelectedSizes) => ({
      ...prevSelectedSizes,
      [productId]: size,
    }));
  };

  

  return (
    <>

      <div className="women-container">
      
        <body>
          <div class="header">
            <h2 class="section-title">Women's Products</h2>
          </div>
        </body>
        <br></br>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <p>{product.description}</p> {/* Display product description */}
              <div className="size-dropdown">
                <label htmlFor={`size-${product.id}`}>Select Size:</label>
                <select
                  id={`size-${product.id}`}
                  value={selectedSizes[product.id] || ''}
                  onChange={(e) => handleSizeChange(product.id, e.target.value)}
                >
                  <option value="">Select Size</option>
                  <option value="XL">XL</option>
                  <option value="L">L</option>
                  <option value="M">M</option>
                  <option value="S">S</option>
                </select>
              </div>
              <div className="button-group">
                <button className="cart-button"onClick={() => navigate("/wishlist")} >Wishlist</button>
              </div>
            </div>
          ))}
        </div>
        <style>
            

        </style>
      </div>
    </>
  );
};



export default Women;
