import React, { Component, useState } from "react";
import Switch from "react-switch";
import { updatePage } from "./page";
import { getPage } from "./page";
// import axios from 'axios';

export default class SwitchButton extends Component {
  constructor() {
    super();
    this.state = {checked: false};
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    getPage(this.props.id).then(data=>{
      this.setState({
        checked: data.pub,
      });
    });
    //console.log("email "+this.state.email);
    //console.log("password "+this.state.password);
  }

  handleChange() {
    return this.changePrivacy();
  }
  changePrivacy() {
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      // console.log(!state.checked);
      // console.log(this.props.id);

      getPage(this.props.id).then(data=>{
        updatePage(data.user, data.pagename, !data.pub, data.pagedata, data.pagepreview, this.props.id);
      });
      return {checked: !state.checked}
    });
  }
  render() {
    return (
      <label>
        <span>public</span>
        <Switch onChange={this.handleChange} disabled={this.props.disabled} checked={this.state.checked} />
      </label>
    );
  }
}