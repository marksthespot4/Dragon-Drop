import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';

import "./styles.css";

import Button from 'react-bootstrap/Button';
import logo from '../imgs/dragonNoText.png';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { NavLink } from "react-router-dom";
import CloseButton from 'react-bootstrap/CloseButton'

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            activeModal: "",
            name: "",
            modalInputName: ""
        };
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
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
            modalInputName: "",
            show: false,
            activeModal: ""
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
                            // value={this.state.modalInputName}
                            // name="modalInputName"
                            // onChange={e => this.handleChange(e)}
                            // className="form-control"
                        />

                        <h6>Password</h6>
                        <input
                            type="password"
                            // value={this.state.modalInputName}
                            // name="modalInputName"
                            // onChange={e => this.handleChange(e)}
                            // className="form-control"
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.updateActiveModal("login")}>
                            Don't have a Dragon Drop account?
                        </Button>
                        <NavLink className="navbar-brand" to="/user_page" className="nav">
                            <Button onClick={e => this.modalClose(e)}>
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
                            // value={this.state.modalInputName}
                            // name="modalInputName"
                            // onChange={e => this.handleChange(e)}
                            // className="form-control"
                        />

                        <h6>Password</h6>
                        <input
                            type="password"
                            // value={this.state.modalInputName}
                            // name="modalInputName"
                            // onChange={e => this.handleChange(e)}
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
                            // value={this.state.modalInputName}
                            // name="modalInputName"
                            // onChange={e => this.handleChange(e)}
                            // className="form-control"
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.updateActiveModal("signup")}>
                            Already have a Dragon Drop account?
                        </Button>
                        <NavLink className="navbar-brand" to="/user_page" className="nav">
                            <Button onClick={e => this.modalClose(e)}>
                                Sign Up
                            </Button>
                        </NavLink>                  
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}