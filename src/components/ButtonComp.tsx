import * as React from 'react';
import Button from 'react-bootstrap/Button';

handleClick(){
  
}

export interface ButtonCompState {

}


export class ButtonComp extends React.Component<{}, ButtonCompState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <Button 
                variant="primary" 
                size="lg"
                onClick={}
            >
            Large button
            </Button>
        );
    }
}