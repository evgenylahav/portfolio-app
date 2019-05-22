import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Image, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import logo from "../../assets/elahav.png"
import { Social } from './Social';

const Styles = styled.div`
  .navbar {
    background-color: white;
    display: 'flow-root';
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #0022aa;
    display: 'flow-root';
    &:hover {
      color: #bbb;
    }
    background-color: white;
  }
  .basic-navbar-nav{
    background-color: white;
    display: 'flow-root';
  }
  `;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" style={{ backgroundColor: 'white' }}>
      <Navbar.Brand href="/portfolio-app">
        <Image src={logo} className='brand-pic' style={{ maxWidth: '110px', marginTop: '-10px' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className=" mr-sm-2"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/portfolio-app" style={{color: 'blue', fontSize: '19px'}}>Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/portfolio-app/resume" style={{color: 'blue', fontSize: '19px'}}>Resume</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/portfolio-app/aboutme" style={{color: 'blue', fontSize: '19px'}}>About Me</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/portfolio-app/blog" style={{ color:'blue', marginRight: '50px', fontSize: '19px' }}>Blog</Link>
          </Nav.Link>
          <span style={{ marginLeft: '6em' }}>
            <Social />
          </span>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)