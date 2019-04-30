import * as React from 'react';
import { Cell,  Grid } from 'react-mdl';


export interface ResumeLineProps {
    startYear: string;
    endYear: string;
    placeName: string;
    description: string;
}
export interface ResumeLineState {

}

export class ResumeLine extends React.Component<ResumeLineProps, ResumeLineState> {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.placeName}</h4>
                    <p>{this.props.description}</p>
                
                </Cell>
            </Grid>
        );
    }
}