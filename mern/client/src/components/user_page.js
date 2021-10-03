import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../CSS/user_page.css"
import example from "../imgs/example_1.png"
// This will require to npm install axios
import axios from 'axios';

const Page = (props) => (
    <div>
    <img src={example} />
        <h1>{props.page.pageNumber}</h1>
    </div>
)
export default class UserPage extends Component {

    constructor(props){
        super(props);
        this.state = {pages: []}
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/page/")
            .then((response) => {
                this.setState({ pages: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    userProjects() {
        return this.state.pages.map((current) => {
            return (
                <Page
                    page={current}
                    key={current._id}
                />
            );
        });
    }

    render() {
        document.body.style = 'background: wheat';
        return (
            <div>
            <div  style={{ margin: 20}}>
                <button type = "button" class = "btn - btn-outline-primary btn-lg" >Create a New Project</button>
            </div>
                <div>
                    {this.userProjects()};
                </div>
            </div>
            );
    }
}