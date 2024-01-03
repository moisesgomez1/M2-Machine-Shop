import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (<nav className="navbar">
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/listing">Cart</Link>
    </div>

  </nav>
  );
};

export default NavBar;
