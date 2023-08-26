import React from 'react'
import { NavLink } from 'react-router-dom'

const Product = (curElem) => {

    const {productId,productName,image,price,categeory} = curElem;

  return (
  <NavLink to={`/singleproduct/${productId}`}>
    <div className="card">
        <figure>
            <img src={image} alt={productName} />
            <figcaption className='caption'>{categeory}</figcaption>
        </figure>
        <div className="card-data">
            <div className="card-data-flex">
                <h3>{productName}</h3>
                <p className="card-data-price">{price}</p>
            </div>
        </div>
    </div>
  </NavLink>
  );
};

export default Product
