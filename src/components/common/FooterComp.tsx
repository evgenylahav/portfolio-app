import React from 'react';
import { Footer, FooterSection } from 'react-mdl'
import StickyFooter from 'react-sticky-footer';

import { Social } from './Social';
import './FooterComp.scss';
import { Row } from 'react-bootstrap';

export interface FooterCompProps {}
export interface FooterCompState {}

export class FooterComp extends React.Component<FooterCompProps, FooterCompState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <StickyFooter
                bottomThreshold={50}
                normalStyles={{
                backgroundColor: "#999999",
                padding: "2rem"
                }}
                stickyStyles={{
                backgroundColor: "rgba(255,255,255,.8)",
                padding: "2rem"
                }}
            >
                Add any footer markup here
            </StickyFooter>
            // <Footer className='footer' size="mini">
            //     <FooterSection type="top">
            //         <Row className="footer-row">
            //             {/* <p>Evgeny Lahav. SW Developer</p>
            //             <p>054-4486872</p>
            //             <p>evgeny.lahav@gmail.com</p> */}
            //             <span style={{paddingLeft: '30px'}}>Evgeny Lahav. SW Developer</span>
            //             <span></span>
            //             <span style={{paddingLeft: '30px'}}>
            //                 <Social />
            //             </span>
            //         </Row>
            //     </FooterSection>
            // </Footer>
        );
    }
}