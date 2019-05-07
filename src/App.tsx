import * as React from 'react';

import './App.css';
import { FooterComp } from './components/FooterComp';
import { Router } from './components/Router';
import { MyNavbar } from './components/MyNavbar';
import { Jumbotron } from './components/Jumbotron';
import { NavigationBar } from './components/NavigationBar';
import { Layout, Content } from 'react-mdl'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhoneSquare, faAt } from '@fortawesome/free-solid-svg-icons'

library.add(faPhoneSquare, faAt)

function App() {
  return (
    <div>
      <Layout>
        {/* <HeaderComp /> */}
        <Content>
          <NavigationBar />
          <Jumbotron />
          <Router />
          <FooterComp />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
