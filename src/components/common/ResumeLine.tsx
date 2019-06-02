import * as React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import './ResumeLine.scss';

export interface ResumeLineProps {
    img;
    startYear: string;
    endYear: string;
    placeName: string;
    position: string;
    description: string[];
}
export interface ResumeLineState {}

export class ResumeLine extends React.Component<ResumeLineProps, ResumeLineState> {
    render() {
        return(
            <Container data-test="resume-line-container">
                <Row>
                    <Col sm={3} xs={12}>
                        <p style={{fontSize: '18px', paddingTop: '5px'}}>{this.props.startYear} - {this.props.endYear}</p>
                    </Col>
                    <Col sm={9} xs={12}>
                        <Image 
                            className="resume-place-name-image"
                            src={this.props.img}
                            thumbnail
                        />
                        <h4 style={{marginTop: '0px'}}>{this.props.placeName}</h4>
                        <h6 style={{fontWeight: 'bold'}}>{ this.props.position }</h6>
                        <ul> {this.props.description.map((item) => <li>{ item }</li>)} </ul>
                        {/* <p>{ this.props.description }</p> */}
                    
                    </Col>
                </Row>
            </Container>
        );
    }
}