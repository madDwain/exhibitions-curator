import React from "react";
import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-left">
        <Link to="/home" className="navbar-item">
          HOME
        </Link>
        <Link to="/artwork" className="navbar-item">
          Find Art
        </Link>
        <Link to="/exhibitions" className="navbar-item">
          View Exhibitions
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="navbar-item">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Header;
