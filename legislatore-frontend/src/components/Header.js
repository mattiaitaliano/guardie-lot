import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import logo from "./media/utility/vessillo.png";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <img
            alt=""
            src={logo}
            width="30"
            height="40"
            className="d-inline-block align-top"
          />
          <LinkContainer to="/">
            <Navbar.Brand>&nbsp; Legislatore 4.0</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/upload">
                <Nav.Link>
                  <i className="fa-solid fa-clipboard"></i> Upload
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/resoconti">
                <Nav.Link>
                  <i className="fa-solid fa-pencil"></i> Resoconti
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
