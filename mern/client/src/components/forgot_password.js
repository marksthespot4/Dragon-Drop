import Button from 'react-bootstrap/Button';
import { getUser } from "./user";
import React, { Component } from 'react';
import axios from 'axios';

class ForgotPassword extends Component{
    
    constructor() {
        super();
        this.state = {
            email: '',
        }
    }

    setEmail() {
        this.setState({email: document.getElementById("userEmail").value},
        this.validateEmail);
    }

    validateEmail(){
        var email = this.state.email;
        getUser(email).then(data =>{
            if (data == null) { // Account was not found
                alert("Account under given email not found");
            }
            else {
                this.sendEmail();
            }
        });
    }  

    sendEmail() {
        axios
            .post('http://localhost:5000/routes/users/forgotPassword', {
                email: this.state.email,
            })
    }

    render() {
        return (
            <div>
                <h1>Reset your password</h1>
                <p>To reset your password, enter your email below and submit. An email will be sent to you with instructions about how to complete the process.</p>
                Email
                <input
                    id="userEmail"
                    type="email"
                    placeholder="Email">
                </input>
                <Button onClick={() => this.setEmail()}>
                    Reset Password
                </Button>
            
            </div>
        );
    }
}

export default ForgotPassword;