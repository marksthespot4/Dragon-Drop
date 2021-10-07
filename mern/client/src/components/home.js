import React, { Component, useState } from "react";
// This will require to npm install axios
import axios from 'axios';

import "../styles/styles.css";

import Button from 'react-bootstrap/Button';
import logo from './dragonNoText.png';
import Modal from 'react-bootstrap/Modal'

import ReactDOM from "react-dom";


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
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

    modalOpen() {
        this.setState({ modal: true });
    }

    modalClose() {
        this.setState({
            modalInputName: "",
            modal: false
        });
    }

  render() {
    document.body.style = 'background: wheat;';

    return (
        <div className="Home">
            <div align="right">
                <Button variant="blue" onClick={e => this.modalOpen(e)}>
                    Log In
                </Button>
                <Button variant="blue">Sign Up</Button>
            </div>
            
            <div class="homepage" align="center">
                <img src={logo}/>
                <span class="overlay-text">Welcome to Dragon Drop</span>
            </div>

            {/* <a href="javascript:;" onClick={e => this.modalOpen(e)}>
                Log in here
            </a> */}
            <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
                <h2>Log In</h2>
                <div className="form-group">
                <label>Enter Name:</label>
                <input
                    type="text"
                    value={this.state.modalInputName}
                    name="modalInputName"
                    onChange={e => this.handleChange(e)}
                    className="form-control"
                />
                </div>
                <div className="form-group">
                <button onClick={e => this.handleSubmit(e)} type="button">
                    Save
                </button>
                </div>
            </Modal>

        </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);