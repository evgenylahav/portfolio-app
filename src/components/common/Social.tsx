import * as React from 'react';
import { Row } from 'react-bootstrap';
import { AwesomeButtonSocial } from 'react-awesome-button';
// import im1 from '../assets/me_young.jpeg';
import './Social.scss';

export interface SocialProps { }
export interface SocialState { }

const AwesomeButtonStyles = require('react-awesome-button/src/styles/styles.scss')

export class Social extends React.Component<SocialProps, SocialState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div>
                <Row className="social-links">
                    <AwesomeButtonSocial
                        cssModule={AwesomeButtonStyles}
                        type="twitter"
                        href="https://twitter.com/kodon23"
                        target="_blank"
                    >
                    </AwesomeButtonSocial>
                    <AwesomeButtonSocial
                        cssModule={AwesomeButtonStyles}
                        type="github"
                        href="https://github.com/evgenylahav"
                        target="_blank"
                    >
                    </AwesomeButtonSocial>
                    <AwesomeButtonSocial
                        cssModule={AwesomeButtonStyles}
                        type="linkedin"
                        href="https://www.linkedin.com/in/evgeny-lahav"
                        target="_blank"
                    >
                    </AwesomeButtonSocial>
                    <AwesomeButtonSocial
                        cssModule={AwesomeButtonStyles}
                        type="youtube"
                        href="https://www.linkedin.com/in/evgeny-lahav"
                        target="_blank"
                    >
                    </AwesomeButtonSocial>
                </Row>
            </div>
        );
    }
}