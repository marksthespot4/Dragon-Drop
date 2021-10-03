import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';

import "./styles.css";

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import logo from './dragonNoText.png';

export default class Home extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);
  }

  // These methods will update the state properties.
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value,
    });
  }

  onChangePersonPosition(e) {
    this.setState({
      person_position: e.target.value,
    });
  }

  onChangePersonLevel(e) {
    this.setState({
      person_level: e.target.value,
    });
  }

// This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();

    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const newperson = {
      person_name: this.state.person_name,
      person_position: this.state.person_position,
      person_level: this.state.person_level,
    };

    axios
      .post("http://localhost:5000/record/add", newperson)
      .then((res) => console.log(res.data));

    // We will empty the state after posting the data to the database
    this.setState({
      person_name: "",
      person_position: "",
      person_level: "",
    });
  }

  // This following section will display the form that takes the input from the user.
  render() {
    document.body.style = 'background: wheat;';
    return (
        <div>
            <div align="right">
                <Button variant="blue">Log In</Button>{' '}
                <Button variant="blue">Sign Up</Button>{' '}
            </div>
            
            <div class="homepage" align="center">
                <img src={logo}/>
                <span class="overlay-text">Welcome to Dragon Drop</span>
            </div>
        </div>
    );
  }
}