import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from
"mdbreact";
import Switch from "react-switch";
class TabsDefault extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeItem: "1",
            email: "",
            confirmEmail: "",
            currentPassword: "",
            password: "",
            confirmPassword: "",
            hidden: true,
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        });
    }

    handleConfirmEmailChange = (e) => {
        this.setState({
            confirmEmail: e.target.value,
        });
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
                <MDBNav tabs>
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
                <MDBTabContent
                className="card"
                activeItem={this.state.activeItem}
                >
                <MDBTabPane tabId="1" role="tabpanel">
                    <h6>New Email</h6>
                    <input
                        type="email"
                        value={this.state.email}
                        name="email"
                        onChange={this.handleEmailChange}
                    // className="form-control"
                    />
                    <h6><br></br>Confirm Email</h6>
                    <input
                        type="email"
                        value={this.state.confirmPassword}
                        name="confirmEmail"
                        onChange={this.handleEmailChange}
                        // className="form-control"
                    />   
                </MDBTabPane>
                <MDBTabPane tabId="2" role="tabpanel">
                    <h6>Current Password</h6>
                    <input
                        type="password"
                        value={this.state.password}
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
                </MDBTabPane>
                <MDBTabPane tabId="3" role="tabpanel">
                    <label>
                        <span>Public</span>
                        <Switch/>
                    </label>
                </MDBTabPane>
                </MDBTabContent>
            </MDBContainer>
        );
    }
}

export default TabsDefault;