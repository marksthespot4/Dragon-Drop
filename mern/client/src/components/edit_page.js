import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import example from "../imgs/example_1.png"
// This will require to npm install axios
import axios from 'axios';

export default class ProjectPreview extends Component {
    render() {
        return (
           <div>
               <p>Placeholder for Editing.</p>
               <img src={example}/>
           </div>
        );
    }
}