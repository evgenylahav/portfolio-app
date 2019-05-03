import * as React from 'react';
import { Container, Col, Row, Jumbotron, Image } from 'react-bootstrap';
// import { Grid, Cell } from 'react-mdl';
import { AwesomeButtonSocial } from 'react-awesome-button';
import im1 from '../assets/Image-1.png';
import './LandingPage.scss';

export interface LandingPageProps {

}

export interface LandingPageState {

}

const AwesomeButtonStyles = require('react-awesome-button/src/styles/styles.scss')

export class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Welcome to my page</h2>
                    <p>In this page I'll tell you about myself, and about the content that I want to share with you</p>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={12} className='person-wrapper'>
                        <Image src={im1} roundedCircle className="profile-pic" />
                        <h3>Evgeny Lahav</h3>
                        <p>Software engineer, practicing with Python, JavaScript and React</p>
                    </Col>
                </Row>
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
            </Container>
        );
    }
}