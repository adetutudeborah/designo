import React from 'react';
import './Navigationbar.css';

import Container from 'react-bootstrap/Container';
import { Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

import images from "../../assets/images";

function Navigationbar() {
      return (
        <Navbar expand="lg"  className="navbar-main" fixed="top">
          <Container>
            <Navbar.Brand href="/"> 
              <img src={images.logo} alt="logo" className="navlogo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="ms-auto nav-gap">
                <Nav.Link className="navitem">Our Company</Nav.Link>
                <Nav.Link className="navitem">Locations</Nav.Link>
                <Nav.Link className="navitem">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    };

export default Navigationbar;