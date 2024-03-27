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

export default function App() {
  return (
    <div className="home__card__container">
      <div className="wrap">
        <div className="cards__title">
          <h1>Muxrlar</h1>

          <button className="see_all">
            <Link to="/news">Barchasi →</Link>
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
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="box">
              <div className="box-top">
                <img
                  className="box-image"
                  src="https://images.unsplash.com/photo-1622219809260-ce065fc5277f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMwNjYxOQ&ixlib=rb-1.2.1&q=85"
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
                  src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxNjA1MA&ixlib=rb-1.2.1&q=85"
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
                  src="https://images.unsplash.com/photo-1622219809260-ce065fc5277f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMwNjYxOQ&ixlib=rb-1.2.1&q=85"
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
                  src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxNjA1MA&ixlib=rb-1.2.1&q=85"
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
                  src="https://images.unsplash.com/photo-1622219809260-ce065fc5277f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMwNjYxOQ&ixlib=rb-1.2.1&q=85"
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
                  src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxNjA1MA&ixlib=rb-1.2.1&q=85"
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
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </div>
  );
}