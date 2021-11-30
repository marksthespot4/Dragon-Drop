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
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton'
import Switch from "react-switch";

import Button from 'react-bootstrap/Button';
// import setAuthToken from "../utils/setAuthToken";
import {setCurrentUser} from "../actions/authActions";
import store from "../store"

// This will require to npm install axios
// import axios from 'axios';
import SwitchButton from "./switch_button";
import { getUser, updateUser, getUserID } from "./user";
import PropTypes from "prop-types";


/* Mark's Comments
Now the user page uses the authentication feature to ensure it cannot be accessed unless logged in.
It checks the auth if its authenticated on componentDidMount.
In home.js there is an explanation of how it does this as well. We are using redux store and
mapStateToProps, as well as the export connect() at the bottom of user_page.js.
The rest of the user info is still stored as before, in localStorage as email.
 */
const Page = (props) => (
    <div className="col" style={{height:"80vh"}}>
        <div className="container-fluid">
            <h2>{props.page.pagename}</h2>
            
            {props.access ? 
            <a href={"/create-page/" + props.page._id}>
                <img src={props.page.pagepreview} className="yellowOutline float-start" />
            </a> 
            : 
            <a href={"/view-page/" + props.page._id}>
                <img src={props.page.pagepreview} className="yellowOutline float-start" />
            </a>
            }
            {/* <NavLink to="/create-page" className="btn btn-outline-primary btn-lg" >Create a New Project</NavLink> */}

            {props.access ?
            <div className="dropdown float-start">
                <i className="bi bi-gear btn btn-secondary dropdown-toggle dropdown-toggle-split" type="button"
                   data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden"> Toggle Dropdown</span>
                </i>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="/create-page">Edit</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => {props.renamePage(props.page._id)}}>Rename</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => {props.duplicatePage(props.page.pagename, props.page.pagedata, props.page.pub, props.page.pagepreview)}}>Duplicate</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => {props.exportPage(props.page._id)}}>Download</a></li>
                    <li><a className="dropdown-item" href={props.page.pagepreview} download="image.jpg">Download as Image </a></li>
                    <li><a className="dropdown-item" style={{color:"red"}} href ="#" onClick={() => {props.deleteMyPage(props.page._id); delete_notify();}}>Delete</a></li>
                </ul>
            </div>
            :
            <div></div>
            }
            <SwitchButton id={props.page._id} disabled={!props.access} >
            </SwitchButton>
        </div>
    </div>
)


const delete_notify = () => toast.info('Page Successfully Deleted!');

class UserPage extends Component {

    constructor(props) {

        super(props);
        var email;
        if(this.props.email !== "") {
            email = this.props.email; 
            localStorage.setItem( 'localEmail', email);
        }
        else {
            email = localStorage.getItem( 'localEmail' );
        }

        this.state = { 
            pages: [], 
            currentUser: email, 
            searchUser: email, 
            pagecount: 0,
            modalShow: false,
            checked: false
        };
        this.deleteMyPage = this.deleteMyPage.bind(this);
        this.createNewPage = this.createNewPage.bind(this);
        this.renamePage = this.renamePage.bind(this);
        this.duplicatePage = this.duplicatePage.bind(this);
        this.exportPage = this.exportPage.bind(this);
        this.changePrivacy = this.changePrivacy.bind(this)
    }


    componentDidMount() {
        if (this.props.match.params.id != null)
        {
            //it means the google login passed this.
            //check if the user exists in database by ID.
            //then if it does, update our Redux store
            //and set the local email in storage as the gmail.
            //also, set our currentUser and searchUser as gmail.
            //set our jwtToken
            getUserID(this.props.match.params.id).then(data => {
                //console.log(data);
                localStorage.setItem('localEmail', data.email);
                store.dispatch(setCurrentUser(data));
            });
            this.props.history.push("/user_page");
        }
        if (this.props.auth.isAuthenticated)
        {
            console.log("USER IS AUTHENTICATED ON USER PAGE");

        }
        else
        {
            console.log("USER NOT LOGGED IN");
            this.props.history.push("/");
        }

        getPages().then(data=>{
            console.log(data);
            this.setState({
                pages: data || [],
            });
        });
    }


