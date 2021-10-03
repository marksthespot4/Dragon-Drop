import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "./Modal";

import "./styles.css";
export default class LogInPopUp extends Component {
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
      return (
        <div className="LogInPopUp">
          <h1>Hello!! {this.state.name}</h1>
          <a href="javascript:;" onClick={e => this.modalOpen(e)}>
            Log in here
          </a>
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
  ReactDOM.render(<LogInPopUp />, rootElement);
