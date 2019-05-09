import * as React from 'react';
import  { Grid,  Cell, ProgressBar } from 'react-mdl';

export interface SkillsProps {
    skill: string;
    skillLevel: number;
}
export interface SkillsState {

}

export class Skills extends React.Component<SkillsProps, SkillsState> {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <div style={{display: 'flex'}}>
                        {this.props.skill}
                    </div>
                </Cell>
                <Cell col={8}>
                    <div>
                        <ProgressBar 
                            progress={this.props.skillLevel}
                            style={{color: 'green', marginTop: '10px'}}
                        />
                    </div>
                </Cell>

            </Grid>
        );
    }
}
