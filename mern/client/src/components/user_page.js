import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import '../CSS/user_page.scss'
// This will require to npm install axios
import axios from 'axios';

export default class UserPage extends Component {
    render() {
        return (
            <div>
            <div className = "border border-dark" style={{ margin: 20}}>
                <button type = "button" class = "btn - btn-outline-primary btn-lg" >Create a New Project</button>
            </div>
            <div className = "border border-dark" style={{margin:20}}>
                <div className="container">

                </div>
                <div className="container">

                </div>
                <div className="container">

                </div>
            </div>
            </div>
            );
    }
}