import React from "react";
// We import bootstrap to make our application look better.
import {Nav, LinkContainer, Navbar} from "bootstrap/dist/css/bootstrap.css";
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import "../CSS/user_page.css"
import gear from '../imgs/gear-icon.png';

const UserNavbar = () => {
    return (
        <div className="App container py-3">
            <NavLink class="settingsNav" to="/settings"> 
                <img class="imgSize" src={gear}/>
                <span class="overlay-text">Settings</span>
            </NavLink>
        </div>
    );
  };
  
export default UserNavbar;