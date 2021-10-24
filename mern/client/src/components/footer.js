import React, { Component } from "react";

import "../CSS/footer.css";
import { withRouter } from "react-router";
import Navbar from 'react-bootstrap/Navbar';
import logo from "../imgs/dragonNoText.png";
import { NavLink } from "react-router-dom";


class Footer extends Component {
    constructor(props) {
        super(props);

    }

render() {
    return (
        <div>
            <div class="footer">
                <Navbar fixed="bottom">bottom</Navbar>
            </div>
        </div>
    )}
}

export default withRouter(Footer);