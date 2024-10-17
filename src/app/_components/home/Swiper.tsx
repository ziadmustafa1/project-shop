'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiper.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src='https://wuilt-assets-v2-dev.s3.amazonaws.com/cm0s24b6g0eaa01mb2as840gh_SHOP_NOW__11_.png'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://wuilt-assets-v2-dev.s3.amazonaws.com/cm0s24b6g0eaa01mb2as840gh_SHOP_NOW__11_.png'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://wuilt-assets-v2-dev.s3.amazonaws.com/cm0s24b6g0eaa01mb2as840gh_SHOP_NOW__11_.png'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://wuilt-assets-v2-dev.s3.amazonaws.com/cm0s24b6g0eaa01mb2as840gh_SHOP_NOW__11_.png'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://wuilt-assets-v2-dev.s3.amazonaws.com/cm0s24b6g0eaa01mb2as840gh_SHOP_NOW__11_.png'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
