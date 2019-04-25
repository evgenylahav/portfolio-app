import * as React from 'react';

import './App.css';
import { NavbarComp } from './components/NavbarComp';
import Navbar from 'react-bootstrap/Navbar';
import { CarouselComp } from './components/CarouselComp';
import { ButtonComp } from './components/ButtonComp';
import { FooterComp } from './components/FooterComp';
import { Router } from './components/Router';
import { Resume } from './components/Resume';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl'
import { Link } from 'react-router-dom';
import logo from './assets/logo_small.png';

function App() {
  return (
    <div>
      <Layout>
        <Header>
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
        <Content>
          <CarouselComp />
          <Router />
          <Footer size="mini">
            <FooterSection type="left" logo="Title">
              <FooterLinkList>
                <a href="#">Help</a>
                <a href="#">Privacy & Terms</a>
              </FooterLinkList>
              <FooterComp />
            </FooterSection>
          </Footer>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
