import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import axios from "axios";
import {getUser, updateUser} from "./user"
import badImage from "../imgs/invalid_psswd_reset.png"
const bcrypt = require("bcryptjs");


class ResetPassword extends Component{
    
    constructor() {
        super();
        this.state = {
            good: false,
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
                this.setState({good: true});
            }
            else {
                //reroute to bad link
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
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(this.state.password, salt, (err, hash) => {
                    if (err) throw err;
                    // this.state.password = hash;
                    getUser(this.state.email).then(data =>{
                        // updateUser(data.email, this.state.password, data.pagecount, data._id);
                        updateUser(data.email, hash, data.pagecount, data._id);

                    });
                    alert("Password has been updated!");
                    this.setState({
                        password: '',
                        confirmPassword: ''
                    });
                    //TODO update the user to clear the reset password token and time
                
                })
            })

        }
    }

    render() {
        const good = this.state.good;

        if (good) {
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
        else {
            return (
                <div>
                    <h1>Uh Oh!</h1>
                    <img src={badImage}/>
                </div>
            );
        }

        // return (
        //     <div>
        //         <h1>Reset your password</h1>
        //         <p>Enter your new password</p>
        //         <input
        //             id="userPassword"
        //             type="password"
        //             placeholder="new password">
        //         </input>
        //         <p>Confirm your new password</p>
        //         <input
        //             id="confirmPassword"
        //             type="password"
        //             placeholder="confirm password">
        //         </input>
        //         <Button onClick={() => this.resetPassword()}>
        //             Reset Password
        //         </Button>
        //     </div>
        // );
    }
}

export default ResetPassword;