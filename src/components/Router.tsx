import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { Resume } from './Resume';
import { AboutMe } from './AboutMe';
import { ContactMe } from './ContactMe';
import { Content } from './Content';

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
                <Route path="/contactme" component={ContactMe}/>
            </Switch>
            
        );
    }
}