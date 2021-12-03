import React, { Component } from "react";

import "../CSS/footer.css";
import { withRouter } from "react-router";
// import Navbar from 'react-bootstrap/Navbar';
// import logo from "../imgs/dragonNoText.png";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends Component {
    constructor(props) {
        super(props);

    }

render() {
    return (
        <div class="footer">
            <hr/>
            <Container>
                <Row className="justify-content-md-center">
                    <Col className="center">
                      <NavLink className="navbar-brand" to="/">
                        <i class="bi bi-droplet"></i>
                      </NavLink>
                    </Col>
                    <Col className="center">
                        <h5>
                            <a href="https://github.com/marksthespot4/Dragon-Drop" target="_blank">
                              <i class="bi bi-github"></i>
                            </a>
                        </h5>
                    </Col>
                    <Col className="center">
                        <NavLink className="navbar-brand" to="/faq">
                              <i class="bi bi-question-circle"></i>
                        </NavLink>
                    </Col>
                    <Col className="center">
                        <NavLink className="navbar-brand" to="/creator_page" >
                            <i class="bi bi-people-fill" />
                        </NavLink>
                    </Col>
                </Row>
                <Row className="copyright justify-content-md-center">
                  Copyright 2021 ©
                </Row>
            </Container>
        </div>
    )}
}

export default withRouter(Footer);