import React, {useRef, useState, Component} from "react";
import {uploadPage, deletePage, getPages, getPagesByUser, updatePage, getPage} from "./page"
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../CSS/user_page.css"
import 'bootstrap/js/dist/dropdown';
import example from "../imgs/white.png"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

import Button from 'react-bootstrap/Button';

// This will require to npm install axios
import axios from 'axios';
import SwitchButton from "./switch_button";
import { getUser, updateUser } from "./user";

const Page = (props) => (
    <div className="col" style={{height:"80vh"}}>
        <div className="container-fluid">
            <h2>{props.page.pagename}</h2>
            
            {props.access ? 
            <a href={"/create-page/" + props.page._id}>
                <img src={props.page.pagepreview} className="yellowOutline float-start" />
            </a> 
            : 
            <img src={props.page.pagepreview} className="yellowOutline float-start" />
            }
            {/* <NavLink to="/create-page" className="btn btn-outline-primary btn-lg" >Create a New Project</NavLink> */}


            <div className="dropdown float-start">
                <i className="bi bi-gear btn btn-secondary dropdown-toggle dropdown-toggle-split" type="button"
                   data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden"> Toggle Dropdown</span>
                </i>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="/create-page">Edit</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => {props.renamePage(props.page._id)}}>Rename</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => {props.duplicatePage(props.page.pagename, props.page.pagedata, props.page.pub, props.page.pagepreview)}}>Duplicate</a></li>
                    <li><a className="dropdown-item" href="#">Download</a></li>
                    <li><a className="dropdown-item" href={props.page.pagepreview} download="image.jpg">Download as Image </a></li>
                    <li><a className="dropdown-item" style={{color:"red"}} href ="#" onClick={() => {props.deleteMyPage(props.page._id); delete_notify();}}>Delete</a></li>
                </ul>
            </div>
            <SwitchButton id = {props.page._id}>
            </SwitchButton>
        </div>
    </div>
)

const download = () => {
};
const delete_notify = () => toast.info('Page Successfully Deleted!');

export default class UserPage extends Component {

    constructor(props) {
        super(props);        
        var email;
        if(this.props.email != "") {
            email = this.props.email; 
            localStorage.setItem( 'localEmail', email);
        }
        else {
            email = localStorage.getItem( 'localEmail' );
        }

        this.state = {pages: [], currentUser: email, searchUser: email, pagecount: 0};
        this.deleteMyPage = this.deleteMyPage.bind(this);
        this.createNewPage = this.createNewPage.bind(this);
        this.renamePage = this.renamePage.bind(this);
        this.duplicatePage = this.duplicatePage.bind(this);
        // this.setPage = this.setPage.bind(this);
        // this.sendPageId = this.sendPageId.bind(this);

    }

    componentDidMount() {
        getPages().then(data=>{
            this.setState({
                pages: data || [],
            });
        });
    }

    // sendPageId(id) {
    //     console.log(id);
    //     this.props.setPage(id);
    //     console.log(this.props.page);
    // }

    createNewPage() {
        getUser(this.state.currentUser).then(data =>{
            if(data.pagecount >= 5) {
                alert("Cannot create new page: Reached maximum page count!");
                return;
            }
            else {
                updateUser(data.email, data.password, data.pagecount + 1, data._id);
                uploadPage(this.state.currentUser, "New Page", null, true, example);
                getPages().then(data=>{
                    this.setState({
                        pages: data || [],
                    });
                });
                this.render();
            }
        });        
    }

    duplicatePage(pagename, pagedata, pub, pagepreview) {
        console.log(pagename, pagedata, pub, pagepreview);
        getUser(this.state.currentUser).then(data =>{
            if(data.pagecount >= 5) {
                alert("Cannot create new page: Reached maximum page count!");
                return;
            }
            else {
                updateUser(data.email, data.password, data.pagecount + 1, data._id);
                uploadPage(this.state.currentUser, pagename, pagedata, pub, pagepreview);
                getPages().then(data=>{
                    this.setState({
                        pages: data || [],
                    });
                });
                this.render();
            }
        });        
    }
    renamePage(id) {
        if(this.state.currentUser === this.state.searchUser) {
            console.log(id);
            getPage(id).then(data=>{
                updatePage(data.user, "new name", data.pub, data.pagedata, data.pagepreview, id);
            });
        }
    } 
    deleteMyPage(id) {
        console.log(this.state.currentUser);
        console.log(this.state.searchUser);
        if(this.state.currentUser === this.state.searchUser) {
            getUser(this.state.currentUser).then(data =>{
                updateUser(data.email, data.password, data.pagecount - 1, data._id);
            });        
            deletePage(id);
            this.setState({ pages: this.state.pages.filter((el) => el._id !== id),
            });
            this.render();
        }
    }

    userProjects() {
        return this.state.pages.map((current) => {
            return (
                <Page
                    page={current}
                    deleteMyPage = {this.deleteMyPage}
                    renamePage = {this.renamePage}
                    duplicatePage = {this.duplicatePage}
                    updatePub = {this.updatePub}
                    key={current._id}
                    pub={current.pub}
                    access={this.state.currentUser === this.state.searchUser}
                    // access={true}
                    // setPage = {this.props.setPage}
                    // sendPageId = {this.sendPageId}
                />
            );
        });
    }

    setUser() {
        var userInp = document.getElementById("userQuery").value;
        this.setState({searchUser: userInp});
    }

    userSearch = () => {
        //TODO: currently, when a user searches, they don't pull from data base. So if a diff user has added a new page/deleted a new page
        //since the last DB call, the search will not have the most recent data.
        //the following code fixes it, but also runs constantly and breaks the code.

        // getPages().then(data=>{
        //     this.setState({
        //         pages: data || [],
        //     });
        // });
        
        return this.state.pages
        .filter((current) => {
            if(this.state.searchUser === "" || this.state.searchUser === this.state.currentUser) {
                if(current.user.toLowerCase() === this.state.searchUser.toLowerCase()) {
                    return current
                }
            }
            else if(current.user.toLowerCase() === this.state.searchUser.toLowerCase() && current.pub === true) {
                return current
            }
        })
        .map((current) => {
            // console.log(current.pagepreview);
            return (
                <Page
                    page={current}
                    deleteMyPage = {this.deleteMyPage}
                    renamePage = {this.renamePage}
                    duplicatePage = {this.duplicatePage}
                    updatePub = {this.updatePub}
                    key={current._id}
                    pub={current.pub}
                    access={this.state.currentUser === this.state.searchUser}
                    // access={true}
                    // setPage = {this.props.setPage}
                    // sendPageId = {this.sendPageId}

                />
            );
        });
    }

    backToAccount() {
        console.log(this.state.currentUser);
        this.setState({searchUser: this.state.currentUser});
    }

    render() {
        return (
            <div class="UserPage">
                <div>
                    <input
                        id="userQuery"
                        type="search"
                        placeholder="Search user"
                    >
                    </input>
                    <Button onClick={() => this.setUser()}>
                        Search User
                    </Button>
                    <Button onClick={() => this.backToAccount()}>
                        <i class="bi bi-arrow-counterclockwise"></i>
                    </Button>
                </div>
                <div style={{margin: 20}}>

                    <NavLink to="/create-page" className="btn btn-outline-primary btn-lg" >Create a New Project</NavLink>
                    <div className="btn btn-lg" onClick={() => this.createNewPage()}>Generate Project</div>

                    {/* <NavLink to="/create-page">
                        <Button onClick={() => this.createNewPage()}> Generate & Create</Button>
                    </NavLink> */}
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