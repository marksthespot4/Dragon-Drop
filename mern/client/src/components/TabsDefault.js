import React, { Component } from "react";
import { MDBContainer, MDBCard, MDBCardBody,MDBCardHeader, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from
"mdbreact";
import Switch from "react-switch";
import Button from 'react-bootstrap/Button';

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
            activeItem: "1",
            currentPassword: "",
            password: "",
            confirmPassword: "",
            hidden: true,
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
                    <h6><br></br>Confirm Password</h6>
                    <input
                        type="password"
                        value={this.state.confirmPassword}
                        name="confirmPassword"
                        onChange={this.handleConfirmPasswordChange}
                        // className="form-control"
                    />
                    <div align="left">
                    <Button onClick={() => this.state.confirmPassword}>
                        Submit
                    </Button>
                    </div>
                    </MDBCardBody>
                </MDBTabPane>
                <MDBTabPane tabId="3" role="tabpanel">
                    <MDBCardBody>
                    <label>
                        <span>Public</span>
                        <Switch/>
                    </label>
                    </MDBCardBody>
                </MDBTabPane>
                </MDBTabContent>
               
            </MDBContainer>
        );
    }
}

export default TabsDefault; 