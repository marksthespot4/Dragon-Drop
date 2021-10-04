import React, { Component, useState } from "react";
// This will require to npm install axios
import axios from 'axios';

import "./styles.css";

import Button from 'react-bootstrap/Button';
import logo from './dragonNoText.png';
import CloseButton from 'react-bootstrap/CloseButton'
import Modal from 'react-bootstrap/Modal'

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
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

    handleSubmit(e) {
        this.setState({ name: this.state.modalInputName });
        this.modalClose();
    }

    modalOpen(active) {
        this.setState({ modal: true, activeModal: active });
    }

    modalClose() {
        this.setState({
            modalInputName: "",
            modal: false,
            activeModal: ""
        });
    }

    updateActiveModal(active) {
        if(active == "login") {
            this.setState({
                modal: true,
                activeModal: "signup"
            });
        } else if(active == "signup") {
            this.setState({
                modal: true,
                activeModal: "login"
            });
        }
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
                </Modal.Header>
                <Modal.Body>
                    <h6>Email</h6>
                    <input
                        type="text"
                        // value={this.state.modalInputName}
                        // name="modalInputName"
                        // onChange={e => this.handleChange(e)}
                        // className="form-control"
                    />

                    <h6>Password</h6>
                    <input
                        type="text"
                        // value={this.state.modalInputName}
                        // name="modalInputName"
                        // onChange={e => this.handleChange(e)}
                        // className="form-control"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.updateActiveModal("login")}>Don't have a Dragon Drop account?</Button>
                    <Button onClick={e => this.modalClose(e)}>Log In</Button>
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
                </Modal.Header>
                <Modal.Body>
                    <h6>Email</h6>
                    <input
                        type="text"
                        // value={this.state.modalInputName}
                        // name="modalInputName"
                        // onChange={e => this.handleChange(e)}
                        // className="form-control"
                    />

                    <h6>Password</h6>
                    <input
                        type="text"
                        // value={this.state.modalInputName}
                        // name="modalInputName"
                        // onChange={e => this.handleChange(e)}
                        // className="form-control"
                    />

                    <h6>Confirm Password</h6>
                    <input
                        type="text"
                        // value={this.state.modalInputName}
                        // name="modalInputName"
                        // onChange={e => this.handleChange(e)}
                        // className="form-control"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.updateActiveModal("signup")}>Already have a Dragon Drop account?</Button>
                    <Button onClick={e => this.modalClose(e)}>Sign Up</Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
  }
}