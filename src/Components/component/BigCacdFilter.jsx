import React, { useState, useEffect, useRef } from "react";
import { IoIosEye } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { BiSolidMessageRounded } from "react-icons/bi";
import { AiFillAudio } from "react-icons/ai";
import { IoVideocam } from "react-icons/io5";
import { IoBook } from "react-icons/io5";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { MdBookmark } from "react-icons/md";
import { SiOpenstreetmap } from "react-icons/si";
import { MdPhotoCamera } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { FaShare } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCube, Pagination } from 'swiper/modules';// Import Swiper styles

// import 'swiper/css';
// import 'swiper/css/effect-cube';
// import 'swiper/css/pagination';

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

import Swal from "sweetalert2";
// import MapSearch from "./MapSearch";

import { DataService } from "../../config/dataService";
import { endpoints } from "../../config/endpoints";
import { useNavigate, useParams } from "react-router-dom";

export default function BigCacdFilter() {
  const [modal, setModal] = useState({ key: "", value: false });
  const [val, setVal] = useState({ key: "", value: false });
  const onChange = (e) => {
    setVal({ key: e, value: val.key == e ? !val.value : true });
  };

  const onChangeModal = (e, id) => {
    // setModal({ key: e, value: modal.key == e ? !modal.value : true });
    if (id == "audio") {
      setModal({ key: e, value: modal.key == e ? !modal.value : `audio${e}` });
    }
    if (id == "text") {
      setModal({ key: e, value: modal.key == e ? !modal.value : `text${e}` });
    }
    if (id == "video") {
      setModal({ key: e, value: modal.key == e ? !modal.value : `video${e}` });
    }

    if (id == "photo") {
      setModal({ key: e, value: modal.key == e ? !modal.value : `photo${e}` });
    }

    document.querySelector("body").style.overflow =
      e == modal.key ? "auto" : "hidden";
    if (id == "close") {
      setModal({ key: "", value: false });
    }

    // switch (id) {
    //   case "audio": setModal({ key: e, value: modal.key == e ? !modal.value : `audio${e}` }); break;
    //   case "text": setModal({ key: e, value: modal.key == e ? !modal.value : `text${e}` }); break;
    //   case "video": setModal({ key: e, value: modal.key == e ? !modal.value : `video${e}` }); break;

    //   case "photo": setModal({ key: e, value: modal.key == e ? !modal.value : `photo${e}` }); break;
    //   case "close": setModal({ key: e, value: modal.key == e ? !modal.value : `close${e}` }); break;
    //   // case "map":setModal({ key: e, value: modal.key == e ? !modal.value : `map${e}` });break;
    //   // case "3d":setModal({ key: e, value: modal.key == e ? !modal.value : `3d${e}` });break;
    // }
  };

  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = async () => {
    const { value: text } = await Swal.fire({
      title: "Bu card saqlansinmi ",

      showCancelButton: "Saqlandi",
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    });

    if (text) {
      Swal.fire({
        title: "Saqlandi",
        icon: "success",
      });
    }
  };

  // bu qism api lar bilan ishlash uchun
  const navigate = useNavigate();
  const route = useParams();

  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await DataService.get(
        endpoints.categoryResourceApiById(route?.id)
      );
      setApiData(response);
      console.log(response, "resurs detail");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [route.id]);

  return (
    // <div className="card-container-shablon">
    //   {" "}
    //   {/* //card-container */}
    //   {/* <div className="shablon-map">
    //     <MapSearch />

    //   </div> */}
    //   {/* //map-end */}
    //   {apiData?.map((e, resursCardss) => (
    //     <div className="shablon-card" key={e}>
    //       <div className="share-card" onClick={() => onChange(e)}>
    //         {/* <CiMenuKebab /> */}
    //         <FaShare />
    //         <motion.div
    //           className={val.key == e ? (val.value ? "share-icons" : "") : ""}
    //           // initial={{ scale: 0 }}
    //           animate={{ y: val.key == e ? (val.value ? 0 : 60) : 60 }}
    //           transition={{
    //             type: "spring",
    //             stiffness: 460,
    //             damping: 20,
    //           }}
    //         >
    //           <FaTelegramPlane className="share-iconic" />{" "}
    //           <RiInstagramFill className="share-iconic" />{" "}
    //           <FaEnvelope className="share-iconic" />{" "}
    //           <FaSquareFacebook className="share-iconic" />
    //         </motion.div>
    //       </div>
    //       <div className="card-filter">
    //         <div className="media">
    //           <div
    //             className="img-filt"
    //             // style={{
    //             //   background:
    //             //     "url(" +
    //             //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdXO_qkk2IrtLqtwb8IZNNQ4u1MHT-UnvV5g&usqp=CAU" +
    //             //     ")",
    //             // }}
    //           ></div>
    //           <ul className="media-icons">
    //             <li className="icons-item">
    //               <IoIosEye />
    //               <span>100</span>
    //             </li>
    //             <li className="icons-item">
    //               <IoMdHeart />
    //               <span>4590</span>
    //             </li>
    //             <li className="icons-item">
    //               <BiSolidMessageRounded />
    //               <span>234</span>
    //             </li>
    //           </ul>
    //         </div>
    //         <ul className="filt-title">
    //           <li className="filt-title-item">
    //             <h3>{resursCardss?.title}</h3>
    //           </li>
    //           <li className="filt-title-item">
    //             <span className="title-item-head">O'rni: </span>Toshkent vil
    //             Bo'stonliq tumani
    //           </li>
    //           <li className="filt-title-item">
    //             <span className="title-item-head">Chog'i: </span>miloddan
    //             avvalgi 90-40 mingyillik
    //           </li>
    //           <li className="item-icons">
    //             <div className="item-iconic audio-icon" id="audio">
    //               <AiFillAudio onClick={() => onChangeModal(e, "audio")} />
    //               <span class="tooltiptext">Audio</span>
    //               <div
    //                 className={
    //                   modal.key == e
    //                     ? modal.value == `audio${e}`
    //                       ? "modal-overlay div"
    //                       : "div"
    //                     : "div"
    //                 }
    //               >
    //                 <div className="close-modal">
    //                   <IoIosClose onClick={() => onChangeModal(e, "close")} />
    //                 </div>
    //                 <div className="modal-item">
    //                   <img
    //                     className={modal.value == `audio${e}` ? "exe" : ""}
    //                     src="../../../img/orn2.png"
    //                     alt=""
    //                   />
    //                   <h3 className="media-audio-title">MEDIA FILE NOMI </h3>
    //                   <audio src="" controls></audio>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="item-iconic book-icon">
    //               <IoBook onClick={() => onChangeModal(e, "text")} />
    //               <span class="tooltiptext">Text</span>

    //               <div
    //                 className={
    //                   modal.key == e
    //                     ? modal.value == `text${e}`
    //                       ? "text-modal-download div"
    //                       : "div"
    //                     : "div"
    //                 }
    //               >
    //                 <div className="download-card">
    //                   <div className="close-modal">
    //                     <IoIosClose onClick={() => onChangeModal(e, "close")} />
    //                   </div>

    //                   <h3>Tekst va Fayillar</h3>

    //                   <div className="download-item">
    //                     <img
    //                       id="dynamic-image"
    //                       style={{ width: "50px" }}
    //                       alt=""
    //                       src="../../../img/download.gif"
    //                     ></img>
    //                     <p className="dwn-title">
    //                       Yuklanayotgan fayl nomi yoki kitob nomi bo'ladi
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="item-iconic _3d-cion">
    //               <AiOutlineCodeSandbox />
    //               <span class="tooltiptext">3D</span>
    //             </div>{" "}
    //             {/* mediada yo'qolishi kere*/}
    //             <div className="item-iconic foto-icon">
    //               <MdPhotoCamera onClick={() => onChangeModal(e, "photo")} />
    //               <span class="tooltiptext">Foto</span>

    //               <div
    //                 className={
    //                   modal.key == e
    //                     ? modal.value == `photo${e}`
    //                       ? "modal-photo"
    //                       : "div"
    //                     : "div"
    //                 }
    //               >
    //                 <div className="close-modal">
    //                   <IoIosClose onClick={() => onChangeModal(e, "close")} />
    //                 </div>
    //                 {/* <Swiper
    //                   effect={'cube'}
    //                   grabCursor={true}
    //                   cubeEffect={{
    //                     shadow: true,
    //                     slideShadows: true,
    //                     shadowOffset: 20,
    //                     shadowScale: 0.94,
    //                   }}
    //                   pagination={true}
    //                   modules={[EffectCube, Pagination]}
    //                   className="mySwiper1"
    //                 >

    //                   <SwiperSlide>
    //                     <h3 className="photo-title-h3">PHOTO NOMI</h3>
    //                     <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
    //                   </SwiperSlide>
    //                   <SwiperSlide>
    //                     <h3 className="photo-title-h3">PHOTO NOMI</h3>
    //                     <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    //                   </SwiperSlide>
    //                   <SwiperSlide>
    //                     <h3 className="photo-title-h3">PHOTO NOMI</h3>

    //                   </SwiperSlide>
    //                   <SwiperSlide>
    //                     <h3 className="photo-title-h3">PHOTO NOMI</h3>
    //                     <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
    //                   </SwiperSlide>
    //                   <SwiperSlide>
    //                     <h3 className="photo-title-h3">PHOTO NOMI</h3>
    //                     <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
    //                   </SwiperSlide>
    //                 </Swiper> */}

    //                 <Swiper
    //                   pagination={{
    //                     dynamicBullets: true,
    //                   }}
    //                   modules={[Pagination]}
    //                   className="mySwiper1"
    //                 >
    //                   <SwiperSlide>
    //                     <h1>Surat haqida ma'lumot</h1>
    //                     <img src="https://img.freepik.com/premium-photo/courtyard-kalyan-mosque-sunset-bukhara-uzbekistan-world-heritage_196911-11.jpg" />
    //                   </SwiperSlide>
    //                   <SwiperSlide>
    //                     <h1>Surat haqida ma'lumot</h1>
    //                     <img src="https://img.freepik.com/premium-photo/courtyard-kalyan-mosque-sunset-bukhara-uzbekistan-world-heritage_196911-11.jpg" />
    //                   </SwiperSlide>
    //                   <SwiperSlide>
    //                     <h1>Surat haqida ma'lumot</h1>
    //                     <img src="https://img.freepik.com/premium-photo/courtyard-kalyan-mosque-sunset-bukhara-uzbekistan-world-heritage_196911-11.jpg" />
    //                   </SwiperSlide>
    //                   <SwiperSlide>
    //                     <h1>Surat haqida ma'lumot</h1>
    //                     <img src="https://img.freepik.com/premium-photo/courtyard-kalyan-mosque-sunset-bukhara-uzbekistan-world-heritage_196911-11.jpg" />
    //                   </SwiperSlide>
    //                   <SwiperSlide>
    //                     <h1>Surat haqida ma'lumot</h1>
    //                     <img src="https://img.freepik.com/premium-photo/courtyard-kalyan-mosque-sunset-bukhara-uzbekistan-world-heritage_196911-11.jpg" />
    //                   </SwiperSlide>
    //                 </Swiper>
    //               </div>
    //             </div>
    //             <div className="item-iconic map-icon">
    //               {" "}
    //               <SiOpenstreetmap />
    //               <span class="tooltiptext">Map</span>
    //             </div>
    //             <div className="item-iconic video-icon">
    //               <IoVideocam onClick={() => onChangeModal(e, "video")} />
    //               <span class="tooltiptext">Video</span>

    //               <div
    //                 className={
    //                   modal.key == e
    //                     ? modal.value == `video${e}`
    //                       ? "modal-video div"
    //                       : "div"
    //                     : "div"
    //                 }
    //               >
    //                 <div className="close-modal">
    //                   <IoIosClose onClick={() => onChangeModal(e, "close")} />
    //                 </div>
    //                 <h3 className="media-audio-title">MEDIA FILE NOMI </h3>
    //                 <div className="modal-item">
    //                   <video
    //                     data-testid="video-asset"
    //                     style={{ width: "100%" }}
    //                     alt="Numismatics. Old collectible coins on the table. Ancient Stock Footage Video"
    //                     controls
    //                     controlslist="nodownload"
    //                     autoplay={true}
    //                     loop={true}
    //                     aria-valuemax
    //                   >
    //                     <source
    //                       type="video/mp4"
    //                       src="https://uploads.actionvfx.com/video/cb785ef5-7e71-4459-8c58-b4acee163e82/mp4/Burning+Steel+Wool.mp4"
    //                     />
    //                   </video>
    //                   {/* <video src="https://uploads.actionvfx.com/video/cb785ef5-7e71-4459-8c58-b4acee163e82/mp4/Burning+Steel+Wool.mp4" playsinline="" preload="none" loop="" data-testid="collectionVideoPreview" class="hidden" style="width: 100%; height: 100%; object-fit: cover;"></video> */}
    //                   {/* <video src="https://uploads.actionvfx.com/video/d14c7c0d-52ac-48c7-8530-4d4de285e7c7/mp4/Fire+Embers.mp4" playsinline="" preload="none" loop="" data-testid="collectionVideoPreview" class="hidden" style="width: 100%; height: 100%; object-fit: cover;"></video> */}
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="item-iconic save-icon">
    //               <MdBookmark onClick={handleButtonClick} />
    //               <span class="tooltiptext">Save</span>
    //             </div>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div className="card-container-shablon">
      {apiData?.map((e) => (
        <div className="shablon-card" key={e.id}>
          <div className="share-card" onClick={() => onChange(e.id)}>
            <FaShare />
            <motion.div
              className={
                val.key === e.id ? (val.value ? "share-icons" : "") : ""
              }
              animate={{ y: val.key === e.id ? (val.value ? 0 : 60) : 60 }}
              transition={{ type: "spring", stiffness: 460, damping: 20 }}
            >
              <FaTelegramPlane className="share-iconic" />
              <RiInstagramFill className="share-iconic" />
              <FaEnvelope className="share-iconic" />
              <FaSquareFacebook className="share-iconic" />
            </motion.div>
          </div>
          <div className="card-filter">
            <div className="media">
              <div className="img-filt">
                <img
                  src={e.image}
                  alt=""
                  onClick={() => navigate(`/cardDetail/${e?.id}`)}
                />
              </div>
              <ul className="media-icons">
                <li className="icons-item">
                  <IoIosEye />
                  <span>100</span>
                </li>
                <li className="icons-item">
                  <IoMdHeart />
                  <span>4590</span>
                </li>
                <li className="icons-item">
                  <BiSolidMessageRounded />
                  <span>234</span>
                </li>
              </ul>
            </div>
            <ul className="filt-title">
              <li className="filt-title-item">
                <h3>{e.title}</h3>
              </li>
              <li className="filt-title-item">
                <span className="title-item-head">O'rni: </span>Toshkent vil
                Bo'stonliq tumani
              </li>
              <li className="filt-title-item">
                <span className="title-item-head">Chog'i: </span>miloddan
                avvalgi 90-40 mingyillik
              </li>
              <li className="item-icons">
                <div className="item-iconic audio-icon" id="audio">
                  <AiFillAudio onClick={() => onChangeModal(e.id, "audio")} />
                  <span className="tooltiptext">Audio</span>
                  <div
                    className={
                      modal.key === e.id && modal.value === `audio${e.id}`
                        ? "modal-overlay div"
                        : "div"
                    }
                  >
                    <div className="close-modal">
                      <IoIosClose
                        onClick={() => onChangeModal(e.id, "close")}
                      />
                    </div>
                    <div className="modal-item">
                      <img
                        className={modal.value === `audio${e.id}` ? "exe" : ""}
                        src="../../../img/orn2.png"
                        alt=""
                      />
                      <h3 className="media-audio-title">MEDIA FILE NOMI</h3>
                      <audio src="" controls></audio>
                    </div>
                  </div>
                </div>
                <div className="item-iconic book-icon">
                  <IoBook onClick={() => onChangeModal(e.id, "text")} />
                  <span className="tooltiptext">Text</span>
                  <div
                    className={
                      modal.key === e.id && modal.value === `text${e.id}`
                        ? "text-modal-download div"
                        : "div"
                    }
                  >
                    <div className="download-card">
                      <div className="close-modal">
                        <IoIosClose
                          onClick={() => onChangeModal(e.id, "close")}
                        />
                      </div>
                      <h3>Tekst va Fayillar</h3>
                      <div className="download-item">
                        <img
                          id="dynamic-image"
                          style={{ width: "50px" }}
                          alt=""
                          src="../../../img/download.gif"
                        />
                        <p className="dwn-title">
                          Yuklanayotgan fayl nomi yoki kitob nomi bo'ladi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-iconic _3d-cion">
                  <AiOutlineCodeSandbox />
                  <span className="tooltiptext">3D</span>
                </div>
                <div className="item-iconic foto-icon">
                  <MdPhotoCamera onClick={() => onChangeModal(e.id, "photo")} />
                  <span className="tooltiptext">Foto</span>
                  <div
                    className={
                      modal.key === e.id && modal.value === `photo${e.id}`
                        ? "modal-photo"
                        : "div"
                    }
                  >
                    <div className="close-modal">
                      <IoIosClose
                        onClick={() => onChangeModal(e.id, "close")}
                      />
                    </div>
                    <Swiper
                      pagination={{ dynamicBullets: true }}
                      modules={[Pagination]}
                      className="mySwiper1"
                    >
                      <SwiperSlide>
                        <h1>Surat haqida ma'lumot</h1>
                        <img src="https://img.freepik.com/premium-photo/courtyard-kalyan-mosque-sunset-bukhara-uzbekistan-world-heritage_196911-11.jpg" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <h1>Surat haqida ma'lumot</h1>
                        <img src="https://img.freepik.com/premium-photo/courtyard-kalyan-mosque-sunset-bukhara-uzbekistan-world-heritage_196911-11.jpg" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <h1>Surat haqida ma'lumot</h1>
                        <img src="https://img.freepik.com/premium-photo/courtyard-kalyan-mosque-sunset-bukhara-uzbekistan-world-heritage_196911-11.jpg" />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="item-iconic map-icon">
                  <SiOpenstreetmap />
                  <span className="tooltiptext">Map</span>
                </div>
                <div className="item-iconic video-icon">
                  <IoVideocam onClick={() => onChangeModal(e.id, "video")} />
                  <span className="tooltiptext">Video</span>
                  <div
                    className={
                      modal.key === e.id && modal.value === `video${e.id}`
                        ? "modal-overlay div"
                        : "div"
                    }
                  >
                    <div className="close-modal">
                      <IoIosClose
                        onClick={() => onChangeModal(e.id, "close")}
                      />
                    </div>
                    <div className="modal-item">
                      <img
                        className={modal.value === `video${e.id}` ? "exe" : ""}
                        src="../../../img/orn2.png"
                        alt=""
                      />
                      <h3 className="media-audio-title">MEDIA FILE NOMI</h3>
                      <video src="" controls></video>
                    </div>
                  </div>
                </div>
                <div className="item-iconic collection-icon">
                  <MdBookmark onClick={handleButtonClick} />
                  <span className="tooltiptext">Kolleksiya</span>
                </div>
              </li>
            </ul>
            <ul className="filt-head">
              <li className="filt-head-item">
                <h3>Fayillar</h3>
                <ul className="file-list">
                  <li>Audio</li>
                  <li>Video</li>
                  <li>Kitob</li>
                </ul>
              </li>
              <li className="filt-head-item">
                <CiMenuKebab />
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
