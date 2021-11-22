import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import axios from "axios";


class ResetPassword extends Component{
    
    constructor() {
        super();
    }

    componentDidMount() {
        console.log(this.props.match.params.token);
        // axios.get('http://localhost:5000/reset', {
        //     params: {
        //         resetPasswordToken: this.props.match.params.token,
        //     },
        // })
        // .then(response => {
        //     console.log(response);
        // });
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