import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LandingPage, Resume, AboutMe, Blog } from './pages';

import { BlogPythonNamedTuple, BlogPythonFirstOrderFunctions, BlogPythonDunders,
    BlogPythonClasses, BlogPythonDependencies, BlogPythonDecorators, 
    BlogPythonFunctionsBasic } from './content';

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
                <Route path="/portfolio-app/blog" component={Blog}/>
                <Route path="/portfolio-app/blog_1" component={BlogPythonNamedTuple}/>
                <Route path="/portfolio-app/blog_2" component={BlogPythonFirstOrderFunctions}/>
                <Route path="/portfolio-app/blog_3" component={BlogPythonDunders}/>
                <Route path="/portfolio-app/blog_4" component={BlogPythonClasses}/>
                <Route path="/portfolio-app/blog_5" component={BlogPythonDependencies}/>
                <Route path="/portfolio-app/blog_6" component={BlogPythonDecorators}/>
                <Route path="/portfolio-app/blog_7" component={BlogPythonFunctionsBasic}/>
            </Switch>
        );
    }
}