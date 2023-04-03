import React from 'react'; 
import {LinkContainer} from 'react-router-bootstrap'
import './Navigationbar.css';

import Container from 'react-bootstrap/Container';
import { Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';

import images from "../../assets/images";

function Navigationbar() {
      return (
      <div className='navcontainer'>
        <Navbar expand="md"  className="navbar-main">

            <Navbar.Brand href="/"> 
              <img src={images.logo} alt="logo" className="navlogo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="ms-auto nav-gap">

               <LinkContainer to="/about">
                <Nav.Link className="navitem">Our Company</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/locations">
                <Nav.Link className="navitem">Locations</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/contact">
                <Nav.Link className="navitem navitemcontact">Contact</Nav.Link>
                </LinkContainer>
                
              </Nav>
            </Navbar.Collapse>

        </Navbar>
      </div>  
      );
    };

export default Navigationbar;