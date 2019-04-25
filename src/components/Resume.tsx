import * as React from 'react';

export interface ResumeCompState {

}

export class Resume extends React.Component<{}, ResumeCompState> {
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