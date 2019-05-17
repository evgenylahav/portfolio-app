import * as React from 'react';

import './App.css';
import { Router } from './components/Router';
import { Jumbotron } from './components/common/Jumbotron';
import { NavigationBar } from './components/common/NavigationBar';
import { Layout, Content } from 'react-mdl';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faVenus, faUsers, faPlaneDeparture, faChild,
         faBasketballBall, faHamburger, faCoffee, faTv, faDog,
         faCalendarAlt, faTags } from '@fortawesome/free-solid-svg-icons'
import { FooterComp } from './components/common/FooterComp';

library.add(faVenus, faUsers, faPlaneDeparture, faBasketballBall, 
            faHamburger, faCoffee, faTv, faChild, faDog, faCalendarAlt, faTags);

function App() {
  return (
    <div>
      <Layout>
        <NavigationBar />
        <Content>
            <Jumbotron />
            <Router />
            {/* <FooterComp /> */}
        </Content>
      </Layout>
    </div>
  );
}

export default App;
