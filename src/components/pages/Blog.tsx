import * as React from 'react';
import { Row, Form, Col, Container, FormControl } from 'react-bootstrap';
import { BlogPost } from '../common/BlogPost';
import './Blog.scss';

// const pythonImgTips = 'http://lorenabarba.com/wp-content/uploads/2014/05/keep-calm-and-code-python_BW.png';
// const pythonImgExercises = 'https://raw.githubusercontent.com/revesansparole/pkglts/master/avatar.png';
// const pythonImgResources = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYpRq_mwG_lMcikwGpnJaRK7sNn5mu3mG27VVByeuDHVNjn-y';

// const jsImgTips = 'https://res.cloudinary.com/teepublic/image/private/s--Zg45bEvj--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1539381322/production/designs/3309111_0.jpg';
// const jsImgExercises = 'http://3.bp.blogspot.com/-RJTx3JUnDo4/VN2Bulym9qI/AAAAAAAAa4Q/hAWWZ6yYxWo/s1600/js.png';
// const jsImgResources = 'http://cdn-avatar.pearltrees.com/b4/cc/b4cc9b6dc76bcc06f3d83656720ebde7.pearlsquare.jpg?v=2';

// const reactImgTips = 'https://i.pinimg.com/236x/de/b6/7e/deb67ec7bb3c68d9b34b05270b4cabd1--monkey-do-you.jpg';
// const reactImgExercises = 'https://i.imgflip.com/p5x14.jpg';
// const reactImgResources = 'https://s.cdpn.io/profiles/user/1524299/512.jpg?1507654440';

// const cleanCodeImgTips = 'https://ctl.s6img.com/society6/img/ThusR0bduXwAeGpktgGGWPA9Pa4/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/48373ea3e1814185a2189adf1cd3ae16/~~/clean-code-dirty-mind-funny-and-hilarious-tee-design-naughty-gift-to-your-friends-and-family-prints.jpg';
// const cleanCodeImgExercises = 'https://www.wlion.com/wp-content/uploads/2017/04/CleanCode.jpg';
// const cleanCodeImgResources = 'https://avatars.io/twitter/unclebobmartin';

const blogList = [
    {
        header: 'Python',
        title: 'Named Tuple',
        text: 'Named tuple is a very handy special python structure that creates tuples with keys',
        url: '/portfolio-app/blog_1',
        date: 'Oct 01, 2018',
        tags: 'python, namedtuple, collections',
        img: 'http://lorenabarba.com/wp-content/uploads/2014/05/keep-calm-and-code-python_BW.png'
    },
    {
        header: 'Python',
        title: 'Digging into unittest',
        text: 'Unit testing is a mandatory part of each programmers toolbox. This blog will dig into the built-in Python unittest package',
        url: '/portfolio-app/blog_2',
        date: 'Dec 01, 2018',
        tags: 'Python, Unit Tests, unittest',
        img: 'https://raw.githubusercontent.com/revesansparole/pkglts/master/avatar.png'
    },
    {
        header: 'JavaScript',
        title: 'Working with Arrays',
        text: 'Working with arrays in JavaScript is extreemly useful. Specifically when implementing it in Front-end development.',
        url: '/portfolio-app/blog_3',
        date: 'Jan 01, 2019',
        tags: 'JavaScript, React, Arrays',
        img: 'https://res.cloudinary.com/teepublic/image/private/s--Zg45bEvj--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1539381322/production/designs/3309111_0.jpg'
    }
]


export interface BlogProps {}
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
    
    onSearchChange(event){
        this.setState({searchTerm: event.target.value})
      }
    
    isSearched(item){
        return item.tags.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    }
    
    public render() {
        return (
            <Container>
                <Row>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Search</Form.Label>
                            <Form.Control placeholder="Search..." onChange={e => this.onSearchChange(e)}/>
                            <Form.Text className="text-muted" />
                        </Form.Group>
                    </Form>
                </Row>
                {this.state.blogList.filter(item => this.isSearched(item)).map(item => 
                    <BlogPost header={item.header} title={item.title} 
                            text={item.text} url={item.url}
                            date={item.date} tags={item.tags}
                            img={item.img} />
                            )}
             </Container>
        );
    }
}