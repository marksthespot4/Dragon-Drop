import React, { Component } from "react";

import "../CSS/header_footer.css";
import { withRouter } from "react-router";
import Navbar from 'react-bootstrap/Navbar'

class HeadFoot extends Component {
    constructor(props) {
        super(props);

    }

render() {
    return (
        <div>
            <Navbar fixed="top">top</Navbar>
            <Navbar fixed="bottom">bottom</Navbar>
        </div>
    )}
}

export default withRouter(HeadFoot);