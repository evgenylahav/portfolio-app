import React from 'react';
import ReactDOM, { render } from 'react-dom';
import renderer from 'react-test-renderer';
import { App } from '.';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { testNameToKey } from 'jest-snapshot/build/utils';

const renderTester = (component) => {
    const div = document.createElement('div');
    ReactDOM.render(component, div);
    ReactDOM.unmountComponentAtNode(div);
};

const shallowTester = (component, tag, value) => {
    const element = shallow(component);
    return expect(element.find(`[data-test='${tag}']`).length).toBe(value);
}

const testSnapShot = (inComponent) => {
    const component = renderer.create(inComponent);
    const tree = component.toJSON();
    return expect(tree).toMatchSnapshot();
}


describe('App unit test', () => {
    // it('renders without crashing', () => {
    //   renderTester(
    //     <MemoryRouter>
    //         <App />
    //     </MemoryRouter>
    //   );
    // });
  
    it('checks that only one component is created', () => {
      shallowTester(<App />, 'app-page', 1);
    });
  
    // test('has a valid snapshot', () => {  
    //   testSnapShot(
    //     <MemoryRouter>
    //         <App />
    //     </MemoryRouter>
    //   );
    // });
});