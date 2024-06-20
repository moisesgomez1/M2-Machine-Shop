import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Car from '../components/Car.jsx';

const MainContainer = () => {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api')
      .then(response => response.json())
      .then(data => {
        console.log('this is the data', data);
        setListings(data);
      })
      .catch(err => console.log(err));
  }, []);

  // create redux thunk function up here to pass it down to props in every child component?

  const cars = listings.map((listing, index) => {
    return <Car key={index} listing={listing}/>;
  });
  return (<div className="listings">
    {cars}
  </div>);
};

export default MainContainer;
