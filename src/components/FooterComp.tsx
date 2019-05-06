import React from 'react';
import { AwesomeButtonSocial } from 'react-awesome-button';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl'
import './Footer.scss';
// import {Jumbotron} from 'react-bootstrap';

export interface FooterCompProps {}
export interface FooterCompState {}

const AwesomeButtonStyles = require('react-awesome-button/src/styles/styles.scss')


export class FooterComp extends React.Component<FooterCompProps, FooterCompState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <Footer className='footer-color' size="mini">
                <FooterSection type="left" logo="Title">
                    <FooterLinkList>
                        <a href="#">Help</a>
                        <a href="#">Privacy & Terms</a>
                    </FooterLinkList>
                </FooterSection>
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
                    url="https://www.linkedin.com/in/evgeny-lahav"
                >
                </AwesomeButtonSocial>
            </Footer>
        );
    }
}