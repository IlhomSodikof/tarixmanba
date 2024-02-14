import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMoonClearFill } from "react-icons/ri";
import { IoSunny } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from 'framer-motion'
import { HiUserCircle } from "react-icons/hi2";
import { LiaBoxOpenSolid } from "react-icons/lia";
import { RiFilePaper2Line } from "react-icons/ri";
import { GiTwoCoins } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi2";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { TbBuildingCastle } from "react-icons/tb";
import { GiStamper } from "react-icons/gi";
import { FaPhotoFilm } from "react-icons/fa6";
import { ImNewspaper } from "react-icons/im";
import { BiSearchAlt } from "react-icons/bi";
import { RiMenu5Line } from "react-icons/ri";
import { CiInboxIn } from "react-icons/ci";

export default function Header() {
  const valRef = useRef(null)
  const [drop, setDrop] = useState(false)
  const [num, setNum] = useState(0)
  const [moon, setMoon] = useState(false)
  const [opa, setOpa] = useState(false)
  const [inp, setInp] = useState(false)

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

          <div className='nav-logo' onClick={() => { setNum(-100), setOpa(false) }}> <Link className='nav-logo-link' >TARIXMANBA.UZ</Link></div>
          <button className='nav-drop' onClick={() => { setDrop(!drop) }} >
            <span>Manbalar</span> <motion.div className='arr' animate={{ rotate: drop ? 1080 : 540 }}
              transition={{
                type: "spring",
                stiffness: 560,
                damping: 50
              }}> <IoIosArrowUp /></motion.div>
            <motion.ul className={drop ? "menu-drop" : ""}
              onClick={() => { setNum(-100), setOpa(0) }}
              ref={valRef}

              initial={{ scale: 0 }}
              animate={{ scale: 1, y: drop ? -70 : 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >
              <motion.li className="dorop-item" onClick={() => { setNum(-100), setOpa(false) }} whileHover={{ x: 15, opacity: 0.5 }} >
                <Link className='nav-drop-link'> <TbBuildingCastle /><span> Arxealogiya</span></Link>
              </motion.li>
              <motion.li className="dorop-item" onClick={() => { setNum(-100), setOpa(false) }} whileHover={{ x: 15, opacity: 0.5 }} >
                <Link className='nav-drop-link'><HiUserGroup /> <span> Xalq og'zaki ijodi</span></Link>
              </motion.li>
              <motion.li className="dorop-item" onClick={() => { setNum(-100), setOpa(false) }} whileHover={{ x: 15, opacity: 0.5 }} >
                <Link className='nav-drop-link'><MdOutlineHistoryEdu /> <span> Qo'lyozmalar</span></Link>
              </motion.li>
              <motion.li className="dorop-item" onClick={() => { setNum(-100), setOpa(false) }} whileHover={{ x: 15, opacity: 0.5 }} >
                <Link className='nav-drop-link'><GiTwoCoins /> <span> Tangalar</span></Link>
              </motion.li>
              <motion.li className="dorop-item" onClick={() => { setNum(-100), setOpa(false) }} whileHover={{ x: 15, opacity: 0.5 }} >
                <Link className='nav-drop-link'><RiFilePaper2Line /> <span> Bitiklar</span></Link>
              </motion.li>

              <motion.li className="dorop-item" onClick={() => { setNum(-100), setOpa(false) }} whileHover={{ x: 15, opacity: 0.5 }} >
                <Link className='nav-drop-link'>< LiaBoxOpenSolid /> <span> Tarixiy hujatlar</span></Link>
              </motion.li>

              <motion.li className="dorop-item" onClick={() => { setNum(-100), setOpa(false) }} whileHover={{ x: 15, opacity: 0.5 }} >
                <Link className='nav-drop-link'> <GiStamper /><span> San'at asarlari</span></Link>
              </motion.li>
              <motion.li className="dorop-item" onClick={() => { setNum(-100), setOpa(false) }} whileHover={{ x: 15, opacity: 0.5 }} >
                <Link className='nav-drop-link'><CiInboxIn /> <span>Arxiv jamg'armalari</span></Link>
              </motion.li>
              <motion.li className="dorop-item" onClick={() => { setNum(-100), setOpa(false) }} whileHover={{ x: 15, opacity: 0.5 }} >
                <Link className='nav-drop-link'> <ImNewspaper /><span>  Matbuot</span></Link>
              </motion.li>
              <motion.li className="dorop-item" onClick={() => { setNum(-100), setOpa(false) }} whileHover={{ x: 15, opacity: 0.5 }} >
                <Link className='nav-drop-link'><FaPhotoFilm /><span>  Foto va video manbalar</span></Link>
              </motion.li>
            </motion.ul>
          </button>

          <div className='nav-menu'>
            <motion.div className='anime-box'
              animate={{ x: num, opacity: opa ? 1 : 0, scaleX: opa ? opa : .5 }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 15
              }}></motion.div>
            <button className='nav-btn'><Link className='nav-btn-link' onClick={() => { setOpa(0.75), setNum(-10) }}>Kutubxona</Link></button>
            <button className='nav-btn'><Link className='nav-btn-link' onClick={() => { setOpa(0.7), setNum(122) }}>Yangiliklar</Link></button>
            <button className='nav-btn'><Link className='nav-btn-link' onClick={() => { setOpa(0.45), setNum(242) }}>Voqea</Link></button>
            <button className='nav-btn'><Link className='nav-btn-link' onClick={() => { setOpa(1.01), setNum(373) }}>Biz haqimizda</Link></button>
          </div>
        </div>
        <div className="nav-last-item">
          <form className="input-wrapper-search">

            <motion.div className='inp-cont'>
              <input placeholder="search.." className="input-search" name="text" type="text" />
            </motion.div>
            <motion.button className="icon-search"
              onClick={() => {
                setInp(true)
              }}
              whileHover={{
                // scale: 0.8,
                rotate: 360,
                borderRadius: "100%"
              }}

              transition={{
                type: "spring",
                stiffness: 560,
                damping: 75
              }}>
              <BiSearchAlt />
            </motion.button>
          </form>
          <div className='kabinet' onClick={() => { setOpa(false), setNum(500) }}><Link className='kabinet-link' ><HiUserCircle /></Link></div>
          <motion.div className='dark-mood' onClick={() => { setMoon(!moon), setNum(1000), setOpa(0) }}
            whileTap={{
              scale: 0.8,
              rotate: 180,
              borderRadius: "100%"
            }}
          >{moon ? <RiMoonClearFill /> : <IoSunny className='sun' />}</motion.div><RiMenu5Line className='ham-menu' />
        </div>


      </div>
    </nav >
  )
}
