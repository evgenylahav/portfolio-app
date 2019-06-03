import React from 'react';
import ReactDOM, { render } from 'react-dom';
import renderer from 'react-test-renderer';
import { BlogPost, CodeSnippet, Skills, Social, ResumeLine, Jumbotron, FooterComp, NavigationBar } from '.';
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

describe('Footer Component unit test', () => {
    it('renders without crashing', () => {
      renderTester(<FooterComp />)
    });
  
    it('checks that only one footer component is created', () => {
      shallowTester(<FooterComp />, 'footer-row', 1);
    });
  
    test('has a valid snapshot', () => {  
      testSnapShot(<FooterComp />);
    });
});


describe('Jumbotron unit test', () => {
    it('renders without crashing', () => {
      renderTester(<Jumbotron />)
    });
  
    it('checks that only one jumbotron is created', () => {
      shallowTester(<Jumbotron />, 'jumbotron-test', 1);
    });
  
    test('has a valid snapshot', () => {  
      testSnapShot(<Jumbotron />);
    });
});


describe('Resume line unit test', () => {
    const props = {
        img: 1,
        startYear: '1955',
        endYear: '1978',
        placeName: 'Aquarium',
        position: 'shark eater',
        description: ['eating', 'many', 'sharks']
    };
    it('renders without crashing', () => {
        renderTester(<ResumeLine {...props} />)
    });
  
    it('checks that only one skill is created', () => {
        shallowTester(<ResumeLine {...props} />, 'resume-line-container', 1);
    });
  
    test('has a valid snapshot', () => {
        testSnapShot(<ResumeLine {...props} />);
    });
  });


describe('Social unit test', () => {
    it('renders without crashing', () => {
      renderTester(<Social />)
    });
  
    it('checks that only one skill is created', () => {
      shallowTester(<Social />, 'social-div', 1);
    });
  
    test('has a valid snapshot', () => {  
      testSnapShot(<Social />);
    });
});


describe('Skills unit test', () => {
    const props = {
        skill: 'running',
        skillLevel: 55,
    };
    it('renders without crashing', () => {
        renderTester(<Skills {...props} />)
    });
  
    it('checks that only one skill is created', () => {
        shallowTester(<Skills {...props} />, 'skills-container', 1);
    });
  
    test('has a valid snapshot', () => {
        testSnapShot(<Skills {...props} />);
    });
  });


describe('Code snippet unit test', () => {
    const props = {
      code: 'import hello',
      language: 'python',
    };
    it('renders without crashing', () => {
        renderTester(<CodeSnippet {...props} />)
    });
  
    it('checks that only one blog post is created', () => {
        shallowTester(<CodeSnippet {...props} />, 'code-snippet-div', 1);
    });
  
    // test('has a valid snapshot', () => {
    //     testSnapShot(<CodeSnippet {...props} />);
    // });
  });
  


describe('Blog post unit test', () => {
  const props = {
    title: "blog title",
    header: "blog header",
    text: "bla bla bla",
    url: "http://www.google.com/",
    date: "23-March-2019",
    tags: "python",
    img: "temp"
  };
  it('renders without crashing', () => {
    renderTester(
        <MemoryRouter>
            <BlogPost {...props} />
        </MemoryRouter>
    );
  });

  it('checks that only one blog post is created', () => {
    shallowTester(<BlogPost {...props} />, 'blog-card', 1);
  });

  test('has a valid snapshot', () => {
    testSnapShot(
        <MemoryRouter>
            <BlogPost {...props} />
        </MemoryRouter>
    );
  });
});

describe('Navigation bar unit test', () => {
    it('renders without crashing', () => {
      renderTester(
        <MemoryRouter>
          <NavigationBar />
        </MemoryRouter>
      );
    });
  
    it('checks that only one navbar is created', () => {
      shallowTester(<NavigationBar />, 'navbar-styles', 1);
    });
  
    test('has a valid snapshot', () => {  
      testSnapShot(
        <MemoryRouter>
            <NavigationBar />
        </MemoryRouter>
      );
    });
});