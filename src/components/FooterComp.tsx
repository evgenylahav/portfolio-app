import React from 'react';
import { AwesomeButtonSocial } from 'react-awesome-button';

export interface FooterCompState {

}

const AwesomeButtonStyles = require('react-awesome-button/src/styles/styles.scss')


export class FooterComp extends React.Component<{}, FooterCompState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }


    public render() {
        return (
            <div>                
                <AwesomeButtonSocial
                    cssModule={AwesomeButtonStyles}
                    type="twitter"
                    url="https://twitter.com/kodon23"
                >
                </AwesomeButtonSocial>
                <AwesomeButtonSocial
                    cssModule={AwesomeButtonStyles}
                    type="github"
                    url="https://github.com/evgenylahav"
                >
                </AwesomeButtonSocial>
                <AwesomeButtonSocial
                    cssModule={AwesomeButtonStyles}
                    type="linkedin"
                    url="https://il.linkedin.com/in/evgeny-lahav"
                >
                </AwesomeButtonSocial>
            </div>
        );
    }
}