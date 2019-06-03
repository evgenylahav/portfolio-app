import * as React from 'react';
import { Row, Form, Container } from 'react-bootstrap';
import { BlogPost } from '../common';
import './Blog.scss';

import blogList from './Blogs.json';

export interface BlogProps { }
export interface BlogState {
    searchTerm: string,
    blogList
}

export class Blog extends React.Component<BlogProps, BlogState> {
    constructor(props: any) {
        super(props);
        this.state = {
            searchTerm: '',
            blogList: blogList
        };
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value })
    }

    isSearched(item) {
        return item.tags.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    }

    public render() {
        return (
            <Container style={{ marginBottom: "50px" }} data-test="blog-page">
                <Row>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Search</Form.Label>
                            <Form.Control placeholder="Search..." onChange={e => this.onSearchChange(e)} />
                            <Form.Text className="text-muted" />
                        </Form.Group>
                    </Form>
                    {this.state.blogList.filter(item => this.isSearched(item)).map(item =>
                        <BlogPost header={item.header} title={item.title}
                            text={item.text} url={item.url}
                            date={item.date} tags={item.tags}
                            img={item.img} />
                    )}
                </Row>
            </Container>
        );
    }
}