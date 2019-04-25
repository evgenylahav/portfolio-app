import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo_small.png';
import { Header, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
// import './HeaderComp.scss'

export interface HeaderState {

}


export class HeaderComp extends React.Component<{}, HeaderState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
          <Header className='header-color'>
            <Navbar.Brand href="/">
            <img
              src={logo}
              width="64"
              height="64"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navigation>
            <Link to="/resume">Resume</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contactme">Contact Me</Link>
          </Navigation>
          </Header>
        );
    }
}