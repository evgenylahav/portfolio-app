import * as React from 'react';
import { Container, Col, Row, ProgressBar } from 'react-bootstrap';

export interface SkillsProps {
    skill: string;
    skillLevel: number;
}
export interface SkillsState {

}

export class Skills extends React.Component<SkillsProps, SkillsState> {
    render() {
        return(
            <Container>
                {/* <Row> */}
                <Col sm={8} xs={12}>
                    <div style={{display: 'flex'}}>
                        {this.props.skill}
                    </div>
                </Col>
                <Col sm={12} xs={12}>
                    <div>
                        <ProgressBar 
                            now={this.props.skillLevel}
                            style={{color: 'green', marginBottom: '20px'}}
                        />
                    </div>
                </Col>
                {/* </Row> */}
            </Container>
        );
    }
}
