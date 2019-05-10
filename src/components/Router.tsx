import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Resume } from './pages/Resume';
import { AboutMe } from './pages/AboutMe';
import { ContactMe } from './others/ContactMe';
import { Content } from './pages/Content';
import { Blog } from './pages/Blog';

export interface RouterProps {

}

export interface RouterState {

}

export class Router extends React.Component<RouterProps, RouterState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/resume" component={Resume}/>
                <Route path="/aboutme" component={AboutMe}/>
                <Route path="/content" component={Content}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/contactme" component={ContactMe}/>
            </Switch>
            
        );
    }
}