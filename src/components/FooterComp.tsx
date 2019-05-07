import React from 'react';
import { AwesomeButtonSocial } from 'react-awesome-button';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl'
import { Social } from './Social';
import './FooterComp.scss';

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
            <Footer className='footer' size="mini">
                <FooterSection type="top">
                    <Social />
                </FooterSection>
            </Footer>
        );
    }
}