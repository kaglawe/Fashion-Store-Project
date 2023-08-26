import React, { useState } from 'react';

const Women = () => {
  const products = [
    {
      id: 1,
      name: 'Product1',
      price: '$19.99',
      description: 'This is a description of Product 1. It is a stylish and comfortable clothing item.gdsgg',
    },
    {
      id: 2,
      name: 'Product2',
      price: '$19.99',
      description: 'This is a description of Product 2. It is a versatile and trendy clothing item. hhddsgfsgff',
    },
    {
      id: 3,
      name: 'Product3',
      price: '$19.99',
      description: 'This is a description of Product 3. It is an elegant and high-quality clothing item.sgfsagsag',
    },
    {
      id: 4,
      name: 'Product4',
      price: '$19.99',
      description: 'This is a description of Product 3. It is an elegant and high-quality clothing item.sgasgswg',
    },
    {
      id: 5,
      name: 'Product1',
      price: '$19.99',
      description: 'This is a description of Product 1. It is a stylish and comfortable clothing item.fgfdgg',
    },
    {
      id: 6,
      name: 'Product2',
      price: '$19.99',
      description: 'This is a description of Product 2. It is a versatile and trendy clothing item. hhddsgfsgff',
    },
    {
      id: 7,
      name: 'Product3',
      price: '$19.99',
      description: 'This is a description of Product 3. It is an elegant and high-quality clothing item.sgffseaegf',
    },
    {
      id: 8,
      name: 'Product4',
      price: '$19.99',
      description: 'This is a description of Product 3. It is an elegant and high-quality clothing item.sgsgsdg',
    },
    // Add more product objects as needed
  ];

  // Define image paths after products array
  products.forEach((product) => {
    product.image = require(`./images/${product.name}.jpg`);
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
                <button className="buy-button">Buy</button>
                <button className="cart-button">Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Women;
