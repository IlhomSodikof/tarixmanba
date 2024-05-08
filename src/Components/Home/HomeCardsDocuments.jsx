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

//  import images
import documents1 from "../../assets/img/Фотошоп/пастдаги блоклар учун/Тарихий ҳужжатлар/documents1.jpg";
import documents2 from "../../assets/img/Фотошоп/пастдаги блоклар учун/Тарихий ҳужжатлар/documents2.jpg";
import documents3 from "../../assets/img/Фотошоп/пастдаги блоклар учун/Тарихий ҳужжатлар/documents3.jpg";
import documents4 from "../../assets/img/Фотошоп/пастдаги блоклар учун/Тарихий ҳужжатлар/documents4.jpg";
import documents5 from "../../assets/img/Фотошоп/пастдаги блоклар учун/Тарихий ҳужжатлар/documents5.jpg";
import documents6 from "../../assets/img/Фотошоп/пастдаги блоклар учун/Тарихий ҳужжатлар/documents6.jpg";
import bgPattern from "../../assets/img/bg_pattern.png";

export default function App() {
  return (
    <div className="documents_bg">
      <div className="home__card__container">
        <div className="home__wrapper">
          <div className="home__cards__title">
            <h1>Tarixiy Hujjatlar</h1>

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
                <img src={documents1} alt="" />
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
                <img src={documents2} alt="" />
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
                <img src={documents3} alt="" />
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
                <img src={documents4} alt="" />
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
                <img src={documents5} alt="" />
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
                <img src={documents6} alt="" />
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
