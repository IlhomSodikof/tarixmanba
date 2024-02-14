// import React from 'react'
// import MiniCard from '../components/MiniCard'

// export default function Shtamp() {
//   return (
//     <>
//       <div className='shtamp-container'>
//         <div className='title-shtamp'>
//           <h2 >Muhirlar<span>BARCHASI</span></h2>
//         </div>
//         <div className="title-shtamp-card">
//           {[1, 2, 3, 4,].map((item) =>
//             <MiniCard />
//           )}
//         </div>
//       </div >
//     </>
//   )
// }

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MiniCard from '../components/MiniCard'


// import { useNavigate } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



export default function MatbuotHome() {


  var settings = {
    dots: false,
    infinite: true,

    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: false,

    responsive: [
      {
        breakpoint: 1333,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow custom-arrow-right1" onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow custom-arrow-left1" onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );

  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  // const fetchData = async () => {
  //   const response = await DataService.get(endpoints.jadidlar);
  //   // console.log(response);
  //   setApiData(response);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // //

  return (
    <>
      <div className="info_carousel">
        <h2 >Matbuot  <span> BARCHASI</span></h2>

        <Slider
          {...settings}
          key={apiData?.length}
          watchSlidesProgress={true}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          {apiData?.map((item, id) =>
            <MiniCard key={id} />
          )}
        </Slider>
      </div>
    </>
  );
}

