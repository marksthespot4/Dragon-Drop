import React, {useRef, useState, Component} from "react";
import {uploadPage, deletePage, getPages, getPagesByUser, updatePage, getPage} from "./page"
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
import { getUser, updateUser } from "./user";

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
        this.state = {pages: [], currentUser: this.props.email, searchUser: this.props.email, pagecount: 0};
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
        getUser(this.state.currentUser).then(data =>{
            if(data.pagecount >= 5) {
                alert("Cannot create new page: Reached maximum page count!");
                return;
            }
            else {
                updateUser(data.email, data.password, data.pagecount + 1, data._id);
                uploadPage(this.state.currentUser, "New Page", "DATA", "img");
                getPages().then(data=>{
                    this.setState({
                        pages: data,
                    });
                });
                this.render();
            }
        });        
    }

    deleteMyPage(id) {
        getUser(this.state.currentUser).then(data =>{
            updateUser(data.email, data.password, data.pagecount - 1, data._id);
        });        
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
                    pub={current.pub}
                />
            );
        });
    }

    setUser() {
        var userInp = document.getElementById("userQuery").value;
        this.setState({searchUser: userInp});
    }

    userSearch = () => {
        getPages().then(data=>{
            this.setState({
                pages: data,
            });
        });
        return this.state.pages
        .filter((current) => {
            if (this.state.searchUser === this.state.currentUser) {
                if(current.user.toLowerCase().indexOf(this.state.searchUser.toLowerCase()) > -1) {
                    return current
                }
            }
            else if(current.user.toLowerCase().indexOf(this.state.searchUser.toLowerCase()) > -1 && current.pub === true) {
                return current
            }
        })
        .map((current) => {
            return (
                <Page
                    page={current}
                    deleteMyPage = {this.deleteMyPage}
                    updatePub = {this.updatePub}
                    key={current._id}
                    pub={current.pub}
                />
            );
        });
    }

    backToAccount() {
        this.setState({searchUser: this.state.currentUser});
    }

    render() {
        return (
            <div>
                <div>
                    <input
                        id="userQuery"
                        type="text"
                    >
                    </input>
                    {/* <Button onClick={() => this.userSearch()}> */}
                    <Button onClick={() => this.setUser()}>
                        Search User
                    </Button>
                    <Button onClick={() => this.backToAccount()}>
                        Back to Account
                    </Button>
                </div>
                <div style={{margin: 20}}>

                    <NavLink to="/create-page" className="btn btn-outline-primary btn-lg" >Create a New Project</NavLink>
                    <div className="btn btn-lg" onClick={() => this.createNewPage()}>Generate Project</div>
                </div>
                <div className="container-fluid">
                    <ToastContainer
                        position="top-center"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                    />
                    <div className="row">
                        {/* {this.userProjects()} */}
                        {this.userSearch()}
                    </div>
                </div>
            </div>
        );
    }
}