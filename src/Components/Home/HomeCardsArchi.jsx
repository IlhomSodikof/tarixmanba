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
import archi1 from "../../assets/img/archi1.jpg";
import archi2 from "../../assets/img/archi2.jpg";
import archi3 from "../../assets/img/archi3.jpg";
import archi4 from "../../assets/img/archi4.jpg";
import archi5 from "../../assets/img/archi5.jpg";
import archi6 from "../../assets/img/archi6.jpg";
import bgPattern from "../../assets/img/bg_pattern.png";

export default function App() {
  return (
    <div className="home__card__container">
      <div className="home__wrapper">
        <div className="home__cards__title">
          <h1>Arxeologiya yodgorliklari</h1>

          <button className="see_all">
            <Link>Barchasi →</Link>
          </button>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          // navigation={true}
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
              <img src={archi1} alt="" />
              <div class="home__info">
                <h1>Horseshoe Bend, Arizona</h1>
                <p>
                  Lorem ipsum is simply dummy text from the printing and typing
                  industry
                </p>
                <a href="#" class="home__btn">
                  Read More
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="home__card">
              <img src={archi2} alt="" />
              <div class="home__info">
                <h1>Horseshoe Bend, Arizona</h1>
                <p>
                  Lorem ipsum is simply dummy text from the printing and typing
                  industry
                </p>
                <a href="#" class="home__btn">
                  Read More
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="home__card">
              <img src={archi3} alt="" />
              <div class="home__info">
                <h1>Horseshoe Bend, Arizona</h1>
                <p>
                  Lorem ipsum is simply dummy text from the printing and typing
                  industry
                </p>
                <a href="#" class="home__btn">
                  Read More
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="home__card">
              <img src={archi4} alt="" />
              <div class="home__info">
                <h1>Horseshoe Bend, Arizona</h1>
                <p>
                  Lorem ipsum is simply dummy text from the printing and typing
                  industry
                </p>
                <a href="#" class="home__btn">
                  Read More
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="home__card">
              <img src={archi5} alt="" />
              <div class="home__info">
                <h1>Horseshoe Bend, Arizona</h1>
                <p>
                  Lorem ipsum is simply dummy text from the printing and typing
                  industry
                </p>
                <a href="#" class="home__btn">
                  Read More
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="home__card">
              <img src={archi6} alt="" />
              <div class="home__info">
                <h1>Horseshoe Bend, Arizona</h1>
                <p>
                  Lorem ipsum is simply dummy text from the printing and typing
                  industry
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
      </div>
      <div className="archi_pattern">
        <img src={bgPattern} alt="" />
      </div>
    </div>
  );
}
