import React, { Component, useState } from "react";
import Switch from "react-switch";
// import axios from 'axios';

export default class SwitchButton extends Component {
  constructor() {
    super();
    this.state = {checked: true };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({checked});
  }

  render() {
    return (
      <label>
        <span>public</span>
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </label>
    );
  }
}