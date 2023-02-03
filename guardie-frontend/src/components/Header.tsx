import React, { Component } from "react";
import { Container, Row, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "./media/utility/vessillo.png";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
        <div className="container-fluid">
          <img
            src={logo}
            width="30"
            height="40"
            className="d-inline-block align-top"
          />
          <NavLink to="/" className="navbar-brand">
            &nbsp;Legislatore 4.0
          </NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/upload" className="nav-link">
                  <i className="fa-solid fa-clipboard"></i> Upload
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/resoconti" className="nav-link">
                  <i className="fa-solid fa-pencil"></i> Resoconti
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
