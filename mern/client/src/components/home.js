import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';

import "../CSS/home.css";

import Button from 'react-bootstrap/Button';
import logo from '../imgs/dragonNoText.png';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { NavLink } from "react-router-dom";
import CloseButton from 'react-bootstrap/CloseButton'
import { getUser, uploadUser } from "./user";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            activeModal: "",
            name: "",
            email: "",
            password: "",
            confirmPaswword: ""
        };
    }

    handleEmailChange(e) {
        const target = e.target;
        const email = target.email;

        this.setState({
            email: email,
        });
    }

    handlePasswordChange(e) {
        const target = e.target;
        const password = target.password;

        this.setState({
            password: password,
        })
    }

    handleConfirmPasswordChange(e) {
        const target = e.target;
        const confirmPassword = target.confirmPassword;

        this.setState({
            confirmPassword: confirmPassword,
        })
    }

    // handleSubmit(e) {
    //     this.setState({ name: this.state.modalInputName });
    //     this.modalClose();
    // }

    modalOpen(active) {
        this.setState({ show: true, activeModal: active });
    }

    modalClose() {
        this.setState({
            email: "",
            password: "",
            confirmPaswword: "",
            show: false,
            activeModal: ""
        });
    }

    modalSignup() {
        if (this.password != this.confirmPaswword) { // Passwords don't match

        }
        else if (this.password.length < 8) { // Password too short

        }
        else if (!this.password.includes('!') && !this.password.includes('@') && !this.password.includes('#') 
                && !this.password.includes('$') && !this.password.includes('%') && !this.password.includes('^') 
                && !this.password.includes('&') && !this.password.includes('*')) { // Password doesn't contain any special characters

        }
        else if (this.password == this.password.toUpperCase() || this.password == this.password.toLowerCase()) { // Password doesn't have upper and lowercase characters

        }
        else {
            uploadUser(this.email, this.password, 0);
            this.modalClose();
            this.props.history.push("/user_page");
        }
    }

    modalLogin() {
        getUser(this.email).then(data =>{
            if (data == null) { // Account was not found

            }
            else if (data.password == this.password) { // Account was found, password was correct
                this.modalClose();
                this.props.history.push("/user_page");
            }
            else { // Account was found, password was incorrect

            }
        });
    }

    updateActiveModal(active) {
        if(active === "login") {
            this.setState({
                show: true,
                activeModal: "signup"
            });
        } else if(active === "signup") {
            this.setState({
                show: true,
                activeModal: "login"
            });
        }
    }

    login(props) {
        props.history.push("/user_page");
    }

    render() {
        document.body.style = 'background: wheat;';
        return (
            <div className="Home">
                <div align="right">
                    <Button onClick={() => this.modalOpen("login")}>
                        Log In
                    </Button>
                    <Button onClick={() => this.modalOpen("signup")}>
                        Sign Up
                    </Button>
                </div>
                
                <div class="homepage" align="center">
                    <img src={logo}/>
                    <span class="overlay-text">Welcome to Dragon Drop</span>
                </div>

                <Modal 
                    handleClose={e => this.modalClose(e)} 
                    aria-labelledby="contained-modal-title-vcenter" 
                    centered
                    show={this.state.activeModal === 'login'}
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Log In
                        </Modal.Title>
                        <CloseButton onClick={e => this.modalClose(e)}></CloseButton>
                    </Modal.Header>
                    <Modal.Body>
                        <h6>Email</h6>
                        <input
                            type="email"
                            value={this.state.email}
                            name="email"
                            onChange={e => this.handleEmailChange(e)}
                            // className="form-control"
                        />

                        <h6>Password</h6>
                        <input
                            type="password"
                            value={this.state.password}
                            name="password"
                            onChange={e => this.handlePasswordChange(e)}
                            // className="form-control"
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.updateActiveModal("login")}>
                            Don't have a Dragon Drop account?
                        </Button>
                        <NavLink className="navbar-brand" to="/user_page" className="nav">
                            <Button onClick={() => this.modalLogin()}>
                                    Log In
                            </Button>
                        </NavLink>
                    </Modal.Footer>
                </Modal>


                <Modal
                    handleClose={e => this.modalClose(e)} 
                    aria-labelledby="contained-modal-title-vcenter" 
                    centered
                    show={this.state.activeModal === 'signup'}
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Sign Up
                        </Modal.Title>
                        <CloseButton onClick={e => this.modalClose(e)}></CloseButton>
                    </Modal.Header>
                    <Modal.Body>
                        <h6>Email</h6>
                        <input
                            type="email"
                            value={this.state.email}
                            name="email"
                            onChange={e => this.handleEmailChange(e)}
                            // className="form-control"
                        />

                        <h6>Password</h6>
                        <input
                            type="password"
                            value={this.state.password}
                            name="password"
                            onChange={e => this.handlePasswordChange(e)}
                            // className="form-control"
                        />

                        <OverlayTrigger
                            placement="right"
                            overlay={
                                <Tooltip >
                                    <b>Requires at least one:</b><br></br>
                                    Uppercase and lowercase <br></br>
                                    Number<br></br>
                                    Special character (!, @, etc.)<br></br>
                                    <b>Must be at least 8 characters</b>
                                </Tooltip>
                            }
                            >
                            <Button variant="secondary" size="sm">i</Button>
                        </OverlayTrigger>

                        <h6>Confirm Password</h6>
                        <input
                            type="password"
                            value={this.state.confirmPaswword}
                            name="confirmPassword"
                            onChange={e => this.handleConfirmPasswordChange(e)}
                            // className="form-control"
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.updateActiveModal("signup")}>
                            Already have a Dragon Drop account?
                        </Button>
                        <NavLink className="navbar-brand" to="/user_page" className="nav">
                            <Button onClick={() => this.modalSignup()}>
                                Sign Up
                            </Button>
                        </NavLink>                  
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}