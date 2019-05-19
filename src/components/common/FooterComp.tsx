import React from 'react';
import { Social } from './Social';
import './FooterComp.scss';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface FooterCompProps {}
export interface FooterCompState {}

export class FooterComp extends React.Component<FooterCompProps, FooterCompState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
                <Row style={{backgroundColor: "#aaa"}}>
                    <Col xs={12} sm={4} style={{margin: '30px'}} >
                        <span style={{margin: '50px'}}>
                            <FontAwesomeIcon icon="copyright" />  Evgeny Lahav
                        </span>
                    </Col>
                    <Col xs={12} sm={6} style={{margin: '20px', marginLeft: '50px'}}>
                        <Social />
                    </Col>
                </Row>

        );
    }
}