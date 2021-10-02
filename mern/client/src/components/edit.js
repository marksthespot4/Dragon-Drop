import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { withRouter } from "react-router";

class Edit extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangePersonEmail = this.onChangePersonEmail.bind(this);
    this.onChangePersonPassword = this.onChangePersonPassword.bind(this);
    this.onChangePersonPageName = this.onChangePersonPageName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_email: "",
      person_password: "",
      person_pagename: "",
      records: [],
    };
  }
  // This will get the record based on the id from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/record/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          person_email: response.data.person_email,
          person_password: response.data.person_password,
          person_pagename: response.data.person_pagename,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // These methods will update the state properties.
  onChangePersonEmail(e) {
    this.setState({
      person_email: e.target.value,
    });
  }

  onChangePersonPassword(e) {
    this.setState({
      person_password: e.target.value,
    });
  }

  onChangePersonPageName(e) {
    this.setState({
      person_pagename: e.target.value,
    });
  }

  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
    const newEditedperson = {
      person_email: this.state.person_email,
      person_password: this.state.person_password,
      person_pagename: this.state.person_pagename,
    };
    console.log(newEditedperson);

    // This will send a post request to update the data in the database.
    axios
      .post(
        "http://localhost:5000/update/" + this.props.match.params.id,
        newEditedperson
      )
      .then((res) => console.log(res.data));

    this.props.history.push("/");
  }

  // This following section will display the update-form that takes the input from the user to update the data.
  render() {
    return (
      <div>
        <h3 align="center">Update Record</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_email}
              onChange={this.onChangePersonEmail}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_password}
              onChange={this.onChangePersonPassword}
            />
          </div>
          <div className="form-group">
            <label>Page Name: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.person_pagename}
                onChange={this.onChangePersonPageName}
              />
          </div>
          <br />

          <div className="form-group">
            <input
              type="submit"
              value="Update Record"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

// You can get access to the history object's properties and the closest <Route>'s match via the withRouter
// higher-order component. This makes it easier for us to edit our records.

export default withRouter(Edit);