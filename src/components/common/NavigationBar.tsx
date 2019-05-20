import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Image, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import logo from "../../assets/elahav.png"
import { Social } from './Social';

import './NavigationBar.scss';

const Styles = styled.div`
  .navbar {
    background-color: white;
    display: 'contents';
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #0022aa;
    font-size: 16;
    display: 'contents';
    &:hover {
      color: #bbb;
    }
    background-color: white;
  }
  .basic-navbar-nav{
    background-color: white;
    display: 'contents';
  }
  `;

export const NavigationBar = () => (
  // <Styles>
    <Row className='navbar'>
    <Navbar expand="lg" style={{ backgroundColor: 'white' }}>
      <Navbar.Brand href="/portfolio-app">
        <Image src={logo} className='brand-pic' style={{ maxWidth: '110px', marginTop: '-10px' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className=" mr-sm-2"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/portfolio-app" style={{color: 'blue'}}>Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/portfolio-app/resume" style={{color: 'blue'}}>Resume</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/portfolio-app/aboutme" style={{color: 'blue'}}>About Me</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/portfolio-app/blog" style={{ color:'blue', marginRight: '50px' }}>Blog</Link>
          </Nav.Link>
          <span style={{ marginLeft: '90px' }}>
            <Social />
          </span>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Row>
  // </Styles >
)