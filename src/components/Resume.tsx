import * as React from 'react';

export interface ResumeCompProps {

}

export interface ResumeCompState {

}

export class Resume extends React.Component<ResumeCompProps, ResumeCompState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <h1>Resume</h1>
        );
    }
}