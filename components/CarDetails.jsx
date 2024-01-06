import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../thunks/thunks';

const CarDetails = ({ onClickStateHandler, setAdded, added, listing }) => {

  const cart_id = useSelector(state => state.cart.cartId);
  console.log ('cart ID from redux store', cart_id)
  const dispatch = useDispatch();
  const onClickEventHandler = () => {
    onClickStateHandler(setAdded);
    dispatch(addItemToCart(listing._id));
  };

  // on click dispatch item to cart with id as param.
  return (<div className='details-box'>
    <ul className='car-details-list'>
      <li>{listing.name}</li>
      <li className='price'>Price: {listing.price}</li>
      <li>Color: {listing.color}</li>
      <li>Make: {listing.make}</li>
      <li>Model: {listing.model}</li>
      <li>Year: {listing.year}</li>
    </ul>
    <button onClick={() => onClickEventHandler()}>{added}</button>
  </div>);
};

export default CarDetails;
