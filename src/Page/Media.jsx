import React, { useEffect, useRef, useState } from "react";
import { LiaBoxOpenSolid } from "react-icons/lia";
import { RiFilePaper2Line } from "react-icons/ri";
import { GiTwoCoins } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi2";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { TbBuildingCastle } from "react-icons/tb";
import { GiStamper } from "react-icons/gi";
import { FaPhotoFilm } from "react-icons/fa6";
import { ImNewspaper } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { CiInboxIn } from "react-icons/ci";
import gsap from "gsap";
import { motion } from "framer-motion";
import { PiPlayCircleBold } from "react-icons/pi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper/modules";
import Fancybox from "../Components/component/Fancybox";
export default function Media() {
  const [animationIsOk, setAnimationIsOk] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.play();
  }, []);

  useEffect(() => {
    const checkAnimationPreference = () => {
      const mediaQuery = window.matchMedia(
        "(prefers-reduced-motion: no-preference)"
      );
      setAnimationIsOk(mediaQuery.matches);
    };

    checkAnimationPreference();
    window.addEventListener("resize", checkAnimationPreference);

    return () => {
      window.removeEventListener("resize", checkAnimationPreference);
    };
  }, []);

  useEffect(() => {
    if (animationIsOk) {
      const tl = gsap.timeline({
        delay: 1.7,
        defaults: {
          transformOrigin: "right center",
          ease: "expo.out",
          duration: 1.2,
          stagger: {
            each: 0.5,
            from: "end",
          },
        },
      });
      tl.set(".fouc--hero", {
        opacity: 1,
      })
        .from(".hero__swipe-1", {
          scaleX: 0,
        })
        .from(
          ".hero__swipe-2",
          {
            scaleX: 0,
          },
          "<"
        )
        .from(
          ".hero__swipe-3",
          {
            scaleX: 0,
          },
          "<"
        )
        .from(
          ".hero__swipe-4",
          {
            scaleX: 0,
          },
          "<"
        )
        .from(
          ".hero__circle",
          {
            duration: 0.7,
            transformOrigin: "center",
            opacity: 0,
            scale: 0.7,
            ease: "sine.out",
          },
          "<"
        );
    }
  }, [animationIsOk]);

  return (
    <div className="media-container">
      <div className="imgsvg">
        <motion.video
          ref={videoRef}
          loop
          width={"1000"}
          height={"100"}
          initial={{ x: -190 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 90,
          }}
        >
          <source
            src="https://www.shutterstock.com/shutterstock/videos/1107071975/preview/stock-footage-aerial-drone-view-of-unfinished-minaret-of-kalta-minor-in-khiva-old-town-uzbekistan-central-asia.mp4"
            type="video/mp4"
          />
        </motion.video>
        {/* <img className='' src="https://s6.ezgif.com/tmp/ezgif-6-39aacdf1fa.gif" alt="no" /> */}
        <motion.h2
          id="title-gallery-img"
          initial={{ x: -190 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 80,
          }}
        >
          <span className="span-g2"> </span> TARIXIY NODIR TOPILMALARGA
          <br /> <span className="span-g1"> </span>SURATLAR VA VIDOLAR ORQALI
          <br /> SAYOHAT QILING !
        </motion.h2>
        <svg className="Hero__image-grid anim-hero" viewBox="0 0 590.91 632.66">
          <defs>
            <clipPath id="heroclip1">
              <rect
                className="hero__swipe-1"
                id="heroclip1Rect"
                x="101.31"
                y="51.24"
                width="488.79"
                height="221.87"
                fill="#fff"
                data-svg-origin="590.1000061035156 162.17499923706055"
                transform="matrix(1,0,0,1,0,0)"
                style={{ transformOrigin: "0px 0px" }}
              ></rect>
            </clipPath>
            <clipPath id="heroclip2">
              <rect
                class="hero__swipe-2"
                id="heroclip1Rect"
                x="195.36"
                y="293.94"
                width="292.4"
                height="268.6"
                fill="#fff"
                data-svg-origin="487.75999450683594 428.24000549316406"
                transform="matrix(1,0,0,1,0,0)"
                style={{ transformOrigin: "0px 0px" }}
              ></rect>
            </clipPath>
            <clipPath id="heroclip3">
              <rect
                class="hero__swipe-3"
                id="heroclip3Rect"
                x="1.73"
                y="233.41"
                width="174.53"
                height="162.61"
                fill="#fff"
                data-svg-origin="176.25999879837036 314.71500396728516"
                transform="matrix(1,0,0,1,0,0)"
                style={{ transformOrigin: "0px 0px" }}
              ></rect>
            </clipPath>

            <clipPath id="heroclip4">
              <rect
                class="hero__swipe-4"
                id="heroclip4Rect"
                x="100.03"
                y="405.79"
                width="75.83"
                height="73.12"
                fill="#fff"
                data-svg-origin="175.86000061035156 442.3500099182129"
                transform="matrix(1,0,0,1,0,0)"
                style={{ transformOrigin: "0px 0px" }}
              ></rect>
            </clipPath>

            {/* Qolgan clipPath lar */}
          </defs>
          <g
            className="fouc fouc--hero"
            opacity="0"
            data-svg-origin="591 314.5249938964844"
            transform="matrix(1,0,0,1,0,0)"
            style={{ transformOrigin: "0px 0px", opacity: "1" }}
          >
            <circle
              className="hero__circle"
              cx="90.18"
              cy="79.56"
              r="50"
              fill="#dae1e2"
              data-svg-origin="90.18000030517578 79.55999755859375"
              transform="matrix(1,0,0,1,0,0)"
              style={{ transformOrigin: "0px 0px", opacity: "1" }}
            ></circle>
            <circle
              className="hero__circle"
              cx="488.39"
              cy="563.49"
              r="30"
              fill="#23d8a0"
              data-svg-origin="488.3900146484375 563.489990234375"
              transform="matrix(1,0,0,1,0,0)"
              style={{ transformOrigin: "0px 0px", opacity: "1" }}
            ></circle>
            {/* Qolgan SVG elementlar */}
            <rect
              class="hero__swipe-1"
              x="102"
              y="52"
              width="488"
              height="220"
              fill="#6ca1f7"
              data-svg-origin="590 162"
              transform="matrix(1,0,0,1,0,0)"
              style={{ transformOrigin: "0px 0px" }}
            ></rect>
            <rect
              class="hero__swipe-2"
              x="196"
              y="294"
              width="292"
              height="268"
              fill="#6ca1f7"
              data-svg-origin="488 428"
              transform="matrix(1,0,0,1,0,0)"
              style={{ transformOrigin: "0px 0px" }}
            ></rect>
            <rect
              class="hero__swipe-3"
              x="2"
              y="234"
              width="173"
              height="162"
              fill="#6ca1f7"
              data-svg-origin="175 315"
              transform="matrix(1,0,0,1,0,0)"
              style={{ transformOrigin: "0px 0px" }}
            ></rect>
            <rect
              class="hero__swipe-4"
              x="101"
              y="406"
              width="75"
              height="73"
              fill="#6ca1f7"
              data-svg-origin="176 442.5"
              transform="matrix(1,0,0,1,0,0)"
              style={{ transformOrigin: "0px 0px" }}
            ></rect>
            <image
              clipPath="url(#heroclip1)"
              href="https://img.freepik.com/premium-photo/blue-mosque-bukhara_882954-19292.jpg"
              preserveAspectRatio="xMidYMid slice"
              x="101"
              y="51"
              width="490"
              height="223"
            ></image>
            <image
              clipPath="url(#heroclip2)"
              href="  https://img.freepik.com/premium-photo/poikalyan-sq…kalyan-minaret-bukhara-uzbekistan_441873-1766.jpg"
              preserveAspectRatio="xMidYMid slice"
              x="195"
              y="293"
              width="294"
              height="270"
            ></image>
            <image
              clipPath="url(#heroclip3)"
              href="  https://img.freepik.com/premium-photo/islam-khodja…co-heritage-site-khiva-uzbekistan_261932-2867.jpg "
              preserveAspectRatio="xMidYMid slice"
              x="1"
              y="233"
              width="176"
              height="164"
            ></image>
            <image
              clipPath="url(#heroclip4)"
              href="  https://img.freepik.com/premium-photo/inside-bibik…nside-passage-old-mosque-minaret_431724-14297.jpg"
              preserveAspectRatio="xMidYMid slice"
              x="99"
              y="404"
              width="78"
              height="76"
            ></image>
          </g>
        </svg>
      </div>

      <div className="media-menu">
        <div className="avatar-cont">
          <div className="border-anime"></div>

          <div className="avatar-border">
            <span className="avatar">
              <TbBuildingCastle />
            </span>
          </div>
          <h3>Arxeologiya</h3>
        </div>

        <div className="avatar-cont">
          <div className="border-anime"></div>
          <div className="avatar-border">
            <span className="avatar">
              <HiUserGroup />
            </span>
          </div>
          <h3>Xalq og'zaki Ijodi</h3>
        </div>

        <div className="avatar-cont">
          <div className="border-anime"></div>

          <div className="avatar-border">
            <span className="avatar">
              <MdOutlineHistoryEdu />
            </span>
          </div>
          <h3>Qo'lyozmalar</h3>
        </div>

        <div className="avatar-cont">
          <div className="border-anime"></div>

          <div className="avatar-border">
            <span className="avatar">
              <GiTwoCoins />
            </span>
          </div>
          <h3>Tangalar</h3>
        </div>

        <div className="avatar-cont">
          <div className="border-anime"></div>

          <div className="avatar-border">
            <span className="avatar">
              <ImNewspaper />
            </span>
          </div>
          <h3>Bitiklar</h3>
        </div>

        <div className="avatar-cont">
          <div className="border-anime"></div>

          <div className="avatar-border">
            <span className="avatar">
              <CiInboxIn />
            </span>
          </div>
          <h3>Arxiv</h3>
        </div>

        <div className="avatar-cont">
          <div className="border-anime"></div>

          <div className="avatar-border">
            <span className="avatar">
              <GiStamper />
            </span>
          </div>
          <h3>Matbuot</h3>
        </div>

        {/* <div className='avatar-cont'>
          <div className="avatar-border">
            <span className="avatar"><FaPhotoFilm /></span>
          </div>
          <h3>Menu Nomi</h3>
        </div> */}

        <div className="avatar-cont">
          <div className="border-anime"></div>

          <div className="avatar-border">
            <span className="avatar">
              <RiFilePaper2Line />
            </span>
          </div>
          <h3>Menu Nomi</h3>
        </div>

        <div className="avatar-cont">
          <div className="border-anime"></div>

          <div className="avatar-border">
            <span className="avatar">
              <LiaBoxOpenSolid />
            </span>
          </div>
          <h3>Tarixiy xujjatlar</h3>
        </div>
      </div>
      {/* data-sizes="(max-width: 1600px) 1880px, 1300px" */}
      <Fancybox>

        <section class="galery">
          <a data-fancybox="gallery" href="https://lipsum.app/id/35/1024x768">
            <img alt="" src="https://lipsum.app/id/35/200x150" />
          </a>

          <a data-fancybox="gallery" href="https://lipsum.app/id/36/1024x768">
            <img alt="" src="https://lipsum.app/id/36/200x150" />
          </a>
          <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
            <img
              src="https://lipsum.app/id/60/200x150"
              width="200"
              height="150"
            />
          </a>
          <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
            <img
              src="https://lipsum.app/id/60/200x150"
              width="200"
              height="150"
            />
          </a>

          <a data-fancybox="gallery" href="https://lipsum.app/id/36/1024x768">
            <img alt="" src="https://lipsum.app/id/36/200x150" />
          </a>

          <a data-fancybox="gallery" href="https://lipsum.app/id/35/1024x768">
            <img alt="" src="https://lipsum.app/id/35/200x150" />
          </a>
          <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
            <img
              src="https://lipsum.app/id/60/200x150"
              width="200"
              height="150"
            />
          </a>
          <a data-fancybox="gallery" href="https://lipsum.app/id/35/1024x768">
            <img alt="" src="https://lipsum.app/id/35/200x150" />
          </a>
        </section>
      </Fancybox>

      <div className="video-media">

        <div className="video-live">
          {/* <video src=""></video> */}
          <div className="video"
            style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpOakbcX5y1tehaC6HS_xQ9K7h1buhUmXjA&usqp=CAU")` }}
          >
            <PiPlayCircleBold className="logo-vid" />
          </div>
          <div className="video-child">
            <h3>Videolar haqida norm gaplar yoziladi bu joyga bu joyga</h3>
          </div>
        </div>
        <div className="video-list">
          <h1>Video Galerey</h1>
          <p className="video-title">
            Videolar haqida norm gaplar yoziladi bu joyga bu joy seryozniy joy hazillashmela
          </p>
          <div className="video-list-item">
            <div className="child-card">
              <div className="video-child"
                style={{ backgroundImage: `url("https://image.shutterstock.com/image-photo/wonderful-view-meridian-gate-hue-260nw-1625501023.jpg")` }}
              >
                <PiPlayCircleBold className="logo-vid" />
              </div>
              <h3>name info video list item</h3>
            </div>

            <div className="child-card">
              <div className="video-child" style={{ backgroundImage: `url("https://image.shutterstock.com/image-photo/wonderful-view-meridian-gate-hue-260nw-1625501023.jpg")` }}><PiPlayCircleBold className="logo-vid" /></div>
              <h3>name info video list item</h3>
            </div>

            <div className="child-card">
              <div className="video-child" style={{ backgroundImage: `url("https://image.shutterstock.com/image-photo/wonderful-view-meridian-gate-hue-260nw-1625501023.jpg")` }}><PiPlayCircleBold className="logo-vid" /></div>
              <h3>name info video list item</h3>
            </div>

            <div className="child-card">
              <div className="video-child" style={{ backgroundImage: `url("https://image.shutterstock.com/image-photo/wonderful-view-meridian-gate-hue-260nw-1625501023.jpg")` }}><PiPlayCircleBold className="logo-vid" /></div>
              <h3>name info video list item</h3>
            </div>

            <div className="child-card">
              <div className="video-child" style={{ backgroundImage: `url("https://image.shutterstock.com/image-photo/wonderful-view-meridian-gate-hue-260nw-1625501023.jpg")` }}><PiPlayCircleBold className="logo-vid" /></div>
              <h3>name info video list item</h3>
            </div>

            <div className="child-card">
              <div className="video-child" style={{ backgroundImage: `url("https://image.shutterstock.com/image-photo/wonderful-view-meridian-gate-hue-260nw-1625501023.jpg")` }}><PiPlayCircleBold className="logo-vid" /></div>
              <h3>name info video list item</h3>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
