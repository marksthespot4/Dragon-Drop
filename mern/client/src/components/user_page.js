import React, { useRef, useState, Component } from "react";

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
            <div className="flex-row">
                <div className="flex-column">
    <img src={example} className="img-fluid img-thumbnail yellowOutline" alt={props.page.pageNumber}/>
                </div>
                <div className="flex-column">
            <i className={"bi bi-gear"} style={{cursor:"pointer"}}/>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            Project Settings
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Edit</a></li>
                            <li><a className="dropdown-item" href="#">Toggle Private</a></li>
                            <li><a className="dropdown-item" href="#">Delete</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p>Project {props.page.pageNumber}</p>
        </div>
    </div>
)




export default class UserPage extends Component {

    constructor(props){
        super(props);
        this.state = {pages: []}
    }
    componentDidMount() {
        axios
            .get("http://localhost:5000/page/")
            .then((response) => {
                this.setState({ pages: response.data });
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
            <div  style={{ margin: 20}}>
                <button type = "button" class = "btn - btn-outline-primary btn-lg" >Create a New Project</button>
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