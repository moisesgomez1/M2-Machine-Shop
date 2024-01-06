import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getCart } from "../thunks/thunks";

const NavBar = () => {
  const dispatch = useDispatch();
  return (<nav className="navbar">
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/cart" onClick={() => dispatch(getCart())}>Cart</Link>
      <Link to="/create">Create Listing</Link>
    </div>

  </nav>
  );
};

export default NavBar;

/* note: the Cart component is being mounted therefore the dispatch fires which updates the redux store when visiting the root enpoint.
Seems nice but do we want this to happen ? */

