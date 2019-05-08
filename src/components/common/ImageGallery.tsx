import * as React from 'react';
import Swiper from 'react-id-swiper';
import { Image } from 'react-bootstrap';
import im1 from '../../assets/belle.jpeg';
import im2 from '../../assets/family.jpeg';
import im3 from '../../assets/kodon_solo.jpeg';
import im7 from '../../assets/romi_bw.jpeg';
import im8 from '../../assets/romi_kodon.jpeg';
import im9 from '../../assets/romi_with_model.jpeg';
import im10 from '../../assets/romi.jpeg';

import './ImageSwiper.scss';

export interface ImageGalleryProps {}
export interface ImageGalleryState {}

export class ImageGallery extends React.Component<ImageGalleryProps, ImageGalleryState> {
  constructor(props) {
    super(props);
    this.state = {
      gallerySwiper: null,
      thumbnailSwiper: null
    };

    this.galleryRef = this.galleryRef.bind(this);
    this.thumbRef = this.thumbRef.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.gallerySwiper && nextState.thumbnailSwiper) {
      const { gallerySwiper, thumbnailSwiper } = nextState

      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }

  galleryRef(ref) {
    if (ref) this.setState({ gallerySwiper: ref.swiper })
  }

  thumbRef(ref) {
    if (ref) this.setState({ thumbnailSwiper: ref.swiper })
  }

  render() {
    const gallerySwiperParams = {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    };

    return (
      <div>
        <Swiper {...gallerySwiperParams}>
          <span>
          <div>
                <Image src={ im1 } className='gallery-pic'/>
            </div>
            <div>
                <Image src={ im2 } className='gallery-pic'/>
            </div>
            <div>
                <Image src={ im3 } className='gallery-pic'/>
            </div>
            <div>
                <Image src={ im10 } className='gallery-pic'/>
            </div>
            <div>
                <Image src={ im8 } className='gallery-pic'/>
            </div>
            <div>
                <Image src={ im7 } className='gallery-pic'/>
            </div>
            <div>
                <Image src={ im9 } className='gallery-pic'/>
            </div>
          </span>
        </Swiper>
      </div>
    );
  }
}    