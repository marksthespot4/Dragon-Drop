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
        var email;
        if(this.props.email !== "") {
            email = this.props.email; 
            localStorage.setItem( 'localEmail', email);
        }
        else {
            email = localStorage.getItem( 'localEmail' );
        }

        this.state = {
            email: email,
            isLoggedIn :false,
            theme: true
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({theme: true})
        if (this.state.email) {
            getUser(this.state.email).then(data=>{
                // console.log(data);
                if(data) {
                    this.setState({
                        theme: data.theme,
                    });
                }
            });
        }
      }

    handleChange() {
        return this.changeTheme();
    }

    changeTheme() {
        this.setState((state) => {
          getUser(this.state.email).then(data=>{
            //   console.log(data)
            updateUser(data.email, data.password, data.pagecount, data._id, !data.theme, data.autoSave);
            // console.log(data.theme)
          });
          return {theme: !state.theme}
        });
    }

    render() {
        document.body.style = (this.state.theme) ? 'background: wheat;' : 'background: #2F2F30;';
        return (
            <div>
                <div className={ (this.state.theme || !this.props.auth.isAuthenticated) ? "headerL" : "headerD"}>
                    <Navbar fixed="top" expand="lg">
                        <NavLink className="navbar-brand" to="/">
                            <img className="logo" src={logo} className="img-fluid" style={{width: 50, margin: 2}}/>
                        </NavLink>

                        <Navbar.Toggle/>
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