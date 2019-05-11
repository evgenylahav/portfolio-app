import * as React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { ResumeLine } from '../common/ResumeLine';
import { Skills } from '../common/Skills';
import im1 from "../../assets/Image-1.png";
import bgu from '../../assets/bgu.png';
import amat from '../../assets/amat.jpg'
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
                            <h3 style={{textAlign: 'center'}}>Evgeny Lahav</h3>
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
                            <h3>Skills</h3>
                            <Skills skill='Python' skillLevel={70}/>
                            <Skills skill='JavaScript' skillLevel={55}/>
                            <Skills skill='React' skillLevel={65}/>
                            <Skills skill='Scientific Programming' skillLevel={85}/>
                            <Skills skill='SW Design and Architecture' skillLevel={60}/>
                            <Skills skill='Clean Code' skillLevel={80}/>
                            <hr/>
                            <h3>Side Projects</h3>
                            <ul>
                                <li>Personal portfolio website</li>
                                <li><a href='https://exercism.io/' target="_blank">Excersicm: Python, JavaScript</a></li>
                                <li><a href='https://www.100daysofcode.com/' target="_blank">100 Days Of Code</a></li>
                            </ul>

                        </Col>
                        <Col sm={1} className='verticalLine' />
                        
                        <Col xs={12} sm={7}>
                            <h3>Experience</h3>
                            <ResumeLine 
                                startYear='2016' 
                                endYear='current' 
                                placeName='Applied Materials'
                                img={amat}
                                position='Senior Software engineer'
                                description={[`Senior Software engineer in the system SW group. The group is responsible for providing quick 
                                               and quality solutions to support the calibration process of the tools.`,
                                              `My responsibility was leading the transformation of the group technology from development
                                               in scientific programming languages, to modern full-stack development with front-end in React js and
                                               back-end in Java and Python`,
                                              'Leading training and educational activities for the group by writing a weekly blog, preparing workshops and trainings of different sorts',
                                              `Documentation and implementation of the SW development concepts as defined by the SW architecture group:
                                               CI pipeline, Git components, Modular project structures, etc...`]}
                            />
                            <ResumeLine 
                                startYear='2013' 
                                endYear='2016' 
                                placeName='Applied Materials'
                                img={amat}
                                position='Software engineer'
                                description={['Software engineer in the apps and protptypes team',
                                              'Responsible for developing applicationsand calibrations for the Algorithms, System and Applications groups',
                                              'The development was done with scientific programming tools and concepts - mainly with Python and Matlab']}
                            />
                            <ResumeLine 
                                startYear='2007' 
                                endYear='2013' 
                                placeName='Applied Materials'
                                img={amat}
                                position='System engineer'
                                description={['Responsible for the development side of a highly sophisticated multi-disciplinary tool',
                                               'Defining and executing C&Fs and feasibility tests',
                                               'Defining SW requirements specifications',
                                               'Developing analytic tools for data analysis and tool calibration']}
                            />
                            <ResumeLine 
                                startYear='2006' 
                                endYear='2007' 
                                placeName='Applied Materials'
                                img={amat}
                                position='Software QA engineer'
                                description={['Execution of manual SW qualification', 'Leading a team of 5 testers']}
                            />
                            <hr/>
                            <h3>Education</h3>
                            <ResumeLine 
                                startYear='2014' 
                                endYear='2018' 
                                placeName='Ben-Gurion University'
                                position='M.Sc in Electro-optical engineering'
                                img={bgu}
                                description={['Grades average of 90', 'Specialization - optical computing',
                                              `Thesis subject - new optical encryption system based on encryption of information of the Fourier magnitude
                                               creating a non-linear and safe encryption system, which is simple for implementation and hard for hacking`]}
                            />
                            <ResumeLine 
                                startYear='2001' 
                                endYear='2005' 
                                placeName='Ben-Gurion University'
                                position='B.Sc in Bio-Medical Engineering'
                                img={bgu}
                                description={['Grades average of 85', 'Specialization - electronics and image processing']}
                            />
                            <hr/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}