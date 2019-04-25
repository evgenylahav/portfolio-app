import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import im1 from '../assets/carousel_image4.jpg';
import im2 from '../assets/carousel_image2.jpg';
import im3 from '../assets/carousel_image3.jpg';

export interface CarouselCompState {

}


export class CarouselComp extends React.Component<{}, CarouselCompState> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ im1 }
                        width="500"
                        height="500"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ im2 }
                        width="200"
                        height="500"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ im3 }
                        width="500"
                        height="500"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>);
    }
}