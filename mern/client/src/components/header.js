import React, { Component } from "react";

import "../CSS/header.css";
import { withRouter } from "react-router";
import Navbar from 'react-bootstrap/Navbar';
import logo from "../imgs/dragonNoText.png";
import { NavLink } from "react-router-dom";


class Header extends Component {
    constructor(props) {
        super(props);

    }

render() {
    return (
        <div>
            <div class="header">
                <Navbar fixed="top" expand="lg">
                    <NavLink className="navbar-brand" to="/">
                        <img className="logo" src={logo} className="img-fluid" style={{ width: 50, margin:2}}/>
                    </NavLink>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink className="navbar-brand" to="/user_page">
                            My Projects
                        </NavLink>
                        <NavLink class="navbar-brand" to="/settings"> 
                            <i class="user bi bi-person-circle"></i>
                        </NavLink>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )}
}

export default withRouter(Header);