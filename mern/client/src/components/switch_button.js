import React, { Component, useState } from "react";
import Switch from "react-switch";
// import axios from 'axios';

export default class SwitchButton extends Component {
  constructor() {
    super();
    this.state = {checked: true };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    // this.setState({checked : });
    return this.changePrivacy();
  }
  changePrivacy() {
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      console.log(!state.checked);
      return {checked: !state.checked}
    });
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