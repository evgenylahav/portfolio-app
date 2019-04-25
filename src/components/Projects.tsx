import * as React from 'react';

export interface ProjectsState {

}

export class Projects extends React.Component<{}, ProjectsState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <h1>Projects</h1>
        );
    }
}