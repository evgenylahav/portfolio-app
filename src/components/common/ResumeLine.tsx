import * as React from 'react';
import { Cell,  Grid } from 'react-mdl';
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
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <Image 
                        className="resume-place-name-image"
                        src={this.props.img}
                        thumbnail
                    />
                    <h4 style={{marginTop: '0px'}}>{this.props.placeName}</h4>
                    <h6>{ this.props.position }</h6>
                    <ul> {this.props.description.map((item) => <li>{ item }</li>)} </ul>
                    {/* <p>{ this.props.description }</p> */}
                
                </Cell>
            </Grid>
        );
    }
}