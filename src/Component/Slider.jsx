import React, { useRef, useState } from "react";
import SlideImg1 from "../Images/SlideImg-1.jpg";
import SlideImg2 from "../Images/SlideImg2.jpg";
import SlideImg3 from "../Images/SlideImg3.jpg";
import "../style.css";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {Autoplay, Navigation, Pagination} from "swiper/modules";



export default function Slider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
      <div className="continer-fluid position-relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper my-2"
        >
          <SwiperSlide><img className="img_slider" src={SlideImg1} alt="sliderImg" /></SwiperSlide>
          <SwiperSlide><img className="img_slider" src={SlideImg2} alt="sliderImg" /></SwiperSlide>
          <SwiperSlide><img className="img_slider" src={SlideImg3} alt="sliderImg" /></SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>

        <div className="continer-fluid text_carousel position-absolute top-0 d-flex flex-column justify-content-center">
            <h3 className="text-light my-4">دبیرستان ولیعصر بهترین دبیرستان غیرانتفاعی برای آموزش فرزند شما</h3>
            <span className="text-light mb-4">با ثبت نام در وبسایت ولیعصر از جدید ترین خبر ها مطلع باشید </span>
            <div className="mt-3">
              <button className="rounded-5 py-2 px-4 btn_slider learn">دوره های آموزشی</button>
              <button className="rounded-5 py-2 px-4 btn_slider about_us">درباره سینا</button>
            </div>
        </div>
      </div>
    );
  }
  