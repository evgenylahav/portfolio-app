import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { testNameToKey } from 'jest-snapshot/build/utils';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';


describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render((
      <Router>
        <App />  
      </Router>
    ), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // test('has a valid snapshot', () => {
  //   const component = renderer.create(
  //     <App />
  //   );
  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
