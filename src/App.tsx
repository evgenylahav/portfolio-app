import * as React from 'react';

import './App.css';
import { HeaderComp } from './components/HeaderComp';
// import { FooterComp } from './components/FooterComp';
import { Router } from './components/Router';
import { Layout, Content } from 'react-mdl'

function App() {
  return (
    <div>
      <Layout>
        <HeaderComp />
        <Content>
          <Router />
          {/* <FooterComp /> */}
        </Content>
      </Layout>
    </div>
  );
}

export default App;
