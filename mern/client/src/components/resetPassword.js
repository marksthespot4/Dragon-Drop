import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import axios from "axios";
import {getUser} from "./user"


class ResetPassword extends Component{
    
    constructor() {
        super();
    }

    async componentDidMount() {
        await axios.get('http://localhost:5000/routes/users/reset', {
            params: {
                resetPasswordToken: this.props.match.params.token,
            },
        })
        .then(response => {
            console.log(response);
        });
        getUser("hyun.changsoo7@gmail.com").then(data =>{
            console.log(data.resetPasswordToken);
        });
    }

    render() {
        return (
            <div>
                <input></input>
            </div>
        );
    }
}

export default ResetPassword;