    createNewPage(name, publicToggle) {
        getUser(this.state.currentUser).then(data =>{
            // console.log(this.state.currentUser);
            // console.log(data.pagecount);
            if(data.pagecount >= 5) {
                toast.error("Cannot create new page: Reached maximum page count!");
                return;
            }
            else {
                updateUser(data.email, data.password, data.pagecount + 1, data._id, data.theme, data.autoSave);
                // uploadPage(this.state.currentUser, "New Page", null, true, example).then(data => this.props.history.push("create-page/" + data.insertedId));
                // var pub = false;
                // if(publicToggle === "on") {
                //     pub = true;
                // }
                uploadPage(this.state.currentUser, name, null, this.state.checked, example).then(data => this.props.history.push("create-page/" + data.insertedId));
            }
        });
    }

    duplicatePage(pagename, pagedata, pub, pagepreview) {
        // console.log(pagename, pagedata, pub, pagepreview);
        getUser(this.state.currentUser).then(data =>{
            // console.log(data.pagecount);
            if(data.pagecount >= 5) {
                toast.error("Cannot create new page: Reached maximum page count!");
                return;
            }
            else {
                updateUser(data.email, data.password, data.pagecount + 1, data._id, data.theme, data.autoSave);
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
            // console.log(id);
            getPage(id).then(data=>{
                var newName = prompt("New Name:");
                updatePage(data.user, newName, data.pub, data.pagedata, data.pagepreview, id);
            });
        }
    }

    exportPage(id) {
        getPage(id).then(data => {
            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data.pagedata));
            // console.log(dataStr);
            var downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href",     dataStr);
            downloadAnchorNode.setAttribute("download", data.pagename + ".json");
            document.body.appendChild(downloadAnchorNode); // required for firefox
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
        })

    }

