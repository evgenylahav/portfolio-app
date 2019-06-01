import * as React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import im1 from '../../assets/me_young.jpeg';
// import bg_pic from '../../assets/bg_bricks.jpg';
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
            <Container className='landing-page' data-test='landing-page'>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={12} className='person-wrapper'>
                        <Image src={im1} roundedCircle className="profile-pic" />
                        <h2 className='me'>Evgeny Lahav</h2>
                        <h4>Software engineer, practicing with Python, JavaScript and React</h4>
                        <p>This page was created as part of the <a href='https://www.100daysofcode.com/' target="_blank" rel="noopener noreferrer">100 Days of Code</a> initiative. It took me the first 30 days of the commitment, to create the first beta version of the site.</p>
                        <p>Since already created it, I thought it would be a good idea to have a blog section as well, which I'm planning to maintain and add new content from time to time.</p>
                        <hr />
                        <h4>Check out my <Link to="/portfolio-app/resume">resume</Link>,  
                                         <Link to='/portfolio-app/aboutme'> about me</Link> and my 
                                         <Link to='/portfolio-app/blog'> blog</Link> and be in touch</h4>
                        {/* <h4>Check out my <a href='/portfolio-app/resume'>resume</a>, <a href='/portfolio-app/aboutme'>about me</a> and my <a href='/portfolio-app/blog'>blog</a> and be in touch</h4> */}
                    </Col>
                </Row>
                {/* <Social /> */}
            </Container>
        );
    }
}