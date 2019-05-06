import * as React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Grid, Cell } from 'react-mdl';
import { ResumeLine } from './ResumeLine';
import { Skills } from './Skills';
import board from '../assets/blackboard-chalk.jpg';
import { Social } from './Social';
import im1 from "../assets/Image-1.png";
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
                {/* <Image src={board} className="resume-header-image" /> */}
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
                                startYear='2013' 
                                endYear='current' 
                                placeName='Applied Materials'
                                description='Software engineer: ...'
                            />
                            <ResumeLine 
                                startYear='2007' 
                                endYear='2013' 
                                placeName='Applied Materials'
                                description='System engineer: ...'
                            />
                            <ResumeLine 
                                startYear='2006' 
                                endYear='2007' 
                                placeName='Applied Materials'
                                description='Software QA engineer: ...'
                            />
                            <hr/>
                            <h2>Education</h2>
                            <ResumeLine 
                                startYear='2014' 
                                endYear='2018' 
                                placeName='Ben-Gurion University'
                                description='M.Sc in Electro-optical engineering. Grades average of 90. Thesis subject...'
                            />
                            <ResumeLine 
                                startYear='2001' 
                                endYear='2005' 
                                placeName='Ben-Gurion University'
                                description='B.Sc in Bio-Medical Engineering. Grades average of 85.'
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
                    <Social />
                </Container>
            </div>
        );
    }
}
                    /* <Cell className='resume-left-col' col={4}>
                        
                    </Cell>
                    <Cell className='resume-right-col'  col={8}>
                        
                    </Cell>
                </Grid> */
            // </div>
    //     );
    // }
// }