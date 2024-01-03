// Product.js
import React from 'react';

const Product = ({ product, onAddToCart }) => {
  const { id, name, price } = product;

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product">
    <h1>{id}</h1>
      <h3>{name}</h3>
      <p>{price} RS</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
