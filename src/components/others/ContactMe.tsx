import * as React from 'react';
import { List, ListItem, ListItemContent } from 'react-mdl';
import { Container, Col } from 'react-bootstrap';
import im1 from "../../assets/carousel_image1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ContactMe.scss';

const styleListItem = {
    textAlign: 'center', paddingLeft: '100px', fontSize: '30px', fontFamily: 'Anton'
};

export interface ContactMeProps {}
export interface ContactMeState {}

export class ContactMe extends React.Component<ContactMeProps, ContactMeState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div className="contact-body">
                <Container className="contact-grid">
                    <Col xs={12} sm={6}>
                        <h2>Evgeny Lahav</h2>
                        <img src={im1} alt='avatar' style={{height: '250px'}}/>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '15px'}}>For any comments, questions, suggestions, etc... I'd be happy to hear from
                            you. Use any of my contact details to contact me</p>
                    </Col>
                    <Col xs={12} sm={6}>
                        <h2>Contact Me @</h2>
                        <hr/><hr/>
                        <div className='contact-list'>
                            <List>
                                <ListItem style={styleListItem}>
                                    <ListItemContent>
                                        <FontAwesomeIcon icon="phone-square"/>
                                        +972-(0)5444-86872
                                    </ListItemContent>
                                </ListItem>
                                <ListItem style={styleListItem}>
                                    <ListItemContent>
                                        <FontAwesomeIcon icon="at"/>
                                        evgeny.lahav@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Col>
                </Container>
            </div>
        );
    }
}