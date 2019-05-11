import * as React from 'react';
import { Row, InputGroup, Container, FormControl } from 'react-bootstrap';
import { BlogPost } from '../common/BlogPost';
import './Blog.scss';

const pythonImgTips = 'http://lorenabarba.com/wp-content/uploads/2014/05/keep-calm-and-code-python_BW.png';
const pythonImgExercises = 'https://raw.githubusercontent.com/revesansparole/pkglts/master/avatar.png';
const pythonImgResources = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYpRq_mwG_lMcikwGpnJaRK7sNn5mu3mG27VVByeuDHVNjn-y';

const jsImgTips = 'https://res.cloudinary.com/teepublic/image/private/s--Zg45bEvj--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1539381322/production/designs/3309111_0.jpg';
const jsImgExercises = 'http://3.bp.blogspot.com/-RJTx3JUnDo4/VN2Bulym9qI/AAAAAAAAa4Q/hAWWZ6yYxWo/s1600/js.png';
const jsImgResources = 'http://cdn-avatar.pearltrees.com/b4/cc/b4cc9b6dc76bcc06f3d83656720ebde7.pearlsquare.jpg?v=2';

const reactImgTips = 'https://i.pinimg.com/236x/de/b6/7e/deb67ec7bb3c68d9b34b05270b4cabd1--monkey-do-you.jpg';
const reactImgExercises = 'https://i.imgflip.com/p5x14.jpg';
const reactImgResources = 'https://s.cdpn.io/profiles/user/1524299/512.jpg?1507654440';

const cleanCodeImgTips = 'https://ctl.s6img.com/society6/img/ThusR0bduXwAeGpktgGGWPA9Pa4/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/48373ea3e1814185a2189adf1cd3ae16/~~/clean-code-dirty-mind-funny-and-hilarious-tee-design-naughty-gift-to-your-friends-and-family-prints.jpg';
const cleanCodeImgExercises = 'https://www.wlion.com/wp-content/uploads/2017/04/CleanCode.jpg';
const cleanCodeImgResources = 'https://avatars.io/twitter/unclebobmartin';

export interface BlogProps {}
export interface BlogState {}

export class Blog extends React.Component<BlogProps, BlogState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    
    public render() {
        return (
            <Container>
                <Row>
                  <InputGroup className="mb-3" style={{width: '25%'}}>
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        placeholder="Enter a keyword..."
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Row>
                <BlogPost header='Python' title='Exercises' 
                          text='Practice, practice, practice. Check out some exercises in different topics, and give it a try'
                          url='/blog_1'
                          date='Oct 01, 2018'
                          tags='Python, Exercises'
                          img={pythonImgTips} />
                <BlogPost header='Python' title='Digging into unittest'
                          text='Unit testing is a mandatory part of each programmers toolbox. This blog will dig into the built-in Python unittest package'
                          url='/blog_2'
                          date='Dec 01, 2018'
                          tags='Python, Unit Tests' 
                          img={pythonImgExercises} />
                <BlogPost header='JavaScript' title='Working with Arrays'
                          text='Working with arrays in JavaScript is extreemly useful. Specifically when implementing it in Front-end development.'
                          url='/blog_3' 
                          date='Jan 01, 2019'
                          tags='JavaScript, React, Arrays'
                          img={jsImgTips} />

             </Container>
        );
    }
}