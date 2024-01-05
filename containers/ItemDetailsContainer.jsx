import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CarDetails from '../components/CarDetails.jsx';
import LargeCarBox from '../components/LargeCarBox.jsx';

const ItemDetailsContainer = () => {
  const { state } = useLocation();
  const receivedData = state.data;
  console.log('recieved data from history state ', receivedData);
  const onClickEventHandler = (setterFunction) => {
    setterFunction('In Cart');
  };
  // state to update string in cart button
  const [added, setAdded] = useState('Add to Cart');

  return (<div className="productContainer">
    <LargeCarBox listing={receivedData} />
    <CarDetails onClickEventHandler={onClickEventHandler} setAdded={setAdded} added={added} listing={receivedData} />
  </div>

  );
};

export default ItemDetailsContainer;
