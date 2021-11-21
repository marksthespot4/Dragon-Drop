import Button from 'react-bootstrap/Button';
import { getUser } from "./user";
import React, { Component } from 'react';
import axios from "axios";


class ForgotPassword extends Component{
    
    validateEmail(email){
        // this.sendEmail(email);

        getUser(email).then(data =>{
            if (data == null) { // Account was not found
                alert("Account under given email not found");
            }
            else {
                //email is good
                this.sendEmail(email);
            }
        });
    }  
    sendEmail(email) {
        console.log("send email");
        axios
            .post('http://localhost:5000/routes/users/forgotPassword', {
                email: email,
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
                <Button onClick={() => this.validateEmail(document.getElementById("userEmail").value)}>
                    Reset Password
                </Button>
            
            </div>
        );
    }
}

export default ForgotPassword;