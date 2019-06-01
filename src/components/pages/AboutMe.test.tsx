import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { AboutMe } from './AboutMe';
import { shallow } from 'enzyme';
import { testNameToKey } from 'jest-snapshot/build/utils';


describe('AboutMe unit test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AboutMe />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('checks that only one about me page is created', () => {
    const element = shallow(
      <AboutMe />
    );
    expect(element.find(`[data-test='aboutme-div']`).length).toBe(1);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <AboutMe />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