    deleteMyPage(id) {
        // console.log(this.state.currentUser);
        // console.log(this.state.searchUser);
        if(this.state.currentUser === this.state.searchUser) {
            getUser(this.state.currentUser).then(data =>{
                updateUser(data.email, data.password, data.pagecount - 1, data._id, data.theme, data.autoSave);
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
                    exportPage = {this.exportPage}
                    updatePub = {this.updatePub}
                    key={current._id}
                    pub={current.pub}
                    access={this.state.currentUser === this.state.searchUser}
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

        //console.log(this.state.currentUser);
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
                    exportPage = {this.exportPage}
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
        // console.log(this.state.currentUser);
        this.setState({searchUser: this.state.currentUser});
        document.getElementById("userQuery").value = "";
    }

    modalOpen = () => {
        this.setState({ modalShow: true });
    }

    modalClose = () => {
        this.setState({ modalShow: false });
    }

    changePrivacy() {
        this.setState((state) => {
          return {checked: !state.checked}
        });
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
                    {/* <Button onClick={() => this.userSearch()}> */}
                    <Button variant="secondary" onClick={() => this.setUser()}>
                        Search User
                    </Button>
                    <Button variant="secondary" onClick={() => this.backToAccount()}>
                        {/* <i class="bi bi-arrow-counterclockwise"></i> */}
                        Back to Account
                    </Button>
                </div>

                {this.state.currentUser === this.state.searchUser ?
                <div style={{margin: 20}}>

                    {/* <NavLink to="/create-page" className="btn btn-outline-primary btn-lg">Create a New Project</NavLink> */}
                    {/* <div className="btn btn-lg" onClick={() => this.createNewPage()}>Create Project</div> */}
                    <div className="btn btn-lg" onClick={() => this.modalOpen()}>Create Project</div>

                    <Modal 
                        handleClose={e => this.modalClose(e)} 
                        aria-labelledby="contained-modal-title-vcenter" 
                        centered
                        show={this.state.modalShow}
                        onEscapeKeyDown={e => this.modalClose(e)}
                        scrollable="true"
                        // size="lg"
                    >
                        <Modal.Header>
                            <Modal.Title id="contained-modal-title-vcenter">
                                New Project
                            </Modal.Title>
                            <CloseButton onClick={e => this.modalClose(e)}></CloseButton>
                        </Modal.Header>
                        <Modal.Body>
                            <h6>
                                Project Name
                                <input
                                    id="projectName"
                                    type="text"
                                    // value={this.state.email}
                                    name="pagename"
                                    // onChange={this.handleEmailChange}
                                    // className="form-control"
                                />
                            </h6>
                            <h6>
                                Would you like the project to be public?<br/>
                                <Switch
                                    // id="publicToggle"
                                    onChange={this.changePrivacy} 
                                    checked={this.state.checked}
                                    // offColor="#ffc220"
                                    onColor="#0071ce"
                                    checkedIcon={
                                        <div className="toggleS">
                                        <i class="bi bi-unlock-fill"></i>
                                        </div>
                                    }
                                    uncheckedIcon={
                                        <div className="toggleM">
                                        <i class="bi bi-lock-fill"></i>
                                        </div>
                                    }
                                />
                            </h6>
                            <h6>
                                Templates
                            </h6>
                            <h7>
{/* 
                            <input type="radio" value="Male" name="gender" /> Male
                            <input type="radio" value="Female" name="gender" /> Female
                            <input type="radio" value="Other" name="gender" /> Other */}
                                <label>
                                    <input type="radio" value="blank" name="template"/> 
                                    blank<br/>
                                    <img 
                                        height="350px" 
                                        style={{ border: "3px solid #555" }}
                                        src={"https://static.wixstatic.com/media/2cd43b_1094e370f17341469e87f5b397249ab7~mv2.png/v1/fill/w_320,h_331,q_90/2cd43b_1094e370f17341469e87f5b397249ab7~mv2.png"}
                                    >
                                    </img>
                                    </label>
                                    <br/>
                                <label>
                                    <input type="radio" value="Resume" name="template"/>
                                    resume<br/>
                                    <img 
                                        height="350px" 
                                        style={{ border: "3px solid #555" }}
                                        src={"https://purepng.com/public/uploads/large/purepng.com-luigimariofictional-charactervideo-gamefranchisenintendodesigner-1701528624294qfchn.png"}
                                    >
                                    </img>
                                </label>
                                <br/>
                                <label>
                                    <input type="radio" value="artPortfolio" name="template"/>
                                    art portfolio<br/>
                                    <img
                                        height="350px" 
                                        style={{ border: "3px solid #555" }}
                                        src={"https://ssb.wiki.gallery/images/d/de/PeachSuperMarioParty.png"}
                                    >
                                    </img>
                                </label>
                            </h7>
                            {/* <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton id="tbg-radio-1" value={1}>
                                    <img 
                                    height="350px" 
                                    style={{ border: "5px solid #555" }}
                                    src={"https://static.wixstatic.com/media/2cd43b_1094e370f17341469e87f5b397249ab7~mv2.png/v1/fill/w_320,h_331,q_90/2cd43b_1094e370f17341469e87f5b397249ab7~mv2.png"}
                                    >
                                    </img>                                
                                </ToggleButton>
                                <br/>
                                <ToggleButton id="tbg-radio-2" value={2}>
                                    <img 
                                    height="350px" 
                                    style={{ border: "5px solid #555" }}
                                    src={"https://purepng.com/public/uploads/large/purepng.com-luigimariofictional-charactervideo-gamefranchisenintendodesigner-1701528624294qfchn.png"}
                                    >
                                    </img>                                
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-3" value={3}>
                                    <img 
                                    height="350px" 
                                    style={{ border: "5px solid #555" }}
                                    src={"https://ssb.wiki.gallery/images/d/de/PeachSuperMarioParty.png"}
                                    >
                                    </img>
                                </ToggleButton>
                            </ToggleButtonGroup> */}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.createNewPage(document.getElementById("projectName").value)}>
                                    Create
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    
                    {/* <div className="btn btn-lg" onClick={() => this.createNewPage()}>
                        Test
                    </div> */}

                    {/* <NavLink to="/create-page">
                        <Button onClick={() => this.createNewPage()}> Generate & Create</Button>
                    </NavLink> */}
                </div>
                :
                <div></div>
                }

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

UserPage.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps)(withRouter(UserPage));