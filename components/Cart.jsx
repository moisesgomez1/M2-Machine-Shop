import React from 'react';

const Cart = ({ product }) => {
  return (
    <div className="cartItem">
      <img src={`http://localhost:3000/${product.image}`} className='cartCarImage'></img>
      <ul>
        <li className='productName'>{product.name}</li>
        <li>{product.price}</li>
        <li>{product.color}</li>
        <li>{product.year}</li>
        <li>{product.make}</li>
        <li>{product.model}</li>

      </ul>

    </div>
  );
};

export default Cart;
