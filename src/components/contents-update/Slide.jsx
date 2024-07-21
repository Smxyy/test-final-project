import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slide.css";
import { Navigation } from "swiper/modules";
import CardContentUpdate from "../common/cards/CardContentUpdate";
export default function Slide() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <CardContentUpdate
            img="src/assets/img/card-img4.png"
            title="Listening :"
            des="A Request From Your Boss"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardContentUpdate
            img="src/assets/img/card-img4.png"
            title="Reading :"
            des="Olympic and Paralympic Games"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardContentUpdate
            img="src/assets/img/card-img4.png"
            title="Listening :"
            des="A Request From Your Boss"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardContentUpdate
            img="src/assets/img/card-img4.png"
            title="Listening :"
            des="A Request From Your Boss"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardContentUpdate
            img="src/assets/img/card-img4.png"
            title="Listening :"
            des="A Request From Your Boss"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
