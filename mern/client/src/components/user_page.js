import React, {useRef, useState, Component} from "react";
import {uploadPage, deletePage, getPages} from "./page"
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../CSS/user_page.css"
import 'bootstrap/js/dist/dropdown';
import example from "../imgs/example_1.png"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';

// This will require to npm install axios
import axios from 'axios';
import SwitchButton from "./switch_button";
// import Page from './pageTest';

const Page = (props) => (
    <div className="col">
        <div className="container-fluid">
            <h2>{props.page.pagename}</h2>
            <a href={"/create-page"}>
                <img src={example} className="yellowOutline float-start"/>
            </a>
            <div className="dropdown float-start">
                <i className="bi bi-gear btn btn-secondary dropdown-toggle dropdown-toggle-split" type="button"
                   data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden"> Toggle Dropdown</span>
                </i>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="/create-page">Edit</a></li>
                    <li><a className="dropdown-item" href="#">Rename</a></li>
                    <li><a className="dropdown-item" href="#">Duplicate</a></li>
                    <li><a className="dropdown-item" href="#">Download</a></li>
                    <li><a className="dropdown-item" href="#">Download as Image </a></li>
                    <li><a className="dropdown-item" style={{color:"red"}} href ="#" onClick={() => {props.deleteMyPage(props.page._id); delete_notify();}}>Delete</a></li>
                </ul>
            </div>
            <SwitchButton id = {props.page._id}>
            </SwitchButton>
        </div>
    </div>
)

const delete_notify = () => toast.info('Page Successfully Deleted!');

export default class UserPage extends Component {

    constructor(props) {
        super(props);
        this.state = {pages: [], user: ""};
        this.deleteMyPage = this.deleteMyPage.bind(this);
        this.createNewPage = this.createNewPage.bind(this);
    }

    componentDidMount() {
        getPages().then(data=>{
            this.setState({
                pages: data,
            });
        });
    }

    createNewPage() {
        console.log("created");
        uploadPage("user", "New Page", "DATA", "img");
        getPages().then(data=>{
            this.setState({
                pages: data,
            });
        });
        this.render();
    }

    deleteMyPage(id) {
        deletePage(id);
        this.setState({ pages: this.state.pages.filter((el) => el._id !== id),
        });
        this.render();
    }

    userProjects() {
        return this.state.pages.map((current) => {
            return (
                <Page
                    page={current}
                    deleteMyPage = {this.deleteMyPage}
                    updatePub = {this.updatePub}
                    key={current._id}
                    pub={true}
                />
            );
        });
    }

    userSearch = () => {
        var text = document.getElementById("userQuery").value;
        this.setState({user : text});
        console.log(text);
    }

    render() {
        document.body.style = 'background: wheat';
        return (
            <div>
                <div>
                    <input
                        id="userQuery"
                        type="text"
                    >
                    </input>
                    <Button onClick={() => this.userSearch()}>
                        Search User
                    </Button>
                </div>
                <div style={{margin: 20}}>

                    <NavLink to="/create-page" className="btn btn-outline-primary btn-lg" >Create a New Project</NavLink>
                    <div className="btn btn-lg" onClick={() => this.createNewPage()}>Generate Project</div>
                </div>
                <div className="container-fluid">
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                    />
                    <div className="row">
                        {this.userProjects()}
                    </div>
                </div>
            </div>
        );
    }
}