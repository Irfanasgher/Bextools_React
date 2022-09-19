import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Button } from "antd";

import "./Navigation.scss";

import Logo from "./../../assets/images/logo.png";

const Navigation = () => {
  return (
    <div id="navbar">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="none"
        variant="dark"
        className="navWrapper"
      >
        <Navbar.Brand href="#home" className="logo">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto customNav">
            <Nav.Link className="navlink" href="#deets">
              Forum
            </Nav.Link>
            <Nav.Link className="navlink" eventKey={2} href="#memes">
              Exchange
            </Nav.Link>
            <Nav.Link className="navlink" eventKey={3} href="#memes">
              Docus
            </Nav.Link>
            <Nav.Link eventKey={4} href="/bextools-board">
              <Button type="primary" className="appButton">
                <div className="innerButton d-flex align-items-center justify-content-center">
                  Enter App
                </div>
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
