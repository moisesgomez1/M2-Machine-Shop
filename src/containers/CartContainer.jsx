import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../components/Cart.jsx';

const CartContainer = () => {
  const cartState = useSelector(state => state.cart.theCart);
  const itemsinCart = useSelector(state => state.cart.itemsinCart);

  console.log('state from the cart useSelector', cartState);
  console.log('testing the structure of the array objects', cartState[0]);

  // const cartItems = cartState[0].map((items, index) => {
  //   return <Cart key={index} product={items.product}/>;
  // });

  // eslint-disable-next-line multiline-ternary
  const cartItems = cartState[0] ? (
    cartState[0].map((item, index) => (
      <Cart key={index} product={item.product} />
    ))
  ) : (
    []
  );

  return (
    <div className='itemCounter'>
      {itemsinCart}
      <div className='CartContainer'>
        <div className='productContainer'>
          {cartItems}
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
