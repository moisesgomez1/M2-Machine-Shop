import React from 'react';

const CarDetails = ({ onClickEventHandler, setAdded, added, listing }) => {
  return (<div className='details-box'>
    <ul className='car-details-list'>
      <li>{listing.name}</li>
      <li className='price'>Price: {listing.price}</li>
      <li>Color: {listing.color}</li>
      <li>Make: {listing.make}</li>
      <li>Model: {listing.model}</li>
      <li>Year: {listing.year}</li>
    </ul>
    <button onClick={() => onClickEventHandler(setAdded)}>{added}</button>
  </div>);
};

export default CarDetails;
