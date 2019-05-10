import * as React from 'react';
import { Container, Col, Image } from 'react-bootstrap';
import { ImageGallery } from '../common/ImageGallery';
import './AboutMe.scss';
import profilePic from '../../assets/Image-1.png';
import family from '../../assets/family.jpeg';
import programmingPic from '../../assets/programming.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export interface AboutMeProps {}
export interface AboutMeState {}

export class AboutMe extends React.Component<AboutMeProps, AboutMeState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div className='aboutme-grid'>
                <h3>Discover who am I as a person outside of my day job</h3>            
                <Container>
                    <Col xs={12} sm={12} sm-offset={2} style={{paddingBottom: '100px'}}>
                        <Image src={profilePic} roundedCircle className="about-profile-pic" />
                        <h2>A few facts about myself</h2>
                        <div>
                            <FontAwesomeIcon icon="plane-departure"/>
                            <p style={{display: "inline-block"}}>
                                I love traveling. Especially with my family. We have explored several unforgetable places and hopefully many more
                                will follow.
                            </p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon="basketball-ball"/>
                            <p style={{display: "inline-block"}}>
                                I am a sports enthusiast, although, unfortunatelly, as a viewer. I love Tennis and Basketball the most, 
                                but during big events such as the Olympics or the World Cup, I watch everything there is.
                            </p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon="hamburger"/>
                            <p>
                                I love food. Both making and eating. This is really a weakness of mine, and I'm paying for that with a horrible
                                BMI rate.
                            </p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon="coffee"/>
                            <p>
                                I love coffee - can't live without it. I usually drink 5-6 cups a day, with a mixture of cappucinno,
                                black Turkish and my favorite - double espresso.
                            </p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon="tv"/>
                            <p>
                                I am a fan of TV shows, watching quite a few on Netflix and other platforms. Among the best I've
                                watched are: 'Better Call Soul', 'Dark', 'Bron', 'Breaking Bad', 'Fargo', 'Narcos' and others
                            </p>
                        </div>
                         
                        <Image src={family} roundedCircle className="about-profile-pic" />
                        <h2>My family</h2>
                        <div>
                            <FontAwesomeIcon icon="venus"/>
                            <p>
                                I am married to Yardena, a school councelor and a pschycoterapist, and one of the 
                                smartest people I know. 
                            </p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon="child"/>
                            <p>
                                I am a father of Romi who is 7 now, and is my biggest love and pride in the world. 
                            </p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon="dog"/>
                            <p>
                                We have a lovely little Yorkshire Terrier named Belle, who is a genuine part of our family, and who never 
                                spends a night outside of our bed.
                            </p>
                        </div>

                         <Image src={programmingPic} roundedCircle className="about-profile-pic" />
                         <h2>Me as a software engineer</h2>
                         <p>
                             I made quite a few turn arounds during my proffessional career. First I was in love with image processing. 
                             Then with elecro-optics, specifically with optical design, but now I feel that I found what I was looking 
                             for all this time - software. 
                         </p>
                         <p>
                             Having the experience and a broader look of the makes me a better programmer. I guess that it's called maturity,
                             and I found, that it is a required asset in our industry.
                         </p>
                         <p>
                             I really am into good coding practices. I watched many lectures of SW world icons as 'Uncle Bob', Martin Fowler,
                             Linus Torvalds, Guido Van-Rossum, Kevlin Henney, Raymond Hettinger and others.
                             I also have read several books regarding this subject, amongs them 'Clean Code' by Bob Martin and 'Refactoring' by Martin Fowler.
                         </p>
                         <p>
                             I understand that learning is not enough. In order to become profficient and comfortable with new and existing technologies,
                             you have to practice, and practice a lot. The same as we expect our pilots, phisicians and repair-men to be experts, so must we.
                             I found that except practicing and getting better all the time in our daily work, there are other great platforms like
                             excersism.io, freeCodeCamp, Medium, youtube and others.
                         </p>
                         <p>
                             One thing that I'm still postponing, hopefully not for long, is taking part in an open source code project.
                             It should be really awesome, and I can't wait to get to it rather sooner than later.
                         </p>


                         <h2>Check us out...</h2>
                         <ImageGallery />
                    </Col>
                </Container>               
            </div>
        );
    }
}