import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import logo from "../imgs/dragonNoText.png"

// Here, we display our Navbar
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
<<<<<<< HEAD
        <NavLink className="navbar-brand" to="/">
          Dragon Drop
=======
        {/* change to "/" route later */}
        <NavLink className="navbar-brand" to="/home"> 
          <img src={logo} height="80"/>
>>>>>>> 4c55513f16f4b79837719be9e01ac363346f1749
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Create Account
              </NavLink>
              <NavLink className="nav-link" to="/home">
                home
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;