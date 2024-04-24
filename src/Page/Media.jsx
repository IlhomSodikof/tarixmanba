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
        {/* <p>
           <a data-fancybox="gallery" data-with="600" data-height="400" href={`data:image/jpeg;base64,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`} width="2000" height="1500" >
            <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAkYgVwkiDD35gLPM1jE-5rb3DPTBsPETh_w&usqp=CAU" width="200" height="150" />
          </a>

          <a data-fancybox="gallery" href="https://lipsum.app/id/35/1024x768">
            <img alt="" src="https://lipsum.app/id/35/200x150" />
          </a>

          <a data-fancybox="gallery" href="https://lipsum.app/id/36/1024x768">
            <img alt="" src="https://lipsum.app/id/36/200x150" />
          </a>
        </p> */}

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
    </div>
  );
}
