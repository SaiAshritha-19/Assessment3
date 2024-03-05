import React from 'react';

function Product({ product }) {
  return (
    <div className="product">
      <img src={product.url} alt="product" style={{ width: '300px', height: '200px' }} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <div className="button-container">
        <button>LIKE</button>
        <button>SHARE</button>
        <button>PURCHASE</button>
      </div>
    </div>
  );
}

export default Product;
