import React, { Component } from "react";

import "../CSS/footer.css";
import { withRouter } from "react-router";
import Navbar from 'react-bootstrap/Navbar';
import logo from "../imgs/dragonNoText.png";
import { NavLink } from "react-router-dom";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./footer_styles";


class Footer extends Component {
    constructor(props) {
        super(props);

    }

render() {
    return (
        <div>
            <div class="footer">hello</div>
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