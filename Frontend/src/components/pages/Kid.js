import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Kid = () => {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: 'Floral Dress',
      price: '250',
      description: 'Dainty Floral Dress ',
    },
    {
      id: 2,
      name: 'Red Frock',
      price: '400',
      description: 'Red Frock with White dots',
    },
    {
      id: 3,
      name: 'Summer Sute',
      price: '300',
      description: 'White Summer Sute for baby girl',
    },
    {
      id: 4,
      name: 'Anarkali',
      price: '500',
      description: 'Pink Anarkali with Yello Pants',
    },
    {
      id: 5,
      name: 'Silk Dress',
      price: '200',
      description: 'Yellow Silk Frock ',
    },
    {
      id: 6,
      name: 'Dobby Dress',
      price: '300',
      description: 'White Dobby Dress ',
    },
    {
      id: 7,
      name: 'Top with Skirt',
      price: '499',
      description: 'White Top with Pink Skirt',
    },
    {
      id: 8,
      name: 'Tshirt',
      price: '300',
      description: 'White Tshirt with Pink shorts ',
    },
    // Add more product objects as needed
  ];

  // Define image paths after products array
  products.forEach((product) => {
    product.image = require(`/public/images/kid/${product.name}.jpg`);
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
    
    <div className="Kid-container">
    <body>
          <div class="header">
            <h2 class="section-title">Kid's Products</h2>
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
    </div>
    </>
  );
};

export default Kid;
