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

// import image
import yozma1 from "../../assets/img/Фотошоп/пастдаги блоклар учун/Ёзма асарлар/yozma1.jpg";
import yozma2 from "../../assets/img/Фотошоп/пастдаги блоклар учун/Ёзма асарлар/yozma2.jpg";
import yozma3 from "../../assets/img/Фотошоп/пастдаги блоклар учун/Ёзма асарлар/yozma3.jpg";
import yozma4 from "../../assets/img/Фотошоп/пастдаги блоклар учун/Ёзма асарлар/yozma4.jpg";
import yozma5 from "../../assets/img/Фотошоп/пастдаги блоклар учун/Ёзма асарлар/yozma5.jpg";
import yozma6 from "../../assets/img/Фотошоп/пастдаги блоклар учун/Ёзма асарлар/yozma6.jpg";

import bgPattern from "../../assets/img/bg_pattern.png";

export default function App() {
  return (
    <div className="manuscript_bg">
      <div className="home__card__container">
        <div className="home__wrapper">
          <div className="home__cards__title">
            <h1>Yozma asarlar</h1>

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
                <img src={yozma1} alt="" />
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
                <img src={yozma2} alt="" />
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
                <img src={yozma3} alt="" />
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
                <img src={yozma4} alt="" />
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
                <img src={yozma5} alt="" />
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
                <img src={yozma6} alt="" />
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
        <div className="Left_pattern">
          <img src={bgPattern} alt="" />
        </div>
      </div>
    </div>
  );
}
