import React from 'react';
import { Footer, FooterSection } from 'react-mdl'
import { Social } from './Social';
import './FooterComp.scss';

export interface FooterCompProps {}
export interface FooterCompState {}

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