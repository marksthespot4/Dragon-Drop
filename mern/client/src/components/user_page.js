import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import '../CSS/user_page.scss'
import example from "../imgs/example_1.png"
// This will require to npm install axios
import axios from 'axios';

export default class UserPage extends Component {
    render() {
        return (
            <div>
            <div  style={{ margin: 20}}>
                <button type = "button" class = "btn - btn-outline-primary btn-lg" >Create a New Project</button>
            </div>


            <div style={{margin:20}}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="container">
                                <img src={example} className="img-thumbnail"/>
                                <i className="bi bi-gear"></i>
                            </div>
                        </div>
                        <div className="col">
                            <div className="container">
                                <img src={example} className="img-thumbnail"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="container">
                                <img src={example} className="img-thumbnail"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            );
    }
}