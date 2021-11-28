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
import { getUser, updateUser } from "./user";

// import Button from 'react-bootstrap/Button';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn :false,
            theme: true
        }
        this.handleChange = this.handleChange.bind(this);
    }

    // componentDidMount() {
    //     getUser(this.props.email).then(data=>{
    //         console.log(data);
    //         this.setState({
    //             theme: data.theme,
    //         });
    //     });
    //   }

    handleChange() {
        return this.changeTheme();
    }

    changeTheme() {
        this.setState((state) => {
        //   getUser(this.props.email).then(data=>{
        //     updateUser(data.email, data.password, data.pagecount, data._id, !data.theme, false);
        //   });
          return {theme: !state.theme}
        });
    }

    render() {
        return (
            <div>
                <div className={ this.state.theme ? "headerL" : "headerD"}>
                    <Navbar fixed="top" expand="lg">
                        <NavLink className="navbar-brand" to="/">
                            <img className="logo" src={logo} className="img-fluid" style={{width: 50, margin: 2}}/>
                        </NavLink>

                        <Navbar.Toggle onClick={() => this.onClick()}/>
                        {!this.props.auth.isAuthenticated
                        ?
                        <></>
                        :
                        <Navbar.Collapse className="justify-content-end">
                            <Switch 
                                onChange={this.handleChange} 
                                checked={this.state.theme}
                                offColor="#0071ce"
                                onColor="#ffc220"
                                offHandleColor="#C0C0C0"
                                onHandleColor="#FFFFFF"
                                checkedIcon={
                                    <div className="toggleS">
                                        <i class="bi bi-sun-fill"></i>
                                    </div>
                                }
                                uncheckedIcon={
                                    <div className="toggleM">
                                        <i class="bi bi-moon"></i>
                                    </div>
                                }
                            />
                            <NavLink 
                                className="navbar-brand" 
                                to="/user_page" 
                                style={{ color: this.state.theme ? "black" : "white"}}
                            >
                                My Projects
                            </NavLink>
                            <NavLink className="navbar-brand" to="/settings"> 
                            <i className="bi bi-person-circle" style={{ color: this.state.theme ? "#ffc220" : "#0071ce", fontSize: "xx-large"}}></i>
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