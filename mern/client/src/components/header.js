import React, { Component } from "react";

import "../CSS/header.css";
import { withRouter } from "react-router";
import Navbar from 'react-bootstrap/Navbar';
import logo from "../imgs/dragonNoText.png";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {loginUser, registerUser} from "../actions/authActions";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn :false}
    }


    onClick()
    {
        console.log(this.state.isLoggedIn);
    }

render() {
        return (
            <div>
                <div className="header">
                    <Navbar fixed="top" expand="lg">
                        <NavLink className="navbar-brand" to="/">
                            <img className="logo" src={logo} className="img-fluid" style={{width: 50, margin: 2}}/>
                        </NavLink>

                        <Navbar.Toggle onClick={() => this.onClick()}/>
                        <Navbar.Collapse className="justify-content-end">
                            <NavLink className="navbar-brand" to="/user_page">
                                My Projects
                            </NavLink>
                            <NavLink className="navbar-brand" to="/user_page">
                                {/* SETTINGS LINK */}
                                <i className="user bi bi-person-circle"></i>
                            </NavLink>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
    )}
}

//export default withRouter(Header);
Header.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps
)(withRouter(Header));