import React, { Component } from "react";

// This will require to npm install axios
import axios from 'axios';

import "../CSS/home.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import Button from 'react-bootstrap/Button';
import logo from '../imgs/dragonNoText.png';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import CloseButton from 'react-bootstrap/CloseButton';
import googleButton from "../imgs/login.png";
import { getUser, uploadUser } from "./user";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { registerUser } from "../actions/authActions";
import { loginUser} from "../actions/authActions";
import { ToastContainer, toast } from 'react-toastify';

// import classnames from "classnames";

/* Mark's COMMENTS
So HOME has now been modified to use redux store. This is shown at the bottom, where
the redux store for authentication and errors are connected, as well as the
redux actions for registering and logging in. (mapStateToProps, mapDispatchToProps).
Now, home will check to see if the auth state is currently set in componentDidMount, and if
it is, it will redirect to the logout page.
similarly,upon receiving indication that the auth changed to be set, it will redirect
to the user_page with componentWillReceiveProps.

The home.proptypes stuff is at the bottom because otherwise react can't tell what
proptype it is.
 */

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            activeModal: "",
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            hiddenL: true,
            hiddenS: true,
            hiddenSc: true,
            errors: {}
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleShowL = this.toggleShowL.bind(this);
        this.toggleShowS1 = this.toggleShowS1.bind(this);
        this.toggleShowS2 = this.toggleShowS2.bind(this);

        //this.handleConfirmPasswordChange = this.handleConfirmPasswordChange(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/user_page");
        }
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated)
        {
            this.props.history.push("/dashboard");
            console.log("RE-DIRECT");
        }
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        });
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value,
        })
    }

    handleConfirmPasswordChange = (e) => {
        this.setState({
            confirmPassword: e.target.value,
        })
    }

    handleKeyDownLogIn = (e) => {
        if (e.key == 'Enter') {
            this.modalLogin();
        }
    }

    handleKeyDownSignUp = (e) => {
        if (e.key == 'Enter') {
            this.modalSignup();
        }
    }

    toggleShowL() {
        this.setState({ hiddenL: !this.state.hiddenL });
    }

    toggleShowS1() {
        this.setState({ hiddenS: !this.state.hiddenS });
    }

    toggleShowS2() {
        this.setState({ hiddenSc: !this.state.hiddenSc });
    }

    modalOpen = (active) => {
        this.setState({ show: true, activeModal: active });
    }

    modalClose = () => {
        this.setState({
            email: "",
            password: "",
            confirmPassword: "",
            show: false,
            activeModal: "",
            hiddenL: true,
            hiddenS: true
        });
    }

    notify = () => { 
        toast.success('Successfully Registered! Log in to get started.');
    }

    modalSignup = () => {
        var password = "" + this.state.password;
        var confirmPassword =  "" + this.state.confirmPassword;
        // console.log("pswd: "+password);
        // console.log("cnfpswd: "+confirmPassword);
        if (password !== confirmPassword) { // Passwords don't match
            toast.error("Passwords do not match");
        }
        else if (password.length < 8) { // Password too short
            toast.error("Passwords must be at least 8 characters long")
        }
        else if (!password.includes('!') && !password.includes('@') && !password.includes('#') 
                && !password.includes('$') && !password.includes('%') && !password.includes('^') 
                && !password.includes('&') && !password.includes('*')) { // Password doesn't contain any special characters
                    toast.error("Password must include at least one special character");
        }
        else if (password === password.toUpperCase() || password === password.toLowerCase()) { // Password doesn't have upper and lowercase characters
            toast.error("Password must have at least one upper case and lower case character");
        }
        else {
            // console.log(this.state.email);
            this.props.setEmail(this.state.email);
            //uploadUser(this.state.email, this.state.password, 0);
            const newUser = {
                name: this.state.name,
                email: this.state.email.toLowerCase(),
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
            }

            this.props.registerUser(newUser, this.props.history);
            this.modalClose();
            this.notify();
            // this.props.history.push("/user_page");
        }
    }

    modalLogin = () => {
        const userSign  = {
            email: this.state.email.toLowerCase(),
            password: this.state.password
        };

        getUser(this.state.email).then(data =>{
            if (data == null) { // Account was not found
                toast.error("Account under given email not found");

                this.setState({
                    email: '',
                    password: ''
                });
            }
            else {
                this.props.setEmail(this.state.email);
                this.props.loginUser(userSign);
            }
            /*
            else if (data.password === this.state.password) { // Account was found, password was correct
                console.log(this.state.email);
                this.props.setEmail(this.state.email);
                this.modalClose();
                this.props.history.push("/user_page");
            }
            else { // Account was found, password was incorrect
                alert("Incorrect password");
                this.setState({
                    password: ''
                });
            }*/
        });

    }

    updateActiveModal = (active) => {
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
        // console.log(this.state.email);
        this.props.setEmail(this.state.email);
        props.history.push("/user_page");
    }

    render() {
        document.body.style = "background: wheat;";
        return (
            <div className="Home" style={{height:"90vh"}}>
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

                {/* LOGIN MODAL */}
                <Modal 
                    handleClose={e => this.modalClose(e)} 
                    aria-labelledby="contained-modal-title-vcenter" 
                    centered
                    show={this.state.activeModal === 'login'}
                    onEscapeKeyDown={e => this.modalClose(e)}
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
                            onChange={this.handleEmailChange}
                            onKeyDown={this.handleKeyDownLogIn}
                            // className="form-control"
                        />

                        <h6>
                            <br/>Password&nbsp;
                             <i class={ this.state.hiddenL ? "bi bi-eye-slash" : "bi bi-eye"} onClick={this.toggleShowL}></i>
                        </h6>
                        <input
                            type={this.state.hiddenL ? "password" : "text"}
                            value={this.state.password}
                            name="password"
                            onChange={this.handlePasswordChange}
                            onKeyDown={this.handleKeyDownLogIn}
                            // className="form-control"
                        />
                        <a href={"forgot-password"}>
                            forgot password?
                        </a> 

                        {/* PUT IN FUNCTIONALITY FOR "FORGOT PASSWORD" LATER */}
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.updateActiveModal("login")}>
                            Don't have a Dragon Drop account?
                        </Button>
                        <Button onClick={() => this.modalLogin()}>
                                Log In
                        </Button>
                        <a href="http://localhost:5000/auth/google">
                            <img className="googleLogin" src={googleButton}/>
                        </a>
                    </Modal.Footer>
                </Modal>

                {/* SIGN UP MODAL */}
                <ToastContainer 
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Modal
                    handleClose={e => this.modalClose(e)} 
                    aria-labelledby="contained-modal-title-vcenter" 
                    centered
                    show={this.state.activeModal === 'signup'}
                    onEscapeKeyDown={e => this.modalClose(e)}
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
                            onChange={this.handleEmailChange}
                            onKeyDown={this.handleKeyDownSignUp}
                        />

                        <h6><br/>Password&nbsp;
                        <OverlayTrigger
                            placement="auto"
                            overlay={
                                <Tooltip>
                                    <b>Requires at least one:</b><br/>
                                    Uppercase and lowercase <br/>
                                    Number<br/>
                                    Special character (!, @, etc.)<br/>
                                    <b>Must be at least 8 characters</b>
                                </Tooltip>
                            }
                            trigger="click"
                            // style={{"z-index": "-1", position: "relative"}}
                        >
                            <i class="bi bi-info-circle"></i>
                        </OverlayTrigger>&nbsp;
                        <i class={ this.state.hiddenS ? "bi bi-eye-slash" : "bi bi-eye"} onClick={this.toggleShowS1}></i>
                        </h6>
                        <input
                            type={this.state.hiddenS ? "password" : "text"}
                            value={this.state.password}
                            name="password"
                            onChange={this.handlePasswordChange}
                            onKeyDown={this.handleKeyDownSignUp}
                        />
                        <h6><br/>Confirm Password&nbsp;
                        <i class={ this.state.hiddenSc ? "bi bi-eye-slash" : "bi bi-eye"} onClick={this.toggleShowS2}></i>
                        </h6>
                        <input
                            type={this.state.hiddenSc ? "password" : "text"}
                            value={this.state.confirmPassword}
                            name="confirmPassword"
                            onChange={this.handleConfirmPasswordChange}
                            onKeyDown={this.handleKeyDownSignUp}
                            // className="form-control"
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.updateActiveModal("signup")}>
                            Already have a Dragon Drop account?
                        </Button>
                        <Button onClick={() => this.modalSignup()}>
                            Sign Up
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

Home.propTypes = {
    registerUser: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { registerUser, loginUser}
)(withRouter(Home));