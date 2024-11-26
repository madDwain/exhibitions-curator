import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/home" className="navbar-item">
          HOME
        </Link>
        <Link to="/artwork" className="navbar-item">
          Find Art
        </Link>
        <Link to="/exhibitions" className="navbar-item">
          View Exhibitions
        </Link>
        <Link to="/login" className="navbar-item">
          Login
        </Link>
      </nav>
    </>
  );
};

export default Header;
