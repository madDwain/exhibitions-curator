import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <nav >
        <Link to="/artwork">
          Find Art
        </Link>
        <Link to="/exhibitions">
          View Exhibitions
        </Link>
        <Link to="/login">
          Login
        </Link>
      </nav>
    </>
  );
};

export default Header;
