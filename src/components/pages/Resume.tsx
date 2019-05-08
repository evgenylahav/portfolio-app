import * as React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { ResumeLine } from '../common/ResumeLine';
import { Skills } from '../common/Skills';
import im1 from "../../assets/Image-1.png";
import './Resume.scss';

export interface ResumeCompProps {}
export interface ResumeCompState {}

export class Resume extends React.Component<ResumeCompProps, ResumeCompState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div>
                <Container className='resume-container'>
                    <h3>My Resume</h3>
                    <Row>
                        <Col xs={12} sm={4}>
                            <div style={{textAlign: 'center'}}>
                                <Image src={im1} roundedCircle className="resume-profile-pic" />
                            </div>
                            <h2 style={{textAlign: 'center'}}>Evgeny Lahav</h2>
                            <h4 style={{color: 'grey', textAlign: 'center'}}>Software Engineer</h4>                 
                            <hr/>
                            <p style={{paddingTop: '5px'}}>An experienced and enthuziastic SW engineer, specializing in Python, JavaScript and React</p>
                            <hr/>
                            <h5>email</h5>
                            <p>evgeny.lahav@gmail.com</p>
                            <h5>mobile</h5>
                            <p>+972-(0)5444-86872</p>
                            <h5>website</h5>
                            <p>...</p>
                            <hr/>
                        </Col>
                        <Col sm={1} className='verticalLine' />
                        
                        <Col xs={12} sm={7}>
                            <h2>Experience</h2>
                            <ResumeLine 
                                startYear='2016' 
                                endYear='current' 
                                placeName='Applied Materials'
                                position='Senior Software engineer'
                                description={['Senior Software engineer: ...']}
                            />
                            <ResumeLine 
                                startYear='2013' 
                                endYear='2016' 
                                placeName='Applied Materials'
                                position='Software engineer'
                                description={['Software engineer: ...']}
                            />
                            <ResumeLine 
                                startYear='2007' 
                                endYear='2013' 
                                placeName='Applied Materials'
                                position='System engineer'
                                description={['System engineer: ...']}
                            />
                            <ResumeLine 
                                startYear='2006' 
                                endYear='2007' 
                                placeName='Applied Materials'
                                position='Software QA engineer'
                                description={['Execution of manual SW qualification', 'Leading a team of 5 testers']}
                            />
                            <hr/>
                            <h2>Education</h2>
                            <ResumeLine 
                                startYear='2014' 
                                endYear='2018' 
                                placeName='Ben-Gurion University'
                                position='M.Sc in Electro-optical engineering'
                                description={['Grades average of 90', 'Thesis subject...']}
                            />
                            <ResumeLine 
                                startYear='2001' 
                                endYear='2005' 
                                placeName='Ben-Gurion University'
                                position='B.Sc in Bio-Medical Engineering'
                                description={['Grades average of 85']}
                            />
                            <hr/>
                            <h2>Skills</h2>
                            <Skills skill='Python' skillLevel={70}/>
                            <Skills skill='JavaScript' skillLevel={50}/>
                            <Skills skill='React' skillLevel={40}/>
                            <Skills skill='Scientific Programming' skillLevel={80}/>
                            <Skills skill='Clean Code' skillLevel={60}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}