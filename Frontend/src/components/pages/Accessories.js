import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Accessories = () => {
    const navigate = useNavigate();
    const products = [
        {
            id: 1,
            name: 'Earing Tops',
            price: '100',
            description: 'Gold plated earing with diaonds ',
        },
        {
            id: 2,
            name: 'Ring',
            price: '200',
            description:'Goldden Ring' ,
        },
       
        {
            id: 3,
            name: 'Bangles',
            price: '200',
            description: 'Goldden Bangles  ',
        },
        {
            id: 4,
            name: 'Black Watch',
            price: '1250',
            description: 'Diamond Earing with Red Stone',
        },
        {
            id: 5,
            name: 'Stone Bangles',
            price: '400',
            description: 'Stone Bangles ',

           
        },
        {
            id: 6,
            name: 'Watch',
            price: '200',
            description: 'Titan Watch ',
        },
        {
            id: 7,
            name: 'Blue Tops',
            price: '400',
            description: 'Aesthetic Flower design ',

        },
        {
            id: 8,
            name: 'Ring set',
            price: '200',
            description: 'This is a description of Product 3. It is an elegant and high-quality clothing item.',
        },
        // Add more product objects as needed
    ];

    // Define image paths after products array
    products.forEach((product) => {
        product.image = require(`/public/images/Accessories/${product.name}.jpg`);
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
            <div className="Accessories-container">
                <body>
                    <div class="header">
                        <h2 class="section-title">Accessories</h2>
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

export default Accessories;
