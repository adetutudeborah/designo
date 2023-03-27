import React from 'react';
import { Link } from 'react-router-dom';
import './Navigationbar.css';

import Container from 'react-bootstrap/Container';
import { Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

import images from "../../assets/images";

function Navigationbar() {
      return (
      <div className='navcontainer'>
        <Navbar expand="lg"  className="navbar-main">
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
      </div>  
      );
    };

export default Navigationbar;