import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
      <>
        <Swiper
      //  direction={'vertical'}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        
          
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>Hair Stylist</SwiperSlide>
          <SwiperSlide>Automobiles</SwiperSlide>
          <SwiperSlide>Painter</SwiperSlide>
          
        </Swiper>
      </>
    );
  }