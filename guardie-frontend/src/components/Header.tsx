import React, { Component } from "react";
import { Container, Row, Nav, Navbar } from "react-bootstrap";
import logo from "./media/utility/vessillo.png";

export class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <img
            src={logo}
            width="30"
            height="40"
            className="d-inline-block align-top"
          />
          <Navbar.Brand href="/">&nbsp;Legislatore 4.0</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/upload">
                <i className="fa-solid fa-clipboard"></i> Upload
              </Nav.Link>
              <Nav.Link href="/resoconti">
                <i className="fa-solid fa-pencil"></i> Resoconti
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
