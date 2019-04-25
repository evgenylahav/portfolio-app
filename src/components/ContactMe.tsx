import * as React from 'react';

export interface ContactMeState {

}

export class ContactMe extends React.Component<{}, ContactMeState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <h1>Contact Me</h1>
        );
    }
}