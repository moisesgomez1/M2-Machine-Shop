import React from 'react';

const LargeCarBox = ({ listing }) => {
  return (
    <div className="largecarbox">
      <img src={`http://localhost:3000/${listing.image}`} className='largeimage'></img>

    </div>
  );
};

export default LargeCarBox;
