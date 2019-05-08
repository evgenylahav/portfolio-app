import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import { Navigation, Pagination } from 'swiper/dist/js/swiper.esm'
import { Image } from 'react-bootstrap';

import im1 from '../assets/belle.jpeg';
import im2 from '../assets/family.jpeg';
import im3 from '../assets/kodon_solo.jpeg';
import im4 from '../assets/romi_an_belle.jpeg';
import im5 from '../assets/romi_bw_2.jpeg';
import im6 from '../assets/romi_bw_3.jpeg';
import im7 from '../assets/romi_bw.jpeg';
import im8 from '../assets/romi_kodon.jpeg';
import im9 from '../assets/romi_with_model.jpeg';
import im10 from '../assets/romi.jpeg';


import './ImageSwiper.scss';

const ManipulatingSwiper = () => {
  const [swiper, updateSwiper] = useState();
 
  return (
    <div>
      <Swiper getSwiper={updateSwiper} modules={[Navigation]}>
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
};
 
export default ManipulatingSwiper;