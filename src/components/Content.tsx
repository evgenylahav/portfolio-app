import * as React from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button } from 'react-mdl';


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

export interface ContentProps {
    activeTab: number
}

export interface ContentState {
    activeTab: number
}

export class Content extends React.Component<ContentProps, ContentState> {
    constructor(props: any) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    toggleContents(){
        if (this.state.activeTab === 0) {
            return(
                // Tips
                <div className='content-grid'>
                    {this.cardGenerator(pythonImgTips, 'python')}
                    
                    {this.cardGenerator(jsImgTips, 'javascript')}

                    {this.cardGenerator(reactImgTips, 'react')}

                    {this.cardGenerator(cleanCodeImgTips, 'clean code')}  
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return(
                // Exercises
                <div className='content-grid'>
                    {this.cardGenerator(pythonImgExercises, 'python')}
                    
                    {this.cardGenerator(jsImgExercises, 'javascript')}

                    {this.cardGenerator(reactImgExercises, 'react')}

                    {this.cardGenerator(cleanCodeImgExercises, 'clean code')}
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return(
                // Resources
                <div className='content-grid'>
                    {this.cardGenerator(pythonImgResources, 'python')}
                    
                    {this.cardGenerator(jsImgResources, 'javascript')}

                    {this.cardGenerator(reactImgResources, 'react')}

                    {this.cardGenerator(cleanCodeImgResources, 'clean code')}
                </div>
            )
        } 
    }

    cardGenerator(imgLink, tech){
        return (
            <Card shadow={5} style={{width: '250px', height: '320px', margin: 'auto'}}>
                <CardTitle 
                    style={{color: '#fff', 
                            height: '300px', 
                            background: 'url(' + imgLink + ') center / cover',
                            backgroundSize: '320px 250px'}}
                >
                </CardTitle>
                <CardActions border>
                    <Button colored>{tech}</Button>
                </CardActions>
            </Card>
        )
    }

    public render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Tips</Tab>
                    <Tab>Exercises</Tab>
                    <Tab>Resources</Tab>
                </Tabs>
                <section>
                    <Grid>
                        <Cell col={12}>
                            <div className='content'> { this.toggleContents() } </div> 
                        </Cell>
                    </Grid>
                </section>
            </div>    
        );
    }
}