import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Resume } from './pages/Resume';
import { AboutMe } from './pages/AboutMe';
import { ContactMe } from './others/ContactMe';
import { Content } from './pages/Content';
import { Blog } from './pages/Blog';

import { BlogPythonExercises } from './content/Blog_Python_Exercises';
import { BlogPythonUnittest } from './content/Blog_Python_Unittest';
import { BlogJSArrays } from './content/Blog_JS_Arrays';

export interface RouterProps {}
export interface RouterState {}

export class Router extends React.Component<RouterProps, RouterState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <Switch>
                <Route exact path="/portfolio-app" component={LandingPage}/>
                <Route path="/portfolio-app/resume" component={Resume}/>
                <Route path="/portfolio-app/aboutme" component={AboutMe}/>
                <Route path="/portfolio-app/content" component={Content}/>
                <Route path="/portfolio-app/blog" component={Blog}/>
                    <Route path="/portfolio-app/blog_1" component={BlogPythonExercises}/>
                    <Route path="/portfolio-app/blog_2" component={BlogPythonUnittest}/>
                    <Route path="/portfolio-app/blog_3" component={BlogJSArrays}/>
                {/* </Route> */}
                <Route path="/contactme" component={ContactMe}/>
            </Switch>
            
        );
    }
}