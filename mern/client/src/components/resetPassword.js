import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import axios from "axios";
import {getUser, updateUser} from "./user"
import { useHistory } from 'react-router-dom';


class ResetPassword extends Component{
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
        }
    }

    async componentDidMount() {
        await axios.get('http://localhost:5000/routes/users/reset', {
            params: {
                resetPasswordToken: this.props.match.params.token,
            },
        })
        .then(response => {
            console.log(response);
            if(response.data.message === "valid-link") {
                this.setState({email: response.data.username});
            }
            else {
                this.props.history.push("invalid-resetpassword/");
                console.log("bad");
            }
        });

    }

    resetPassword = () => {
        this.setState({password: document.getElementById("userPassword").value}, this.setConfirmation);
    }
    setConfirmation = () => {
        this.setState({confirmPassword: document.getElementById("confirmPassword").value}, this.passwordValidation);
    }
    passwordValidation = () => {
        if (this.state.password !== this.state.confirmPassword) { // Passwords don't match
            alert("Passwords do not match");
        }
        else if (this.state.password.length < 8) { // Password too short
            alert("Passwords must be at least 8 characters long")
        }
        else if (!this.state.password.includes('!') && !this.state.password.includes('@') && !this.state.password.includes('#') 
                && !this.state.password.includes('$') && !this.state.password.includes('%') && !this.state.password.includes('^') 
                && !this.state.password.includes('&') && !this.state.password.includes('*')) { // Password doesn't contain any special characters
                    alert("Password must include at least one special character");
        }
        else if (this.state.password === this.state.password.toUpperCase() || this.state.password === this.state.password.toLowerCase()) { // Password doesn't have upper and lowercase characters
            alert("Password must have at least one upper case and lower case character");
        }
        else {
            getUser(this.state.email).then(data =>{
                updateUser(data.email, this.state.password, data.pagecount, data._id);
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Reset your password</h1>
                <p>Enter your new password</p>
                <input
                    id="userPassword"
                    type="password"
                    placeholder="new password">
                </input>
                <p>Confirm your new password</p>
                <input
                    id="confirmPassword"
                    type="password"
                    placeholder="confirm password">
                </input>
                <Button onClick={() => this.resetPassword()}>
                    Reset Password
                </Button>
            </div>
        );
    }
}

export default ResetPassword;