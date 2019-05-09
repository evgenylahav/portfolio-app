import React, { Component } from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap';
import logo from "../assets/Lahav.png"
import './MyNavbar.scss';

export class MyNavbar extends Component {
  render() {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">
                <Image src={logo} className='brand-pic'/>
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
              <Nav.Link href="/aboutme">About Me</Nav.Link>
              <Nav.Link href="/content">Content</Nav.Link>
            </Nav>
         </Navbar>
    )
  }
}