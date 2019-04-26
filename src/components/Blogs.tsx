import * as React from 'react';

export interface BlogsState {

}

export class Blogs extends React.Component<{}, BlogsState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <h1>Blogs</h1>
        );
    }
}