import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Image } from 'react-bootstrap';
import styled from 'styled-components';
import logo from "../../assets/Lahav_1.png"
import { Social } from './Social';


const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #222222;
    &:hover {
      color: #bbb;
    }
  }`;

export const NavigationBar = () => (
  <Styles>
      <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                <Image src={logo} className='brand-pic' style={{maxWidth: '90px'}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/resume">Resume</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/aboutme">About Me</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/blog">Blog</Link>
                    </Nav.Link>
                    <Social />
                </Nav>
            </Navbar.Collapse>
      </Navbar>
  </Styles >
)