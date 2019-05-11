import * as React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import im1 from '../../assets/me_young.jpeg';
import './LandingPage.scss';

export interface LandingPageProps {}
export interface LandingPageState {}

export class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <Container>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={12} className='person-wrapper'>
                        <Image src={im1} roundedCircle className="profile-pic" />
                        <h2 className='me'>Evgeny Lahav</h2>
                        <h4>Software engineer, practicing with Python, JavaScript and React</h4>
                        <h4>Check out my <a href='/resume'>resume</a>, <a href='/aboutme'>about me</a> and my <a href='/blog'>blog</a> and be in touch</h4>
                    </Col>
                </Row>
                {/* <Social /> */}
            </Container>
        );
    }
}