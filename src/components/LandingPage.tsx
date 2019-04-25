import * as React from 'react';
import { CarouselComp } from './CarouselComp';
import { Grid, Cell } from 'react-mdl';

export interface LandingPageState {

}


export class LandingPage extends React.Component<{}, LandingPageState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
          <div style={{width: '100%', margin: 'auto'}}>
            <Grid className='landing-grid'>
                <Cell col={12}></Cell>
                    <img 
                        src='https://yt3.ggpht.com/a-/AAuE7mDeZxRm5KFFNjFNlAWaqxQWpQUoli3vM7TFwg=s900-mo-c-c0xffffffff-rj-k-no'
                        alt='avatar'
                        className='avatar-img'
                    />
                    <div className='banner-text'>
                        <h1>Software Engineer</h1>
                    </div>
            </Grid>
            {/* <CarouselComp /> */}
          </div>
        );
    }
}