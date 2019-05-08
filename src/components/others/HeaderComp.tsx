import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/Lahav.png';
import { Header, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
import './Header.scss';

export interface HeaderProps {

}

export interface HeaderState {

}

export class HeaderComp extends React.Component<HeaderProps, HeaderState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
          <Header className='header-color' style={{padding: '0 0'}}>
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="80"
                height="64"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navigation>
              <Link to="/" style={{fontSize: '20px'}}>Home</Link>
              <Link to="/resume" style={{fontSize: '20px'}}>Resume</Link>
              <Link to="/aboutme" style={{fontSize: '20px'}}>About Me</Link>
              <Link to="/content" style={{fontSize: '20px'}}>Content</Link>
              <Link to="/contactme" style={{fontSize: '20px'}}>Contact Me</Link>
            </Navigation>
          </Header>
        );
    }
}