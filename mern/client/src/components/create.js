import React, { Component } from "react";
// This will require to npm install axios
import { withRouter } from "react-router-dom";
import User from "./user";

class Create extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangePersonEmail = this.onChangePersonEmail.bind(this);
    this.onChangePersonPassword = this.onChangePersonPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.newuser = new User();

    this.state = {
      email: "",
      password: "",
    }
  }

  // These methods will update the state properties.
  onChangePersonEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePersonPassword(e) {
    this.setState({
      password: e.target.value
    });
  }

// This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();

    this.newuser.updateEmail(this.state.email);
    this.newuser.updatePassword(this.state.password);

    this.newuser.uploadUser();

    this.props.history.push("/");
  }

  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Account</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangePersonEmail}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePersonPassword}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Account"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Create);