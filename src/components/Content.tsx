import * as React from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, 
    CardText, CardActions, Button } from 'react-mdl';

export interface ContentState {
    activeTab: number
}

export class Content extends React.Component<{}, ContentState> {
    constructor(props: any) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    toggleContents(){
        if (this.state.activeTab === 0) {
            
            return(
                <div className='content-grid'>
                    {this.cardGenerator("Python Tips", 
                    "Check out python tips and know-hows",
                    "http://www.getmdl.io/assets/demos/welcome_card.jpg")}
                    
                    {this.cardGenerator("Python Exercises", 
                    "Practice and sharpen your python skills",
                    "http://www.getmdl.io/assets/demos/welcome_card.jpg")}

                    {this.cardGenerator("Python Resources", 
                    "My recommended python resources - books, blogs, courses, etc...",
                    "http://www.getmdl.io/assets/demos/welcome_card.jpg")}  
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return(
                <div className='content-grid'>
                    {this.cardGenerator("JavaScript Tips", 
                    "Check out javascript tips and know-hows",
                    "http://www.getmdl.io/assets/demos/welcome_card.jpg")}
                    
                    {this.cardGenerator("JavaScript Exercises", 
                    "Practice and sharpen your javascript skills",
                    "http://www.getmdl.io/assets/demos/welcome_card.jpg")}

                    {this.cardGenerator("JavaScript Resources", 
                    "My recommended javascript resources - books, blogs, courses, etc...",
                    "http://www.getmdl.io/assets/demos/welcome_card.jpg")}  
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return(
                <div className='content-grid'>
                    {this.cardGenerator("React Tips", 
                    "Check out react tips and know-hows",
                    "http://www.getmdl.io/assets/demos/welcome_card.jpg")}
                    
                    {this.cardGenerator("React Exercises", 
                    "Practice and sharpen your react skills",
                    "http://www.getmdl.io/assets/demos/welcome_card.jpg")}

                    {this.cardGenerator("React Resources", 
                    "My recommended react resources - books, blogs, courses, etc...",
                    "http://www.getmdl.io/assets/demos/welcome_card.jpg")}  
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return(
                <div className='content-grid'>
                    {this.cardGenerator("Clean Code Tips", 
                    "Check out clean code tips and know-hows",
                    "http://www.getmdl.io/assets/demos/welcome_card.jpg")}
                    
                    {this.cardGenerator("Clean Code Exercises", 
                    "Practice and sharpen your clean code skills",
                    "http://www.getmdl.io/assets/demos/welcome_card.jpg")}

                    {this.cardGenerator("Clean Code Resources", 
                    "My recommended clean code resources - books, blogs, courses, etc...",
                    "http://www.getmdl.io/assets/demos/welcome_card.jpg")}  
                </div>
            )
        } 
    }

    cardGenerator(cardTitle, cardText, imgLink){
        return (
            <Card shadow={5} style={{minWidth: '200px', margin: 'auto'}}>
                <CardTitle 
                    style={{color: '#fff', 
                            height: '176px', 
                            background: 'url(' + imgLink + ') center / cover'}}
                >
                    { cardTitle }
                </CardTitle>
                <CardText>
                    { cardText }
                </CardText>
                <CardActions border>
                    <Button colored>Get Started</Button>
                </CardActions>
            </Card>
        )
    }

    public render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Python</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>React</Tab>
                    <Tab>Clean Code</Tab>
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