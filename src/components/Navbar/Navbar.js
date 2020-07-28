import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-10 white">
      <div className="navbar">
        <Link className="home-menu" to="/">
          Home
        </Link>
        <Link className="profile-menu" to="/profile">
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
