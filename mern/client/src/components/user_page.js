import React, {useRef, useState, Component} from "react";

import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../CSS/user_page.css"
import 'bootstrap/js/dist/dropdown';
import example from "../imgs/example_1.png"
// This will require to npm install axios
import axios from 'axios';

const Page = (props) => (
    <div className="col">
        <div className="container-fluid">
            <h2>Project {props.page.pageNumber}</h2>
            <img src={example} className="yellowOutline float-start" alt={props.page.pageNumber}/>

            <div className="dropdown float-start">
                <i className="bi bi-gear btn btn-secondary dropdown-toggle dropdown-toggle-split" type="button"
                   data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden"> Toggle Dropdown</span>
                </i>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Edit</a></li>
                    <li><a className="dropdown-item" href="#">Download</a></li>
                    <li><a className="dropdown-item" href="#">Download as Image </a></li>
                    <li><a className="dropdown-item" href="#">Delete</a></li>
                </ul>
            </div>
        </div>
    </div>
)


export default class UserPage extends Component {

    constructor(props) {
        super(props);
        this.state = {pages: []}
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/page/")
            .then((response) => {
                this.setState({pages: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    userProjects() {
        return this.state.pages.map((current) => {
            return (
                <Page
                    page={current}
                    key={current._id}
                />
            );
        });
    }

    renderM

    render() {
        document.body.style = 'background: wheat';
        return (
            <div>
                <div style={{margin: 20}}>
                    <button type="button" className="btn - btn-outline-primary btn-lg">Create a New Project</button>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        {this.userProjects()};
                    </div>
                </div>
            </div>
        );
    }
}