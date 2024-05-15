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
import { FaUserAlt } from "react-icons/fa";
import { CiInboxIn } from "react-icons/ci";

import { CgDarkMode } from "react-icons/cg"; // darkmods
import { IoLanguage } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { VscColorMode } from "react-icons/vsc";
import Wather from "./component/Weather";

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
import ReactDatePicker from "./component/ReactDatePicker";
// import lentaBg from "../assets/img/lentaBg.jpg";

export default function Header() {
  const [hijriList, setHijriList] = useState({ year: "", day: "", month: "" });
  const regionObj = {
    tashkent: "Muharram",
    andijan: "Safar",
    bukhara: "Rabiul Avval",
    urgench: "Raius Soniy",
    samarkand: "Jumodul Avval",
    nurafshon: "Jumodus Soniy",
    nukus: "Rajab",
    navoiy: "Sha'bon",
    namangan: "Ramazon",
    jizzakh: "Shavvol",
    gulistan: "Zulqa'da ",
    fergana: "Zulhijja",
  };

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
    const manth = new Intl.DateTimeFormat("en-TN-u-ca-islamic", {
      day: "numeric",
      month: "numeric",
      weekday: "long",
      year: "numeric",
    }).format(new Date());
    console.log("oy nomi hijri", manth.split("/")[0]);
    console.log("oy nomi hijri", manth.split(" ")[1].slice(0, 2));
    if (manth.slice(11, 13) == "11") {
      console.log("dddddddddddddddddddddddddd");
    }

    switch (manth.split(" ")[1].slice(0, 2)) {
      case "1/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[2]}`,
          month: `Muharram`,
        });
        break;
      case "2/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[2]}`,
          month: `Safar`,
        });
        break;
      case "3/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[2]}`,
          month: `Rabiul Avval`,
        });
        break;
      case "4/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[2]}`,
          month: `Raius Soniy`,
        });
        break;
      case "5/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[2]}`,
          month: `Jumodul Avval`,
        });
        break;
      case "6/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[2]}`,
          month: `Jumodus Soniy`,
        });
        break;
      case "7/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[2]}`,
          month: `Rajab`,
        });
        break;
      case "8/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[2]}`,
          month: `Sha'bon`,
        });
        break;
      case "9/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[2]}`,
          month: `Ramazon`,
        });
        break;
      case "10":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[2]}`,
          month: `Shavvol`,
        });
        break;

      case "11":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[2]}`,
          month: `Zulqa'da`,
        });
        // console.log(hijriList);
        break;

      case "12":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)} yil`,
          day: `${manth.split("/")[1]}`,
          month: `Zulhijja`,
        });
        break;
    }
  }, []);

  const [primaryColor, setPrimaryColor] = useState("blue");
  const [showLn, setShowLn] = useState(false);
  const [showDRB, setShowDRB] = useState(false);
  const [showManba, setshowManba] = useState(false);
  useEffect(() => {
    document.querySelector("body").style.overflow = showDRB ? "hidden" : "auto";
  }, [showDRB]);

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

  // live time code

  return (
    <>
      <header>
        <div className="header-top-box">
          <Link className="logo-box" to="/">
            {/* <img className="logo" src={Logo} alt="Logo" /> */}
            {/* <h3>TARIXMANBA.UZ</h3> */}
            <h3>AQILLIY KUTUBXONA</h3>
          </Link>
          <div className="full__data__picer">
            <div className="live__time">
              <p>{time.toLocaleTimeString()}</p>
            </div>
            <div className="live__calendar">
              <ReactDatePicker />
              <div>
                {/* {new Intl.DateTimeFormat("en-TN-u-ca-islamic", {
                  day: "numeric",
                  month: "numeric",
                  weekday: "long",
                  year: "numeric",
                }).format(Date.now())} */}
              </div>
            </div>
          </div>

          <div className="ob-havo">
            <Wather />
          </div>

          <div className="search-box-bigs">
            <div className="search-box">
              <input
                className="search-inp"
                type="text"
                placeholder="Izlash"
                required
              />{" "}
              <span className="search-btn">
                <IoIosSearch />
              </span>
            </div>
            <div className="functionale">
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
                    <span className="lang-item">Pусский</span>
                  </motion.li>
                </motion.ul>
              </div>
              <div className="ham-menu">
                {" "}
                {/* menu bar  */}
                <CgMenuRightAlt
                  className="hamburger"
                  onClick={() => setShowDRB(!showDRB)}
                />
                <motion.div
                  className="drop-bar-menu"
                  style={{ display: showDRB ? "block" : "none" }}
                  initial={{ scale: 0, x: 150 }}
                  animate={{ scale: 1, x: showDRB ? 0 : 500 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 70,
                  }}
                >
                  <ul className="bar-menu-list">
                    <li className="close-drop-bar-menu">
                      <IoClose onClick={() => setShowDRB(!showDRB)} />
                      <div className="user">
                        <FaUserAlt /> Shaxsiy kabinet
                      </div>
                    </li>

                    <li className="bar-list-item wather-item-cont">
                      <Wather />
                    </li>
                    <li className="bar-list-item-max">
                      <button
                        className="ln-btn"
                        onClick={() => setShowLn(!showLn)}
                      >
                        Til
                      </button>
                      <div className="max-btn">
                        <span className="color-max one">A1</span>
                        <span className="color-max two">A2</span>
                        <span className="color-max there">A3</span>
                      </div>
                    </li>

                    <li
                      className="bar-list-item ln-container"
                      style={{ display: showLn ? "block" : "none" }}
                    >
                      <ul className="ln-list">
                        <li className="ln-list-item">English</li>
                        <li className="ln-list-item">Pусский</li>
                        <li className="ln-list-item">O'zbek</li>
                      </ul>
                    </li>
                    <li className="bar-list-item search-item-cont">
                      <form>
                        <input
                          placeholder="izlash"
                          type="text"
                          name="search"
                          id="search-bar"
                        />{" "}
                        <button className="bar-src-btn">Qidruv</button>
                      </form>
                    </li>

                    <li
                      className="bar-list-item-menu"
                      onClick={() => setshowManba(!showManba)}
                    >
                      <span>Manbalar</span>
                    </li>
                    <motion.li
                      className="bar-list-item-manba"
                      style={{ display: showManba ? "block" : "none" }}
                      // initial={{ scale: 0 }}
                      animate={{ x: showManba ? 0 : 100 }}
                      transition={{
                        type: "spring",
                        stiffness: 60000,
                        damping: 190,
                      }}
                    >
                      <ul className="manba-bar-drop">
                        <li>
                          <Link
                            className="bar-drop-link"
                            to="/sources/archive"
                            onClick={() => setShowDRB(!showDRB)}
                          >
                            {" "}
                            <TbBuildingCastle />
                            <span> Arxealogiya</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="bar-drop-link"
                            to="/sources/society"
                            onClick={() => setShowDRB(!showDRB)}
                          >
                            <HiUserGroup /> <span> Xalq og'zaki ijodi</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="bar-drop-link"
                            to="/sources/manuscript"
                            onClick={() => setShowDRB(!showDRB)}
                          >
                            <MdOutlineHistoryEdu /> <span> Qo'lyozmalar</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="bar-drop-link" to="/sources/coins">
                            <GiTwoCoins /> <span> Tangalar</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="bar-drop-link"
                            to="/sources/coins"
                            onClick={() => setShowDRB(!showDRB)}
                          >
                            <RiFilePaper2Line /> <span> Bitiklar</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="bar-drop-link"
                            onClick={() => setShowDRB(!showDRB)}
                          >
                            <LiaBoxOpenSolid /> <span> Tarixiy hujatlar</span>
                          </Link>
                        </li>
                        <li>
                          <Link className="bar-drop-link">
                            {" "}
                            <GiStamper />
                            <span> San'at asarlari</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="bar-drop-link"
                            onClick={() => setShowDRB(!showDRB)}
                          >
                            <CiInboxIn /> <span>Arxiv jamg'armalari</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="bar-drop-link"
                            onClick={() => setShowDRB(!showDRB)}
                          >
                            {" "}
                            <ImNewspaper />
                            <span> Matbuot</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="bar-drop-link"
                            onClick={() => setShowDRB(!showDRB)}
                          >
                            <FaPhotoFilm />
                            <span> Foto va video manbalar</span>
                          </Link>
                        </li>
                      </ul>
                    </motion.li>
                    <li className="bar-list-item-menu">
                      <Link to="/library">Kutubxona</Link>
                    </li>
                    <li className="bar-list-item-menu">
                      <Link to="/news">Yangiliklar</Link>{" "}
                    </li>
                    <li className="bar-list-item-menu">
                      <Link>Voqea</Link>{" "}
                    </li>
                    <li className="bar-list-item-menu">Biz haqimizda</li>
                    <li className="bar-list-item-menu" to="/login">
                      Login
                    </li>
                  </ul>
                </motion.div>
              </div>{" "}
              {/* menu bar- end  */}
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
                    <span> Arxeologiya</span>
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
                  <Link className="nav-drop-link" to="/sources/coins">
                    <RiFilePaper2Line /> <span> Bitiklar</span>
                  </Link>
                </motion.li>
                <motion.li
                  className="dorop-item"
                  whileHover={{ x: 15, opacity: 0.5 }}
                >
                  <Link className="nav-drop-link" to="/sources/coins">
                    <RiFilePaper2Line /> <span> Tarixiy yodgorliklar</span>
                  </Link>
                </motion.li>
                <motion.li
                  className="dorop-item"
                  whileHover={{ x: 15, opacity: 0.5 }}
                >
                  <Link className="nav-drop-link" to="/sources/manuscript">
                    <MdOutlineHistoryEdu /> <span> Yozma asarlar</span>
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
                  <Link className="nav-drop-link">
                    <LiaBoxOpenSolid /> <span> Tarixiy hujatlar</span>
                  </Link>
                </motion.li>

                <motion.li
                  className="dorop-item"
                  whileHover={{ x: 15, opacity: 0.5 }}
                >
                  <Link className="nav-drop-link">
                    <LiaBoxOpenSolid /> <span> Muhrlar</span>
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
                    <CiInboxIn /> <span>Arxiv hujjatlari</span>
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
              <Link to="/media" className="link">
                Voqea
              </Link>
            </div>
            <div className="nav-menu">
              <Link className="link">Biz haqimizda</Link>
            </div>
            <div
              className="nav-menu nav-login"
              onClick={() => {
                setLoginDrop(!loginDrop);
              }}
            >
              <Link className="link">Kirish</Link>
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
                    Kirish
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
        <Marquee>
          <div className="header_img_pattern">
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
      </header>
    </>
  );
}
