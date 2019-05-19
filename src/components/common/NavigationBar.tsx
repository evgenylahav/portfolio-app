import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Image } from 'react-bootstrap';
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
    font-size: 16;
    display: 'flow-root';
    &:hover {
      color: #bbb;
    }
    background-color: white;
  }
  .basic-navbar-nav{
    background-color: white;
  }
  `;

export const NavigationBar = () => (
  <Styles>
      <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/portfolio-app">
                <Image src={logo} className='brand-pic' style={{maxWidth: '90px'}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{backgroundColor: 'white'}}>
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/portfolio-app">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/portfolio-app/resume">Resume</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/portfolio-app/aboutme">About Me</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/portfolio-app/blog" style={{marginRight: '50px'}}>Blog</Link>
                    </Nav.Link>
                    <span style={{marginLeft: '170px'}}>
                      <Social />
                    </span>
                </Nav>
            </Navbar.Collapse>
      </Navbar>
  </Styles >
)