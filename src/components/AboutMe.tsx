import * as React from 'react';
import { Container, Col, Image } from 'react-bootstrap';
import { ImageGallery } from './ImageGallery';
import { Social } from './Social';

import './AboutMe.scss';

import background from '../assets/apple-bg.jpg';
import profilePic from '../assets/Image-1.png';
import programmingPic from '../assets/programming.jpg';

export interface AboutMeProps {

}

export interface AboutMeState {

}

export class AboutMe extends React.Component<AboutMeProps, AboutMeState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div className='aboutme-grid'>
                {/* <Image src={background} className='about-header-image' /> */}
                <h3>Discover who am I as a person outside of my day job</h3>
            
                <Container>
                    <Col xs={12} sm={12} sm-offset={2} style={{paddingBottom: '100px'}}>
                        <Image src={profilePic} roundedCircle className="about-profile-pic" />
                        <h2>A few facts about myself</h2>
                        <p>
                            I am married to Yardena, a school councelor and a pschycoterapist, and one of the 
                            smartest people I know. 
                        </p>
                        <p>
                            I am a father of Romi who is 7 now, and is my biggest love and pride in the world. 
                        </p>
                        <p>
                            I love to travel with my family. We have explored several unforgetable places and hopefully many more
                            will follow.
                        </p>
                        <p>
                            I am a sports enthusiast, although, unfortunatelly, as a viewer. I love Tennis and Basketball the most, 
                            but during big events such as the Olympics or the World Cup, I watch everything there is.
                        </p>
                        <p>
                            I love food. Both making and eating. This is really a weakness of mine, and I'm paying for that with a horrible
                            BMI rate.
                        </p>
                        <p>
                            We have a lovely little Yorkshire Terrier named Belle, who is a genuine part of our family, and who never 
                            spends a night outside of our bed.

                        </p>
                        <p>
                            I love coffee - can't live without it. I usually drink 5-6 cups a day, with a mixture of cappucinno,
                            black Turkish and my favorite - double espresso.
                        </p>
                        <p>
                            I am a fan of TV shows, watching quite a few on Netflix and other platforms. Among the best I've
                            watched are: 'Better Call Soul', 'Dark', 'Bron', 'Breaking Bad', 'Fargo', 'Narcos' and others
                        </p>
                         
                         <Image src={programmingPic} roundedCircle className="about-profile-pic" />
                         <h2>Me as a software engineer</h2>
                         <p>
                             I made quite a few turn arounds during my proffessional career. First I was in love with image processing. 
                             Then with elecro-optics, specifically with optical design, but now I feel that I found what I was looking 
                             for all this time - software. 
                         </p>
                         <p>
                             Having the experience and a broader look of the makes me a better programmer.
                         </p>
                         <h2>Check us out...</h2>
                         <ImageGallery />
                    </Col>
                    <Social />
                </Container>
                
            </div>
        );
    }
}