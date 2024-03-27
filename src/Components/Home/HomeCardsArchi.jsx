import React, { useRef, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <div className="home__card__container">
      <div className="wrap">
        <div className="cards__title">
          <h1>Arxeologik yodgorliklar</h1>

          <button className="see_all">Barchasi →</button>
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
              slidesPerView: 3,
              spaceBetween: 40,
            },
            // 1024: {
            //   slidesPerView: 3,
            //   spaceBetween: 50,
            // },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="box">
              <div className="box-top">
                <img
                  className="box-image"
                  src="https://api.tarixmanba.uz/storage/uploads/sources/OLJhnN4QCLFN0pXnlWW8xIyiNNUL3TzghY1RVA4H.jpg"
                  alt="Girl Eating Pizza"
                />
                <div className="title-flex">
                  <h3 className="box-title">Kelsie Meyer</h3>
                  <p className="user-follow-info">17 Projects</p>
                </div>
                {/* <p className="description">
                  Whipped steamed roast cream beans macchiato skinny grinder
                  café. Iced grinder go mocha steamed grounds cultivar panna
                  aroma.
                </p> */}
              </div>
              <a href="#" className="button">
                Batafsil
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <div className="box-top">
                <img
                  className="box-image"
                  src="https://api.tarixmanba.uz/storage/uploads/sources/OLJhnN4QCLFN0pXnlWW8xIyiNNUL3TzghY1RVA4H.jpg"
                  alt="Girl Eating Pizza"
                />
                <div className="title-flex">
                  <h3 className="box-title">Kelsie Meyer</h3>
                  <p className="user-follow-info">17 Projects</p>
                </div>
                {/* <p className="description">
                  Whipped steamed roast cream beans macchiato skinny grinder
                  café. Iced grinder go mocha steamed grounds cultivar panna
                  aroma.
                </p> */}
              </div>
              <a href="#" className="button">
                Batafsil
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <div className="box-top">
                <img
                  className="box-image"
                  src="https://api.tarixmanba.uz/storage/uploads/sources/OLJhnN4QCLFN0pXnlWW8xIyiNNUL3TzghY1RVA4H.jpg"
                  alt="Girl Eating Pizza"
                />
                <div className="title-flex">
                  <h3 className="box-title">Kelsie Meyer</h3>
                  <p className="user-follow-info">17 Projects</p>
                </div>
                {/* <p className="description">
                  Whipped steamed roast cream beans macchiato skinny grinder
                  café. Iced grinder go mocha steamed grounds cultivar panna
                  aroma.
                </p> */}
              </div>
              <a href="#" className="button">
                Batafsil
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <div className="box-top">
                <img
                  className="box-image"
                  src="https://api.tarixmanba.uz/storage/uploads/sources/OLJhnN4QCLFN0pXnlWW8xIyiNNUL3TzghY1RVA4H.jpg"
                  alt="Girl Eating Pizza"
                />
                <div className="title-flex">
                  <h3 className="box-title">Kelsie Meyer</h3>
                  <p className="user-follow-info">17 Projects</p>
                </div>
                {/* <p className="description">
                  Whipped steamed roast cream beans macchiato skinny grinder
                  café. Iced grinder go mocha steamed grounds cultivar panna
                  aroma.
                </p> */}
              </div>
              <a href="#" className="button">
                Batafsil
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <div className="box-top">
                <img
                  className="box-image"
                  src="https://api.tarixmanba.uz/storage/uploads/sources/OLJhnN4QCLFN0pXnlWW8xIyiNNUL3TzghY1RVA4H.jpg"
                  alt="Girl Eating Pizza"
                />
                <div className="title-flex">
                  <h3 className="box-title">Kelsie Meyer</h3>
                  <p className="user-follow-info">17 Projects</p>
                </div>
                {/* <p className="description">
                  Whipped steamed roast cream beans macchiato skinny grinder
                  café. Iced grinder go mocha steamed grounds cultivar panna
                  aroma.
                </p> */}
              </div>
              <a href="#" className="button">
                Batafsil
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <div className="box-top">
                <img
                  className="box-image"
                  src="https://api.tarixmanba.uz/storage/uploads/sources/OLJhnN4QCLFN0pXnlWW8xIyiNNUL3TzghY1RVA4H.jpg"
                  alt="Girl Eating Pizza"
                />
                <div className="title-flex">
                  <h3 className="box-title">Kelsie Meyer</h3>
                  <p className="user-follow-info">17 Projects</p>
                </div>
                {/* <p className="description">
                  Whipped steamed roast cream beans macchiato skinny grinder
                  café. Iced grinder go mocha steamed grounds cultivar panna
                  aroma.
                </p> */}
              </div>
              <a href="#" className="button">
                Batafsil
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
