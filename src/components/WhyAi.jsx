import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import kids2 from '../assets/kids2.jpg'
import kids3 from '../assets/kids3.jpg'
import kids4 from '../assets/kids4.jpg'


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow,Pagination,Navigation} from 'swiper/modules';

const WhyAi = () => {
  return (
    <div className="container">
    <h1 className="heading">Flower Gallery</h1>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
            <SwiperSlide>
                <div>
                    <h1>He</h1>
                <img src={kids2}/>
                </div>
                <div>
                <img src={kids3}/>
                </div>
                <div>
                <img src={kids4}/>
                </div>
            </SwiperSlide><div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default WhyAi