import React, { Component } from "react";
import { MDBContainer, MDBCard, MDBCardBody,MDBCardHeader, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from
"mdbreact";
import Switch from "react-switch";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { getUser, updateUser } from "./user";
import { getPages, updatePage } from "./page"
import { FormControlLabel } from '@mui/material';

class TabsDefault extends Component {

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

        this.state = {
            pages: [],
            activeItem: "1",
            currentPassword: "",
            password: "",
            confirmPassword: "",
            hidden: true,
            userEmail: email,
            private: false,
        };

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }


    handleCurrentPasswordChange = (e) => {
        this.setState({
            currentPassword: e.target.value,
        })
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value,
        })
    }

    handleConfirmPasswordChange = (e) => {
        this.setState({
            confirmPassword: e.target.value,
        })
    }

    toggle = tab => () => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    }
    changePassword = () => {
        getUser(this.state.userEmail).then(data =>{
            if (data == null) { // Account was not found
                alert("Account under given email not found");
                this.setState({
                    currentPassword: ''
                });
            }
            else if (data.password === this.state.currentPassword) { // Account was found, password was correct
                var password = "" + this.state.password;
                var confirmPassword =  "" + this.state.confirmPassword;
                console.log("pswd: "+password);
                console.log("cnfpswd: "+confirmPassword);
                if (password !== confirmPassword) { // Passwords don't match
                    alert("Passwords do not match");
                }
                else if (password.length < 8) { // Password too short
                    alert("Passwords must be at least 8 characters long")
                }
                else if (!password.includes('!') && !password.includes('@') && !password.includes('#') 
                        && !password.includes('$') && !password.includes('%') && !password.includes('^') 
                        && !password.includes('&') && !password.includes('*')) { // Password doesn't contain any special characters
                            alert("Password must include at least one special character");
                }
                else if (password === password.toUpperCase() || password === password.toLowerCase()) { // Password doesn't have upper and lowercase characters
                    alert("Password must have at least one upper case and lower case character");
                }
                else {
                    updateUser(this.state.userEmail, this.state.password, data.pagecount, data._id);
                    alert("Password has been updated!");
                }
            }
            else { // Account was found, password was incorrect
                alert("Incorrect password");
                this.setState({
                    currentPassword: ''
                });
            }
        });
    }

    changePrivacy = () => {
        this.state.private = !this.state.private;
        getPages().then(data=>{
            this.setState({
                pages: data || [],
            });
            for (var i = 0; i < this.state.pages.length; i++) {
                if (this.state.pages[i].user === this.state.userEmail) {
                    updatePage(this.state.pages[i].user, this.state.pages[i].pagename, this.state.private, this.state.pages[i].pagedata, null, this.state.pages[i]._id);
                }
            }
        });
       
    }

    render() {
        return (
            <MDBContainer>
                <MDBCard className="text-center">
                    <MDBNav>
                        <MDBNavItem>
                            <MDBNavLink
                            link
                            to="#"
                            active={this.state.activeItem === "1"}
                            onClick={this.toggle("1")}
                            role="tab"
                            >
                            <MDBIcon icon="user" /> Change email
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink
                            link
                            to="#"
                            active={this.state.activeItem === "2"}
                            onClick={this.toggle("2")}
                            role="tab"
                            >
                            <MDBIcon icon="heart" /> Change password
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink
                            link
                            to="#"
                            active={this.state.activeItem === "3"}
                            onClick={this.toggle("3")}
                            role="tab"
                            >
                            <MDBIcon icon="envelope" /> Change privacy
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNav>
                </MDBCard> 
                <MDBTabContent
                className="card"
                activeItem={this.state.activeItem}
                >
                <MDBTabPane tabId="1" role="tabpanel">
                    <MDBCardBody>
                    <h6>New Email</h6>
                    <input
                        type="email"
                    />
                    <h6><br></br>Confirm Email</h6>
                    <input
                        type="email"
                    />
                    </MDBCardBody>   
                </MDBTabPane>
                <MDBTabPane tabId="2" role="tabpanel">
                    <MDBCardBody>
                    <h6>Current Password</h6>
                    <input
                        type="password"
                        value={this.state.currentPassword}
                        name="currentPassword"
                        onChange={this.handleCurrentPasswordChange}
                    // className="form-control"
                    />
                    <h6>New Password</h6>
                    <input
                        type="password"
                        value={this.state.password}
                        name="password"
                        onChange={this.handlePasswordChange}
                    // className="form-control"
                    />
                    <OverlayTrigger
                        placement="right"
                        overlay={
                            <Tooltip >
                                <b>Requires at least one:</b><br></br>
                                Uppercase and lowercase <br></br>
                                Number<br></br>
                                Special character (!, @, etc.)<br></br>
                                <b>Must be at least 8 characters</b>
                            </Tooltip>
                        }
                    >
                        <i class="bi bi-info-circle"></i>
                    </OverlayTrigger>
                    <h6><br></br>Confirm Password</h6>
                    <input
                        type="password"
                        value={this.state.confirmPassword}
                        name="confirmPassword"
                        onChange={this.handleConfirmPasswordChange}
                        // className="form-control"
                    />
                    <div align="left">
                    <Button onClick={() => this.changePassword()}>
                        Submit
                    </Button>
                    </div>
                    </MDBCardBody>
                </MDBTabPane>
                <MDBTabPane tabId="3" role="tabpanel">
                    <MDBCardBody>
                    <Button onClick={() => this.changePrivacy()}>
                        {this.state.private ? "Make all pages private" : "Make all pages public"}
                    </Button>
                    </MDBCardBody>
                </MDBTabPane>
                </MDBTabContent>
               
            </MDBContainer>
        );
    }
}

export default TabsDefault; 