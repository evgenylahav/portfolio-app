import * as React from 'react';
import { Container, Col, Row, Jumbotron, Image } from 'react-bootstrap';
import { Social } from './Social';
import im1 from '../assets/me_young.jpeg';
import './LandingPage.scss';

export interface LandingPageProps {}
export interface LandingPageState {}

const AwesomeButtonStyles = require('react-awesome-button/src/styles/styles.scss')

export class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <Container>
                {/* <Jumbotron>
                    <h2>Welcome to my page</h2>
                    <p>In this page I'll tell you about myself, and about the content that I want to share with you</p>
                </Jumbotron> */}
                <Row className="show-grid text-center">
                    <Col xs={12} sm={12} className='person-wrapper'>
                        <Image src={im1} roundedCircle className="profile-pic" />
                        <h2 className='me'>Evgeny Lahav</h2>
                        <h4>Software engineer, practicing with Python, JavaScript and React</h4>
                    </Col>
                </Row>
                <Social />
            </Container>
        );
    }
}