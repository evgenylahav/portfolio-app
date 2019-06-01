import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Resume } from './Resume';
import { shallow } from 'enzyme';
import { testNameToKey } from 'jest-snapshot/build/utils';


describe('AboutMe unit test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Resume />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('checks that only one about me page is created', () => {
    const element = shallow(
      <Resume />
    );
    expect(element.find(`[data-test='resume-page']`).length).toBe(1);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Resume />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
