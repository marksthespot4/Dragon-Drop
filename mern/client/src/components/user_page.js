import React, {useRef, useState, Component} from "react";

import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../CSS/user_page.css"
import 'bootstrap/js/dist/dropdown';
import example from "../imgs/example_1.png"
import { NavLink } from "react-router-dom";
// This will require to npm install axios
import axios from 'axios';
import SwitchButton from "./switch_button";
// import Page from './pageTest';

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
                    <li><a className="dropdown-item" href="/edit_page">Edit</a></li>
                    <li><a className="dropdown-item" href="#">Download</a></li>
                    <li><a className="dropdown-item" href="#">Download as Image </a></li>
                    <li><a className="dropdown-item" href ="#" onClick={() => props.deletePage(props.page._id)}>Delete</a></li>
                </ul>
            </div>
            <SwitchButton id = {props.page._id}>

            </SwitchButton>
        </div>
    </div>
)


export default class UserPage extends Component {

    constructor(props) {
        super(props);
        this.state = {pages: []};
        this.deletePage = this.deletePage.bind(this);
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/record/pages")
            .then((response) => {
                this.setState({pages: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    deletePage(id) {
        axios.delete("http://localhost:5000/page/" + id).then((response) => {
            console.log(response.data);
        });

        this.setState({
            pages: this.state.pages.filter((el) => el._id !== id),
        });
        this.render();
    }

    userProjects() {
        return this.state.pages.map((current) => {
            return (
                <Page
                    page={current}
                    deletePage = {this.deletePage}
                    updatePub = {this.updatePub}
                    key={current._id}
                    pub={true}
                />
            );
        });
    }

    // renderM

    render() {
        document.body.style = 'background: wheat';
        return (
            <div>
                <div style={{margin: 20}}>
                    <NavLink to="/edit_page" className="btn btn-outline-primary btn-lg" >Create a New Project</NavLink>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        {this.userProjects()}
                    </div>
                </div>
            </div>
        );
    }
}