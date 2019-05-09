import * as React from 'react';

import './App.css';
import { Router } from './components/Router';
import { Jumbotron } from './components/common/Jumbotron';
import { NavigationBar } from './components/common/NavigationBar';
import { Layout, Content } from 'react-mdl';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhoneSquare, faAt } from '@fortawesome/free-solid-svg-icons'

library.add(faPhoneSquare, faAt)

function App() {
  return (
    <div>
      <Layout>
        <NavigationBar />
        <Content>
            <Jumbotron />
            <Router />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
