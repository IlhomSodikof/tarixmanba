import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider_element">
            <img
              src="http://tarixmanba.sosgroup.uz:2118/storage/uploads/slider/pxWLZVQztnlb8tJDX3lf1uoCS8FEsitTwnhI9VtH.png"
              alt=""
            />
            <div className="slide_element_title">
              <h3>Jadidlar.u</h3>
              <p>2024-02-14</p>
              <button>Batafsil</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_element">
            <img
              src="http://tarixmanba.sosgroup.uz:2118/storage/uploads/slider/FlPfKt6FgTQgI3wF3q4NK2d68heREqxOGOtPJUx2.png"
              alt=""
            />
            <div className="slide_element_title">
              <h3>O'zbekiston fanlar akademiyasi Tarix Instituti</h3>
              <p>2024-02-14</p>
              <button>Batafsil</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
