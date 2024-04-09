import React, { useRef, useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
// import { IoGlassesSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { GiSunglasses } from "react-icons/gi";
import { motion } from "framer-motion";

import { IoIosArrowUp } from "react-icons/io";

import { LiaBoxOpenSolid } from "react-icons/lia";
import { RiFilePaper2Line } from "react-icons/ri";
import { GiTwoCoins } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi2";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { TbBuildingCastle } from "react-icons/tb";
import { GiStamper } from "react-icons/gi";
import { FaPhotoFilm } from "react-icons/fa6";
import { ImNewspaper } from "react-icons/im";

import { CiInboxIn } from "react-icons/ci";

import { CgDarkMode } from "react-icons/cg"; // darkmods
import { IoLanguage } from "react-icons/io5";

import Wather from "./component/Wather";

// import image
import Logo from "../assets/img/Group 8.svg";
import lenta1 from "../assets/img/lenta1.png";
import lenta2 from "../assets/img/lenta2.png";
import lenta3 from "../assets/img/lenta3.png";
import lenta4 from "../assets/img/lenta4.png";
// import lenta5 from "../assets/img/lenta5.png";
import lenta6 from "../assets/img/lenta6.png";
import lenta7 from "../assets/img/lenta7.png";
import lentaLeft from "../assets/img/lenta_left.png";
import lentaRight from "../assets/img/lenta_right.png";
import lentaBg from "../assets/img/lentaBg.jpg";

export default function Header() {
  const [primaryColor, setPrimaryColor] = useState("blue");

  const handleClick = () => {
    // Yangi rangni tanlash uchun logika
    const background = "#263d73"; // Masalan, yangi rang
    const color = "#000";
    const card = "#fff";

    document.documentElement.style.setProperty("--background", background);
    document.documentElement.style.setProperty("--text-color", color);
    document.documentElement.style.setProperty("--card-back-color", card);
    // --primary-color atamasini yangi rangga o'zgartiramiz
    setPrimaryColor(background);
  };

  const handleClick1 = () => {
    // Yangi rangni tanlash uchun logika
    const background = "#000"; // Masalan, yangi rang
    const color = "blue";

    document.documentElement.style.setProperty("--background", background);
    document.documentElement.style.setProperty("--text-color", color);

    // --primary-color atamasini yangi rangga o'zgartiramiz
    setPrimaryColor(background);
  };
  const handleClick2 = () => {
    const background = "#000"; // Masalan, yangi rang
    const color = "#fff";
    const card = "#333333";

    document.documentElement.style.setProperty("--background", background); //'--text-color', color
    document.documentElement.style.setProperty("--text-color", color);
    document.documentElement.style.setProperty("--card-back-color", card);
    // --primary-color atamasini yangi rangga o'zgartiramiz
    setPrimaryColor(background);
  };

  const valRef = useRef(null);
  const valRefLogin = useRef(null);
  const valRefMax = useRef(null);

  const [drop, setDrop] = useState(false);
  const [maxDrop, setMaxDrop] = useState(false);
  const [loginDrop, setLoginDrop] = useState(false);

  const handleClickOutside = (event) => {
    if (valRef.current && !valRef.current.contains(event.target)) {
      setDrop(false);
    }
  };

  const handleClickOutsideLogin = (event) => {
    if (valRefLogin.current && !valRefLogin.current.contains(event.target)) {
      setLoginDrop(false);
    }
  };

  const handleClickOutsideMax = (event) => {
    if (valRefMax.current && !valRefMax.current.contains(event.target)) {
      setMaxDrop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutsideLogin);
    document.addEventListener("mousedown", handleClickOutsideMax);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutsideLogin);
      document.removeEventListener("mousedown", handleClickOutsideMax);
    };
  }, []);
  return (
    <>
      <header>
        <div className="header-top-box">
          <Link className="logo-box" to="/">
            <img className="logo" src={Logo} alt="Logo" />
          </Link>
          <div className="search-box-bigs">
            <div className="search-box">
              <input
                className="search-inp"
                type="text"
                placeholder="Search"
                required
              />{" "}
              <span className="search-btn">
                <IoIosSearch />
              </span>
            </div>
            <div className="functionale">
              <Wather />
              <div
                className="dark-m"
                onClick={() => {
                  setMaxDrop(!maxDrop);
                }}
              >
                <CgMenuRightAlt />
                <motion.ul
                  className={maxDrop ? "max-imkonyat" : ""}
                  ref={valRefMax}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, y: maxDrop ? -55 : 100 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                >
                  <motion.li className="max-item">
                    <div className="colors blue" onClick={handleClick}>
                      {" "}
                      A1{" "}
                    </div>
                    <div className="colors grey" onClick={handleClick1}>
                      {" "}
                      A2{" "}
                    </div>
                    <div className="colors black" onClick={handleClick2}>
                      {" "}
                      A3{" "}
                    </div>
                  </motion.li>
                  <motion.li className="lenguage">
                    <span className="lan-icon">
                      <IoLanguage className="icon-lan" /> Til
                    </span>
                    <span className="lang-item">O'zbek</span>
                    <span className="lang-item">English</span>
                    <span className="lang-item">Rus</span>
                  </motion.li>
                </motion.ul>
              </div>
              <div className="ham-menu">
                <CgMenuRightAlt className="hamburger" />
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div className="nav-box">
            <div
              className="nav-drop"
              onClick={() => {
                setDrop(!drop);
              }}
            >
              <Link className="link">Manbalar</Link>
              <motion.div
                className="arr"
                animate={{ rotate: drop ? 1080 : 540 }}
                transition={{
                  type: "spring",
                  stiffness: 560,
                  damping: 50,
                }}
              >
                {" "}
                <IoIosArrowUp />
              </motion.div>
              <motion.ul
                className={drop ? "menu-drop" : ""}
                ref={valRef}
                initial={{ scale: 0 }}
                animate={{ scale: 1, y: drop ? 3 : 100 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <motion.li
                  className="dorop-item"
                  whileHover={{ x: 15, opacity: 0.5 }}
                >
                  <Link className="nav-drop-link" to="/sources/archive">
                    {" "}
                    <TbBuildingCastle />
                    <span> Arxealogiya</span>
                  </Link>
                </motion.li>
                <motion.li
                  className="dorop-item"
                  whileHover={{ x: 15, opacity: 0.5 }}
                >
                  <Link className="nav-drop-link" to="/sources/society">
                    <HiUserGroup /> <span> Xalq og'zaki ijodi</span>
                  </Link>
                </motion.li>
                <motion.li
                  className="dorop-item"
                  whileHover={{ x: 15, opacity: 0.5 }}
                >
                  <Link className="nav-drop-link" to="/sources/manuscript">
                    <MdOutlineHistoryEdu /> <span> Qo'lyozmalar</span>
                  </Link>
                </motion.li>
                <motion.li
                  className="dorop-item"
                  whileHover={{ x: 15, opacity: 0.5 }}
                >
                  <Link className="nav-drop-link" to="/sources/coins">
                    <GiTwoCoins /> <span> Tangalar</span>
                  </Link>
                </motion.li>
                <motion.li
                  className="dorop-item"
                  whileHover={{ x: 15, opacity: 0.5 }}
                >
                  <Link className="nav-drop-link" to="/sources/coins">
                    <RiFilePaper2Line /> <span> Bitiklar</span>
                  </Link>
                </motion.li>

                <motion.li
                  className="dorop-item"
                  whileHover={{ x: 15, opacity: 0.5 }}
                >
                  <Link className="nav-drop-link">
                    <LiaBoxOpenSolid /> <span> Tarixiy hujatlar</span>
                  </Link>
                </motion.li>

                <motion.li
                  className="dorop-item"
                  whileHover={{ x: 15, opacity: 0.5 }}
                >
                  <Link className="nav-drop-link">
                    {" "}
                    <GiStamper />
                    <span> San'at asarlari</span>
                  </Link>
                </motion.li>
                <motion.li
                  className="dorop-item"
                  whileHover={{ x: 15, opacity: 0.5 }}
                >
                  <Link className="nav-drop-link">
                    <CiInboxIn /> <span>Arxiv jamg'armalari</span>
                  </Link>
                </motion.li>
                <motion.li
                  className="dorop-item"
                  whileHover={{ x: 15, opacity: 0.5 }}
                >
                  <Link className="nav-drop-link">
                    {" "}
                    <ImNewspaper />
                    <span> Matbuot</span>
                  </Link>
                </motion.li>
                <motion.li
                  className="dorop-item"
                  whileHover={{ x: 15, opacity: 0.5 }}
                >
                  <Link className="nav-drop-link">
                    <FaPhotoFilm />
                    <span> Foto va video manbalar</span>
                  </Link>
                </motion.li>
              </motion.ul>
            </div>
            <div className="nav-menu">
              <Link to="/library" className="link">
                Kutubxona
              </Link>
            </div>
            <div className="nav-menu">
              <Link to="/news" className="link">
                Yangiliklar
              </Link>
            </div>
            <div className="nav-menu">
              <Link className="link">Voqea</Link>
            </div>
            <div className="nav-menu">
              <Link className="link">Bizhaqimizda</Link>
            </div>
            <div
              className="nav-menu nav-login"
              onClick={() => {
                setLoginDrop(!loginDrop);
              }}
            >
              <Link className="link">Login</Link>
              <motion.div
                className="arr"
                animate={{ rotate: loginDrop ? 1080 : 540 }}
                transition={{
                  type: "spring",
                  stiffness: 560,
                  damping: 50,
                }}
              >
                {" "}
                <IoIosArrowUp />
              </motion.div>

              <motion.ul
                className={loginDrop ? "menu-login" : ""}
                ref={valRefLogin}
                initial={{ scale: 0 }}
                animate={{ scale: 1, y: loginDrop ? 3 : 100 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <motion.li
                  className="login-item"
                  whileHover={{ x: 15, opacity: 0.5 }}
                >
                  <Link className="nav-login-link" to="/login">
                    Login
                  </Link>
                </motion.li>
                <motion.li
                  className="login-item"
                  whileHover={{ x: 15, opacity: 0.5 }}
                >
                  <Link className="nav-login-link">Registratsiya</Link>
                </motion.li>
              </motion.ul>
            </div>
          </div>
        </nav>
        {/* <img className='header-bottom-img' src="./Screenshot 2024-03-17 224153.png" alt="imgs" /> */}
        <Marquee>
          {/* <div className="header-img-pattern-bgImg">
            <img src={lentaBg} alt="" />
          </div> */}
          <div className="header-img-pattern">
            {/* <img
              src="https://www.worldhistory.org/template/images/header/subject_headers/mesopotamia_shadow.jpg"
              alt=""
            />
            <img
              src="https://www.worldhistory.org/template/images/header/subject_headers/mesopotamia_shadow.jpg"
              alt=""
            />
            <img
              src="https://www.worldhistory.org/template/images/header/subject_headers/mesopotamia_shadow.jpg"
              alt=""
            /> */}
            <img src={lentaLeft} alt="" />
            <img src={lenta1} alt="" />
            <img src={lenta2} alt="" />
            <img src={lenta3} alt="" />
            <img src={lenta4} alt="" />
            <img src={lenta6} alt="" />
            <img src={lenta7} alt="" />
            <img src={lentaRight} alt="" />
            <img src={lenta1} alt="" />
            <img src={lenta2} alt="" />
            <img src={lenta3} alt="" />
            <img src={lenta4} alt="" />
            <img src={lenta6} alt="" />
            <img src={lenta7} alt="" />
            <img src={lentaLeft} alt="" />
            <img src={lenta1} alt="" />
            <img src={lenta2} alt="" />
            <img src={lenta3} alt="" />
            <img src={lenta4} alt="" />
            <img src={lenta6} alt="" />
            <img src={lenta7} alt="" />
            <img src={lentaRight} alt="" />
            <img src={lenta1} alt="" />
            <img src={lenta2} alt="" />
            <img src={lenta3} alt="" />
            <img src={lenta4} alt="" />
            <img src={lenta6} alt="" />
            <img src={lenta7} alt="" />
            <img src={lentaLeft} alt="" />
            <img src={lenta1} alt="" />
            <img src={lenta2} alt="" />
            <img src={lenta3} alt="" />
            <img src={lenta4} alt="" />
            <img src={lenta6} alt="" />
            <img src={lenta7} alt="" />
            <img src={lentaRight} alt="" />
            <img src={lenta1} alt="" />
            <img src={lenta2} alt="" />
            <img src={lenta3} alt="" />
            <img src={lenta4} alt="" />
            <img src={lenta6} alt="" />
            <img src={lenta7} alt="" />
          </div>
        </Marquee>

        {/* <div class="slider">
          <div class="slide-track">
            <div class="slide">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
            </div>

          </div>
        </div> */}
      </header>
    </>
  );
}
