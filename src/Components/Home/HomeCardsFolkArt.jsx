import React, { useRef, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

// image import
import folkArt1 from "../../assets/img/Фотошоп/пастдаги блоклар учун/Халқ оғзаки ижоди/folkArt1.jpg";
import folkArt2 from "../../assets/img/Фотошоп/пастдаги блоклар учун/Халқ оғзаки ижоди/folkArt2.jpg";
import folkArt3 from "../../assets/img/Фотошоп/пастдаги блоклар учун/Халқ оғзаки ижоди/folkArt3.jpg";
import folkArt4 from "../../assets/img/Фотошоп/пастдаги блоклар учун/Халқ оғзаки ижоди/folkArt4.jpg";
import folkArt5 from "../../assets/img/Фотошоп/пастдаги блоклар учун/Халқ оғзаки ижоди/folkArt5.jpg";
import folkArt6 from "../../assets/img/Фотошоп/пастдаги блоклар учун/Халқ оғзаки ижоди/folkArt6.jpg";
import bgPattern from "../../assets/img/bg_pattern.png";

export default function App() {
  return (
    <div className="folkArt_bg">
      <div className="home__card__container">
        <div className="home__wrapper">
          <div className="home__cards__title">
            <h1>Xalq og'zaki ijodi</h1>

            <button class="button">Barchasi →</button>
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
                <img src={folkArt1} alt="" />
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
                <img src={folkArt2} alt="" />
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
                <img src={folkArt3} alt="" />
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
                <img src={folkArt4} alt="" />
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
                <img src={folkArt5} alt="" />
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
                <img src={folkArt6} alt="" />
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
        </div>
        <div className="right_pattern">
          <img src={bgPattern} alt="" />
        </div>
      </div>
    </div>
  );
}
