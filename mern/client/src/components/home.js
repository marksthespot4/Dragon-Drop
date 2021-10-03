import React, { Component, useState } from "react";
// This will require to npm install axios
import axios from 'axios';

import "./styles.css";

import Button from 'react-bootstrap/Button';
import logo from './dragonNoText.png';
import Modal from 'react-bootstrap/Modal'

export default class Home extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    // this.state = {
    //     isOpen: false
    // };
  }

// // This function will handle the submission.
//   onSubmit(e) {
//     e.preventDefault();

//     // When post request is sent to the create url, axios will add a new record(newperson) to the database.
//     const newperson = {
//       person_name: this.state.person_name,
//       person_position: this.state.person_position,
//       person_level: this.state.person_level,
//     };

//     axios
//       .post("http://localhost:5000/record/add", newperson)
//       .then((res) => console.log(res.data));

//     // We will empty the state after posting the data to the database
//     this.setState({
//       person_name: "",
//       person_position: "",
//       person_level: "",
//     });
//   }

  // This following section will display the form that takes the input from the user.
  render() {
    // const [isOpen, setIsOpen] = useState(false);

    // const showModal = () => {
    //   setIsOpen(true);
    // };
  
    // const hideModal = () => {
    //   setIsOpen(false);
    // };

    document.body.style = 'background: wheat;';

    return (
        <div>
            <div align="right">
                <Button variant="blue">
                    Log In
                </Button>
                <Button variant="blue">Sign Up</Button>
            </div>
            
            <div class="homepage" align="center">
                <img src={logo}/>
                <span class="overlay-text">Welcome to Dragon Drop</span>
            </div>

            {/* <div>
                <Modal show={isOpen} onHide={hideModal}>
                    <Modal.Header>
                    <Modal.Title>Hi</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>The body</Modal.Body>
                    <Modal.Footer>
                    <button onClick={hideModal}>Cancel</button>
                    <button>Save</button>
                    </Modal.Footer>
                </Modal>
            </div> */}
        </div>
    );
  }
}