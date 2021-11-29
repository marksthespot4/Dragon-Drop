import React, { Component } from "react";
import { MDBContainer, MDBCard, MDBCardBody,MDBCardHeader, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from
"mdbreact";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { getUser, updateUser, updateEmail } from "./user";
import { getPages, updatePage } from "./page"
import Container from '@material-ui/core/Container';
//import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
 
const bcrypt = require("bcryptjs");

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

class SettingsTabs extends Component {


 /* const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };*/

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
            activeItem: "1",
            currentPassword: "",
            password: "",
            confirmPassword: "",
            hidden: true,
            userEmail: email,
            newEmail: "",
            confirmEmail: "",
            private: false,
        };

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleNewEmailChange = this.handleNewEmailChange.bind(this);
    }

    handleNewEmailChange = (e) => {
        this.setState({
            newEmail: e.target.value,
        })
    }

    handleConfirmEmailChange = (e) => {
        this.setState({
            confirmEmail: e.target.value,
        })
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

    changeActiveState = (e, newValue) => {
        console.log(newValue)
        if (this.state.activeItem !== newValue) {
            this.setState({
                activeItem: newValue,
                confirmPassword: ""
            });
        }
    }

    changeEmail = () => {
        getUser(this.state.userEmail).then(data =>{
            
            if (data == null) { // Account was not found
                alert("Account under given email not found");
                this.setState({
                    currentPassword: ''
                });
                return;
            }
            bcrypt.compare(this.state.currentPassword, data.password).then(isMatch => {
                if (isMatch)
                {
                    var email = "" + this.state.newEmail;
                    var confirmEmail =  "" + this.state.confirmEmail;
                    if (email !== confirmEmail) { // Passwords don't match
                        alert("Emails do not match!");
                    }
                    else {

                        updateEmail(this.state.userEmail, this.state.newEmail, this.state.password, data.pagecount);
                        alert("Email has been updated!");
                        this.setState({
                            currentPassword: '',
                            newEmail: '',
                            confirmEmail: ''
                        });
                    }
                }
                else
                {
                    alert("Incorrect password");
                    this.setState({
                        currentPassword: ''
                    });
                }
            });


    });
    }

    changePassword = () => {
        getUser(this.state.userEmail).then(data =>{
            
            if (data == null) { // Account was not found
                alert("Account under given email not found");
                this.setState({
                    currentPassword: ''
                });
                return;
            }
            if(data.googleId != null)
            {
                alert("Password not changed!");
                return;
            }
            bcrypt.compare(this.state.currentPassword, data.password).then(isMatch => {
                if (isMatch)
                {
                    var password = "" + this.state.password;
                    var confirmPassword =  "" + this.state.confirmPassword;
                    // console.log("pswd: "+password);
                    // console.log("cnfpswd: "+confirmPassword);
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
                        bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(this.state.password, salt, (err, hash) => {
                                if (err) throw err;
                                this.state.password = hash;
                                updateUser(this.state.userEmail, this.state.password, data.pagecount, data._id, data.theme, data.autoSave);
                                alert("Password has been updated!");
                                this.setState({
                                    currentPassword: '',
                                    password: '',
                                    confirmPassword: ''
                                });
                            
                            })
                        })
                    
                    }
                }
                else
                {
                    alert("Incorrect password");
                    this.setState({
                        currentPassword: ''
                    });
                }
            });


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
        <Container fit-content>
            <h1  style={{ backgroundColor: '#ffffff'}}>
            <Box fit-content>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                
                <Tabs value={this.state.activeItem} onChange={this.changeActiveState}>
                <Tab label="Change Email" {...a11yProps(0)} />
                <Tab label="Change Password" {...a11yProps(1)} />
                <Tab label="Change Privacy" {...a11yProps(2)} />
                </Tabs>
            </Box>
            
            <TabPanel value={this.state.activeItem} index = {0}>
            <Container>
                <h6>Current Password</h6>
                    <input
                        type="password"
                        value={this.state.currentPassword}
                        name="currentPassword"
                        onChange={this.handleCurrentPasswordChange}
                    // className="form-control"
                    />
                <h6><br></br>New Email</h6>
                <input
                    type="email"
                    value={this.state.newEmail}
                    name="newEmail"
                    onChange={this.handleNewEmailChange}
                    // className="form-control"
                />    
                <h6><br></br>Confirm New Email</h6>
                <input
                    type="email"
                    value={this.state.confirmEmail}
                    name="confirmEmail"
                    onChange={this.handleConfirmEmailChange}
                    // className="form-control"
                />
                <div align="left">
                <Button onClick={() => this.changeEmail()}>
                    Submit
                </Button>
                </div>
            </Container>
                
            </TabPanel>
            <TabPanel value={this.state.activeItem} index = {1}>
            <Container>
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
                </Container>
            </TabPanel>
            <TabPanel value={this.state.activeItem} index = {2}>
                <Button onClick={() => this.changePrivacy()}>
                    {this.state.private ? "Make all pages private" : "Make all pages public"}
                </Button>
            </TabPanel>
            </Box>
            </h1>
            </Container>  
  );
}
}
export default SettingsTabs;