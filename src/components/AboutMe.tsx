import * as React from 'react';

export interface AboutMeState {

}

export class AboutMe extends React.Component<{}, AboutMeState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <h1>About Me</h1>
        );
    }
}