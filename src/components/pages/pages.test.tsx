import React from 'react';
import ReactDOM, { render } from 'react-dom';
import renderer from 'react-test-renderer';
import { AboutMe, Resume, LandingPage, Blog } from '.';
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

describe('AboutMe Component unit test', () => {
    it('renders without crashing', () => {
      renderTester(<AboutMe />)
    });
  
    it('checks that only one component is created', () => {
      shallowTester(<AboutMe />, 'aboutme-div', 1);
    });
  
    test('has a valid snapshot', () => {  
      testSnapShot(<AboutMe />);
    });
});

describe('Resume Component unit test', () => {
    it('renders without crashing', () => {
      renderTester(<Resume />)
    });
  
    it('checks that only one component is created', () => {
      shallowTester(<Resume />, 'resume-page', 1);
    });
  
    test('has a valid snapshot', () => {  
      testSnapShot(<Resume />);
    });
});

describe('Landing page Component unit test', () => {
    it('renders without crashing', () => {
      renderTester(
        <MemoryRouter>
            <LandingPage />
        </MemoryRouter>
      );
    });
  
    it('checks that only one component is created', () => {
      shallowTester(<LandingPage />, 'landing-page', 1);
    });
  
    test('has a valid snapshot', () => {  
      testSnapShot(
        <MemoryRouter>
            <LandingPage />
        </MemoryRouter>
      );
    });
});

describe('Blog Component unit test', () => {
    it('renders without crashing', () => {
      renderTester(
        <MemoryRouter>
            <Blog />
        </MemoryRouter>
      );
    });
  
    it('checks that only one component is created', () => {
      shallowTester(<Blog />, 'blog-page', 1);
    });
  
    test('has a valid snapshot', () => {  
      testSnapShot(
        <MemoryRouter>
            <Blog />
        </MemoryRouter>
      );
    });
});