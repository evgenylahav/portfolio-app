import * as React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import './AboutMe.scss';

import im2 from '../../assets/family.jpeg';
import im3 from '../../assets/kodon_solo.jpeg';
import im7 from '../../assets/romi_bw.jpeg';
import im8 from '../../assets/romi_kodon.jpeg';
import im9 from '../../assets/romi_with_model.jpeg';
import im10 from '../../assets/romi.jpeg';
import im11 from '../../assets/belle.jpeg';
import im12 from '../../assets/romi_an_belle.jpeg';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export interface AboutMeProps { }
export interface AboutMeState { }

export class AboutMe extends React.Component<AboutMeProps, AboutMeState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div className='aboutme-grid' data-test='aboutme-div'>
                {/* <h3>Discover who am I as a person outside of my day job</h3> */}
                <Container>
                    <Row>
                        <Col xs={12} sm={8} style={{ paddingBottom: '100px' }}>
                            {/* <Image src={profilePic} roundedCircle className="about-profile-pic" /> */}
                            <h3>A few facts about myself</h3>
                            <ul>
                                <FontAwesomeIcon icon="plane-departure" />
                                <li>
                                    I love traveling. Especially with my family. We have explored several unforgetable places
                                    and hopefully many more will follow.
                                </li>

                                <FontAwesomeIcon icon="basketball-ball" />
                                <li>
                                    I am a sports enthusiast, although, unfortunatelly, as a viewer. I love Tennis and Basketball
                                    the most, but during big events such as the Olympics or the World Cup, I watch everything there is.
                                </li>

                                <FontAwesomeIcon icon="hamburger" />
                                <li>
                                    I love food. Both making and eating. This is really a weakness of mine, and I'm paying for that with a horrible
                                    BMI rate.
                                </li>

                                <FontAwesomeIcon icon="coffee" />
                                <li>
                                    I love coffee - can't live without it. I usually drink 5-6 cups a day, with a mixture of cappucinno,
                                    black Turkish and my favorite - double espresso.
                                </li>

                                <FontAwesomeIcon icon="tv" />
                                <li>
                                    I am a fan of TV shows, watching quite a few on Netflix and other platforms. Among the best I've
                                    watched are: 'Better Call Soul', 'Dark', 'Bron', 'Breaking Bad', 'Fargo', 'Narcos' and others
                                </li>

                            </ul>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Image src={im10}  style={{maxHeight: '200px', width: 'auto', marginLeft: '50px'}}/>
                            <hr />
                            <Image src={im2}  style={{maxHeight: '200px', width: 'auto', marginLeft: '50px'}}/>
                            <hr />
                        </Col>


                        <Col xs={12} sm={8}>
                            {/* <Image src={family} roundedCircle className="about-profile-pic" /> */}
                            <h3>My family</h3>
                            <ul>
                                <FontAwesomeIcon icon="venus" />
                                <li>
                                    I am happily married to Yardena who I love very much. She is a school councelor and a pschycoterapist, and one of the
                                    smartest people I know. We are best friends for over a decade and a half, and she definitely is the most
                                    influencial person in my life.
                                </li>

                                <FontAwesomeIcon icon="child" />
                                <li>
                                    I am a father of Romi who is 7 now, and is my biggest love and pride in the world.
                                    She is a smart and beautiful girl, who likes to swim, play the piano and watch tv.
                                </li>

                                <FontAwesomeIcon icon="dog" />
                                <li>
                                    We have a lovely little Yorkshire Terrier named Belle, who is a genuine part of our family, and who never
                                    spends a night outside of our bed.
                                </li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Image src={im3}  style={{maxHeight: '200px', width: 'auto', marginLeft: '50px'}}/>
                            <hr />
                            <Image src={im7}  style={{maxHeight: '200px', width: 'auto', marginLeft: '50px'}}/>
                            <hr />
                        </Col>

                        {/* <Image src={programmingPic} roundedCircle className="about-profile-pic" /> */}
                        <h3>Me as a software engineer</h3>
                        <Col xs={12} sm={8} style={{ paddingBottom: '100px' }}>
                            <ul>
                                <li>
                                    I made quite a few turn arounds during my proffessional career. First I was in love with image processing.
                                    Then with elecro-optics, specifically with optical design, but now I feel that I found what I was looking
                                    for all this time - software.
                            </li>
                                <li>
                                    Having the experience and a broader look of the industry, makes me a better programmer. I guess that it's called maturity,
                                    and I found, that it is a required asset in our industry.
                            </li>
                                <li>
                                    I really am into good coding practices. I watched many lectures of SW world icons as 'Uncle Bob', Martin Fowler,
                                    Linus Torvalds, Guido Van-Rossum, Kevlin Henney, Raymond Hettinger and others.
                                    I also have read several books regarding this subject, amongs them 'Clean Code' by Bob Martin and 'Refactoring' by Martin Fowler.
                            </li>
                                <li>
                                    I understand that learning is not enough. In order to become profficient and comfortable with new and existing technologies,
                                    you have to practice, and practice a lot. The same as we expect our pilots, phisicians and repair-men to be experts, so must we.
                                    I found that except practicing and getting better all the time in our daily work, there are other great platforms like
                                    excersism.io, freeCodeCamp, Medium, youtube and others.
                            </li>
                                <li>
                                    One thing that I'm still postponing, hopefully not for long, is taking part in an open source code project.
                                    It should be really awesome, and I can't wait to get to it rather sooner than later.
                            </li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Image src={im8}  style={{maxHeight: '200px', width: 'auto', marginLeft: '50px'}}/>
                            <hr />
                            <Image src={im9}  style={{maxHeight: '200px', width: 'auto', marginLeft: '50px'}}/>
                            <hr />
                        </Col>
                        <Col xs={12} sm={8} style={{ paddingBottom: '100px' }}>
                            <h3>Recommended Books</h3>
                            <p>Since we are already into speaking about programming, here are a few great books that I have read and can recommend.</p>
                            <p>Disclosure 1: I'm not getting anything out of it.</p>
                            <p>Disclosure 2: I didn't read all the content of all of these books. Sometimes I jump back and forth, depending of my current interests.</p>
                            <ul>
                                <li>
                                    <a href='https://roadtoreact.com/' target="_blank" rel="noopener noreferrer">The road to learn React |</a>
                                    <a href='https://twitter.com/rwieruch' target="_blank" rel="noopener noreferrer">| Robin Wieruch</a>
                                </li>
                                <li>
                                    <a href='https://martinfowler.com/books/refactoring.html' target="_blank" rel="noopener noreferrer">Refactoring |</a>
                                    <a href='https://twitter.com/martinfowler' target="_blank" rel="noopener noreferrer">| Martin Fowler</a>
                                </li>
                                <li>
                                    <a href='https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882' target="_blank" rel="noopener noreferrer">Clean Code |</a>
                                    <a href='https://twitter.com/unclebobmartin' target="_blank" rel="noopener noreferrer">| Bob Martin (Uncle Bob)</a>
                                </li>
                                <li>
                                    <a href='https://effectivepython.com/' target="_blank" rel="noopener noreferrer">Effective Python |</a>
                                    <a href='https://twitter.com/haxor' target="_blank" rel="noopener noreferrer">| Brett Slatkin</a>
                                </li>
                                <li>
                                    <a href='http://effectivejs.com/' target="_blank" rel="noopener noreferrer">Effective JavaScript |</a>
                                    <a href='https://twitter.com/littlecalculist' target="_blank" rel="noopener noreferrer">| David Herman</a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={4}>
                            <Image src={im12}  style={{maxHeight: '200px', width: 'auto', marginLeft: '110px'}}/>
                            <hr />
                            <Image src={im11}  style={{maxHeight: '200px', width: 'auto', marginLeft: '50px'}}/>
                            <hr />
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}