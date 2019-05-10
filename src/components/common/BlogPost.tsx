import * as React from 'react';
import { Image, Card, Button } from 'react-bootstrap';
import './BlogPost.scss';

export interface BlogPostProps {
    title: string;
    header: string;
    text: string;
    url: string;
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
                    <Button variant="primary">Open Post</Button>
                </Card.Body>
            </Card>);
    }
}