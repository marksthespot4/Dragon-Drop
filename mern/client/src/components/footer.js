import React, { Component } from "react";

import "../CSS/footer.css";
import { withRouter } from "react-router";
import Navbar from 'react-bootstrap/Navbar';
import logo from "../imgs/dragonNoText.png";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

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
                        <h5>
                            <a href="https://github.com/marksthespot4/Dragon-Drop" target="_blank">Github</a>
                        </h5>
                    </Col>
                    <Col className="center">
                        <h5>
                            <a>FAQ</a>
                        </h5>
                    </Col>
                    <Col className="center">
                        <h5>
                            <a>Meet the Creators</a>
                        </h5>                    
                    </Col>
                </Row>
            </Container>

    {/* <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        GeeksforGeeks: A Computer Science Portal for Geeks
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box> */}
        </div>
    )}
}

export default withRouter(Footer);