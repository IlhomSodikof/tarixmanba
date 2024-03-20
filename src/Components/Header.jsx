import React, { useRef, useState, useEffect } from "react";
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

import Logo from "../../img/Group 8.svg";

export default function Header() {
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
          <Link className="logo-box">
            <img className="logo" src={Logo} alt="Logo" />
          </Link>
          <div className="search-box-bigs">
            <div className="search-box">
              <input
                className="search-inp"
                type="search"
                placeholder="Search"
                required
              />{" "}
              <span className="search-btn">
                <IoIosSearch />
              </span>
            </div>
            <div className="functionale">
              <div className="ob-havo">Toshkent 18+ ... 20+ C</div>
              <div
                className="dark-m"
                onClick={() => {
                  setMaxDrop(!maxDrop);
                }}
              >
                <GiSunglasses /> <span>Maxsus imkonyatlar</span>
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
                    <div className="colors blue"> A </div>
                    <div className="colors grey"> A </div>
                    <div className="colors black"> A </div>
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
                  <Link className="nav-drop-link">
                    {" "}
                    <TbBuildingCastle />
                    <span> Arxealogiya</span>
                  </Link>
                </motion.li>
                <motion.li
                  className="dorop-item"
                  whileHover={{ x: 15, opacity: 0.5 }}
                >
                  <Link className="nav-drop-link">
                    <HiUserGroup /> <span> Xalq og'zaki ijodi</span>
                  </Link>
                </motion.li>
                <motion.li
                  className="dorop-item"
                  whileHover={{ x: 15, opacity: 0.5 }}
                >
                  <Link className="nav-drop-link">
                    <MdOutlineHistoryEdu /> <span> Qo'lyozmalar</span>
                  </Link>
                </motion.li>
                <motion.li
                  className="dorop-item"
                  whileHover={{ x: 15, opacity: 0.5 }}
                >
                  <Link className="nav-drop-link">
                    <GiTwoCoins /> <span> Tangalar</span>
                  </Link>
                </motion.li>
                <motion.li
                  className="dorop-item"
                  whileHover={{ x: 15, opacity: 0.5 }}
                >
                  <Link className="nav-drop-link">
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
              <Link className="link">Kutubxona</Link>
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
                  <Link className="nav-login-link">Login</Link>
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
        <div className="header-img-pattern">{/* back-img */}</div>
      </header>
    </>
  );
}
