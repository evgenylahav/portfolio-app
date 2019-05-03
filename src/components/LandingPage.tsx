import * as React from 'react';
import { Grid, Cell } from 'react-mdl';
import { AwesomeButtonSocial } from 'react-awesome-button';
import logo from "../assets/Lahav.png"
import './LandingPage.scss';

export interface LandingPageProps {

}

export interface LandingPageState {

}

const AwesomeButtonStyles = require('react-awesome-button/src/styles/styles.scss')

export class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div style={{ width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                            src={logo}
                            alt='avatar'
                            className='avatar-img'
                        />
                        <div className='banner-text'>
                            <h1>Software Engineer</h1>
                            <hr />
                            <h2>Python | JavaScript | React</h2>
                            <div className='social-links'>
                                <AwesomeButtonSocial
                                    cssModule={AwesomeButtonStyles}
                                    type="twitter"
                                    href="https://twitter.com/kodon23"
                                    target="_blank"
                                >
                                </AwesomeButtonSocial>
                                <AwesomeButtonSocial
                                    cssModule={AwesomeButtonStyles}
                                    type="github"
                                    href="https://github.com/evgenylahav"
                                    target="_blank"
                                >
                                </AwesomeButtonSocial>
                                <AwesomeButtonSocial
                                    cssModule={AwesomeButtonStyles}
                                    type="linkedin"
                                    href="https://www.linkedin.com/in/evgeny-lahav"
                                    target="_blank"
                                >
                                </AwesomeButtonSocial>
                                <AwesomeButtonSocial
                                    cssModule={AwesomeButtonStyles}
                                    type="youtube"
                                    href="https://www.linkedin.com/in/evgeny-lahav"
                                    target="_blank"
                                >
                                </AwesomeButtonSocial>
                            </div>
                        </div>
                    </Cell>
                </Grid>
                {/* <CarouselComp /> */}
            </div>
        );
    }
}