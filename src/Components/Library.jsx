import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function News() {
  var settings = {
    dots: true,
    customPaging: function (i) {
      return <div className="custom-dot">{/* Nuqta stilini o'rnating */}</div>;
    },
    // infinite: true,
    infinite: true,

    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
        },
        button: {
          padding: 30,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-arrow-right" onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-arrow-left" onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );

  return (
    <div className="news-container container_full">
      <h2>
        Elektron kutubxona <span>BARCHASI</span>
      </h2>
      <Slider
        watchSlidesProgress={true}
        {...settings}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
      >
        <div className="library_container">
          <div className="card_carusel_img">
            <img
              src="http://tarixmanba.sosgroup.uz:2118/storage/uploads/libraries/a78B9egDsX9Jyo4zHogjBEzljnoSsphFXZ4OrmAQ.png"
              alt=""
            />
          </div>
          <div className="card_carusel_body">
            <h3>Library Card Name</h3>
            <p>Library Card Author Name</p>
          </div>
        </div>
        <div className="library_container">
          <div className="card_carusel_img">
            <img
              src="http://tarixmanba.sosgroup.uz:2118/storage/uploads/libraries/a78B9egDsX9Jyo4zHogjBEzljnoSsphFXZ4OrmAQ.png"
              alt=""
            />
          </div>
          <div className="card_carusel_body">
            <h3>Library Card Name</h3>
            <p>Library Card Author Name</p>
          </div>
        </div>
        <div className="library_container">
          <div className="card_carusel_img">
            <img
              src="http://tarixmanba.sosgroup.uz:2118/storage/uploads/libraries/a78B9egDsX9Jyo4zHogjBEzljnoSsphFXZ4OrmAQ.png"
              alt=""
            />
          </div>
          <div className="card_carusel_body">
            <h3>Library Card Name</h3>
            <p>Library Card Author Name</p>
          </div>
        </div>
        <div className="library_container">
          <div className="card_carusel_img">
            <img
              src="http://tarixmanba.sosgroup.uz:2118/storage/uploads/libraries/a78B9egDsX9Jyo4zHogjBEzljnoSsphFXZ4OrmAQ.png"
              alt=""
            />
          </div>
          <div className="card_carusel_body">
            <h3>Library Card Name</h3>
            <p>Library Card Author Name</p>
          </div>
        </div>
        <div className="library_container">
          <div className="card_carusel_img">
            <img
              src="http://tarixmanba.sosgroup.uz:2118/storage/uploads/libraries/a78B9egDsX9Jyo4zHogjBEzljnoSsphFXZ4OrmAQ.png"
              alt=""
            />
          </div>
          <div className="card_carusel_body">
            <h3>Library Card Name</h3>
            <p>Library Card Author Name</p>
          </div>
        </div>
        <div className="library_container">
          <div className="card_carusel_img">
            <img
              src="http://tarixmanba.sosgroup.uz:2118/storage/uploads/libraries/a78B9egDsX9Jyo4zHogjBEzljnoSsphFXZ4OrmAQ.png"
              alt=""
            />
          </div>
          <div className="card_carusel_body">
            <h3>Library Card Name</h3>
            <p>Library Card Author Name</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default News;
