import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMoonClearFill } from "react-icons/ri";
import { IoSunny } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from 'framer-motion'
import { HiUserCircle } from "react-icons/hi2";



export default function Header() {
  const valRef = useRef(null)
  const [drop, setDrop] = useState(false)
  const [num, setNum] = useState(0)
  const [moon, setMoon] = useState(false)
  const [opa, setOpa] = useState(false)

  const handleClickOutside = (event) => {
    if (valRef.current && !valRef.current.contains(event.target)) {
      setDrop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div className="nav-container">
        <div className='nav-firs-item'>

          <div className='nav-logo' onClick={() => { setNum(-100), setOpa(false) }} ref={valRef}> TARIXMANBA.UZ</div>
          <button className='nav-drop' onClick={() => { setDrop(true) }} >
            <span>Manbalar</span> <motion.div className='arr' animate={{ rotate: drop ? 1080 : 540 }}
              transition={{
                type: "spring",
                stiffness: 560,
                damping: 50
              }}> <IoIosArrowUp /></motion.div>
            <motion.ul className={drop ? "menu-drop" : ""}
              onClick={() => { setNum(-100), setOpa(0), setDrop(false) }}

              initial={{ scale: 0 }}
              animate={{ scale: 1, y: drop ? -70 : 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >
              <li className="dorop-item" onClick={() => { setNum(-100), setOpa(false) }} >
                <Link><span>Qo'lyozmalar</span></Link>
              </li>
              <li className="dorop-item" onClick={() => { setNum(-100), setOpa(false) }}>
                <Link><span>Yozma manbalar</span></Link>
              </li>
              <li className="dorop-item" onClick={() => { setNum(-100), setOpa(false) }}>
                <Link><span>Xalq og'zaki ijodi</span></Link>
              </li>
              <li className="dorop-item" onClick={() => { setNum(-100), setOpa(false) }}>
                <Link><span>Tarixiy xujatlar</span></Link>
              </li>
              <li className="dorop-item" onClick={() => { setNum(-100), setOpa(false) }}>
                <Link><span>Tangalar</span></Link>
              </li>
              <li className="dorop-item" onClick={() => { setNum(-100), setOpa(false) }}>
                <Link><span>Muhirlar</span></Link>
              </li>
              <li className="dorop-item" onClick={() => { setNum(-100), setOpa(false) }}>
                <Link><span>Memorchilik</span></Link>
              </li>
              <li className="dorop-item" onClick={() => { setNum(-100), setOpa(false) }}>
                <Link><span>Matbuot</span></Link>
              </li>
              <li className="dorop-item" onClick={() => { setNum(-100), setOpa(false) }}>
                <Link><span>Foto va video manbalar</span></Link>
              </li>
            </motion.ul>
          </button>

          <div className='nav-menu'>
            <motion.div className='anime-box'
              animate={{ x: num, opacity: opa ? 1 : 0 }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 20
              }}></motion.div>
            <button className='nav-btn'><Link style={{ color: "white" }} onClick={() => { setOpa(true), setNum(0) }}>Biz haqimizda</Link></button>
            <button className='nav-btn'><Link style={{ color: "white" }} onClick={() => { setOpa(true), setNum(154) }}>Yangiliklar</Link></button>
            <button className='nav-btn'><Link style={{ color: "white" }} onClick={() => { setOpa(true), setNum(284) }}>Kutubxona</Link></button>
            <button className='nav-btn'><Link style={{ color: "white" }} onClick={() => { setOpa(true), setNum(417) }}>Bog'lanish</Link></button>
          </div>
        </div>
        <div className="nav-last-item">
          <div className='kabinet' onClick={() => { setOpa(false), setNum(500) }}><Link style={{ color: "white", }}><HiUserCircle /></Link></div>
          <motion.div className='dark-mood' onClick={() => { setMoon(!moon), setNum(1000), setOpa(0) }}
            whileTap={{
              scale: 0.8,
              rotate: 180,
              borderRadius: "100%"
            }}
          >{moon ? <RiMoonClearFill /> : <IoSunny className='sun' />}</motion.div>
        </div>
      </div>
    </nav >
  )
}
