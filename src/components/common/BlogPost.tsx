import * as React from 'react';
import { Image, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            <Card className='blog-post' data-test='blog-card'>
                <Card.Header>{this.props.header}</Card.Header>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text className='card-text'>
                            {this.props.text}
                            <Image src={this.props.img} className='blog-icon'/>  
                    </Card.Text>
                    <FontAwesomeIcon icon="calendar-alt" style={{marginRight: '7px'}}/>  {this.props.date}
                    <FontAwesomeIcon icon="tags" style={{marginRight: '7px', marginLeft: '15px'}}/>  {this.props.tags}
                    <div><Link to={this.props.url} style={{color: 'blue'}}>Continue Reading >></Link></div>

                </Card.Body>
            </Card>);
    }
}