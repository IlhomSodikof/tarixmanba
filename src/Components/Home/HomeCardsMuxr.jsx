import React, { useRef, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
// import image
import muhr1 from "../../assets/img/photo_2024-03-27_17-35-54.jpg";
import muhr3 from "../../assets/img/photo_2024-03-27_17-36-00.jpg";
import muhr4 from "../../assets/img/photo_2024-03-27_17-36-00.jpg";
import muhr2 from "../../assets/img/photo_2024-03-27_17-35-57.jpg";
import muhr5 from "../../assets/img/photo_2024-03-27_17-36-41.jpg";
import muhr6 from "../../assets/img/photo_2024-03-27_17-37-09.jpg";
import bgPattern from "../../assets/img/bg_pattern.png";

export default function App() {
  return (
    <>
      <div className="home__card__container">
        <div className="home__wrapper">
          <div className="home__cards__title">
            <h1>Muxrlar</h1>

            <button class="button">Barchasi →</button>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              800: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1075: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div class="home__card">
                <img src={muhr1} alt="" />
                <div class="home__info">
                  <h1>Horseshoe Bend, Arizona</h1>
                  <p>
                    Lorem ipsum is simply dummy text from the printing and
                    typing industry
                  </p>
                  <a href="#" class="home__btn">
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="home__card">
                <img src={muhr2} alt="" />
                <div class="home__info">
                  <h1>Horseshoe Bend, Arizona</h1>
                  <p>
                    Lorem ipsum is simply dummy text from the printing and
                    typing industry
                  </p>
                  <a href="#" class="home__btn">
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="home__card">
                <img src={muhr3} alt="" />
                <div class="home__info">
                  <h1>Horseshoe Bend, Arizona</h1>
                  <p>
                    Lorem ipsum is simply dummy text from the printing and
                    typing industry
                  </p>
                  <a href="#" class="home__btn">
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="home__card">
                <img src={muhr4} alt="" />
                <div class="home__info">
                  <h1>Horseshoe Bend, Arizona</h1>
                  <p>
                    Lorem ipsum is simply dummy text from the printing and
                    typing industry
                  </p>
                  <a href="#" class="home__btn">
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="home__card">
                <img src={muhr5} alt="" />
                <div class="home__info">
                  <h1>Horseshoe Bend, Arizona</h1>
                  <p>
                    Lorem ipsum is simply dummy text from the printing and
                    typing industry
                  </p>
                  <a href="#" class="home__btn">
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="home__card">
                <img src={muhr6} alt="" />
                <div class="home__info">
                  <h1>Horseshoe Bend, Arizona</h1>
                  <p>
                    Lorem ipsum is simply dummy text from the printing and
                    typing industry
                  </p>
                  <a href="#" class="home__btn">
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>
            {/* <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div> */}
          </Swiper>
        </div>{" "}
        <div className="Left_pattern">
          <img src={bgPattern} alt="" />
        </div>
      </div>
    </>
  );
}
