import React, { Component } from "react";
// This will require to npm install axios
import { withRouter } from "react-router";
import  { getUser, updateUser } from "./user";

class Edit extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangePersonEmail = this.onChangePersonEmail.bind(this);
    this.onChangePersonPassword = this.onChangePersonPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
      pagecount: 0,
      records: [],
    };
  }
  // This will get the record based on the id from the database.
  componentDidMount() {
    getUser(this.props.match.params.id).then(data=>{
      this.setState({
        email: data.email,
        password: data.password,
        pagecount: data.pagecount,
      });
    });
    //console.log("email "+this.state.email);
    //console.log("password "+this.state.password);
  }

  // These methods will update the state properties.
  onChangePersonEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePersonPassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
    updateUser(this.state.email, this.state.password, this.state.pagecount, this.props.match.params.id);

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