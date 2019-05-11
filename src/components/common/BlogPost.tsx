import * as React from 'react';
import { Image, Card, Button } from 'react-bootstrap';
import './BlogPost.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export interface BlogPostProps {
    title: string;
    header: string;
    text: string;
    url: string;
    date: string;
    tags: string;
    img;
}
export interface BlogPostState {}

export class BlogPost extends React.Component<BlogPostProps, BlogPostState> {
    render() {
        return(
            <Card className='blog-post'>
                <Card.Header>{this.props.header}</Card.Header>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.text}
                        <Image src={this.props.img} className='blog-icon'/>  
                    </Card.Text>
                    <a href={this.props.url}>Continue Reading >></a>
                    <FontAwesomeIcon icon="calendar-alt"/>{this.props.date}
                    <FontAwesomeIcon icon="tags"/>{this.props.tags}

                </Card.Body>
            </Card>);
    }
}