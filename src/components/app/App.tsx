import * as React from 'react';

import './App.css';
import { Router, Jumbotron, NavigationBar, FooterComp } from '../';

import { Layout, Content } from 'react-mdl';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faVenus, faUsers, faPlaneDeparture, faChild,
         faBasketballBall, faHamburger, faCoffee, faTv, faDog,
         faCalendarAlt, faTags, faCopyright } from '@fortawesome/free-solid-svg-icons';
// import { Container, Col } from 'react-bootstrap';
// import { SideBar } from './components/common/SideBar';

library.add(faVenus, faUsers, faPlaneDeparture, faBasketballBall, 
            faHamburger, faCoffee, faTv, faChild, faDog, faCalendarAlt, faTags, faCopyright);

export function App() {
  return (
    <div data-test="app-page">
      <Layout>
        <NavigationBar />
        {/* <SideBar /> */}
        <Content>
            <Jumbotron />
            <Router />
            <FooterComp />
        </Content>
      </Layout>
    </div>
  );
}

