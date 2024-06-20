import React from 'react';
import { Link } from 'react-router-dom';

const Car = ({ listing }) => {
  return (<div className="car">
    <Link to='/listing' state={{ data: listing }}>
      <img src={`http://localhost:3000/${listing.image}`} className='car-image'></img>
      <ul className='car-details'>
        <li className='name'>{listing.name}</li>
        <li>{listing.price}</li>
      </ul>
    </Link>
  </div>);
};

export default Car;
