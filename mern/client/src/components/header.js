import React, { Component, useState } from "react";

import "../CSS/header.css";
import { withRouter } from "react-router";
import Navbar from 'react-bootstrap/Navbar';
import logo from "../imgs/dragonNoText.png";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
// import {loginUser, registerUser} from "../actions/authActions";
import Switch from "react-switch";

import Button from 'react-bootstrap/Button';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn :false,
            theme: true
        }
        this.handleChange = this.handleChange.bind(this);
    }


    // onClick()
    // {
    //     console.log(this.state.isLoggedIn);
    // }

    handleChange(theme) {
        this.setState({ theme });
    }

render() {
        return (
            <div>
                <div className="header">
                    <Navbar fixed="top" expand="lg">
                        <NavLink className="navbar-brand" to="/">
                            <img className="logo" src={logo} className="img-fluid" style={{width: 50, margin: 2}}/>
                        </NavLink>

                        <Navbar.Toggle/>
                        {localStorage.getItem( 'jwtToken' ) === null
                        ?
                        <></>
                        :
                        <Navbar.Collapse className="justify-content-end">
                            <Switch 
                                onChange={this.handleChange} 
                                checked={this.state.theme}
                                offColor="#08f"
                                onColor="#0ff"
                                offHandleColor="#0ff"
                                onHandleColor="#08f"
                                uncheckedIcon={
                                    <svg viewBox="0 0 10 10" height="100%" width="100%" fill="yellow">
                                      <circle r={3} cx={5} cy={5} />
                                    </svg>
                                }
                                checkedIcon={
                                    <svg viewBox="0 0 10 10" height="100%" width="100%" fill="yellow">
                                      <circle r={3} cx={5} cy={5} />
                                    </svg>
                                }
                            />

                            <NavLink className="navbar-brand" to="/user_page">
                                My Projects
                            </NavLink>
                            <NavLink className="navbar-brand" to="/settings"> 
                            <i className="user bi bi-person-circle"></i>
                            </NavLink>
                        </Navbar.Collapse>
                        }
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