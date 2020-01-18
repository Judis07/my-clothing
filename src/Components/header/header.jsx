import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "./crown.svg";

import "./header.scss";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <Link to="/">
        <img className="logo" src={MainLogo} alt="" />
      </Link>
    </div>

    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {/* <Link className="option" to="login">
        Log In
      </Link> */}
    </div>
  </div>
);

export default Header;
