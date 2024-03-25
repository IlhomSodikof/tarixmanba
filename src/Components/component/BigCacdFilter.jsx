import React, { useState } from 'react'
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

export default function BigCacdFilter() {
  const [val, setVal] = useState({ key: '', value: false })

  return (

    <div className="card-container-shablon"> {/* //card-container */}

      <div className='shablon-map'>{/* //map */}

      </div>{/* //map-end */}
      {[1, 2, 3, 4, 5, 56, 6, 6, 7, 7, 8].map((e) =>

        <div className="shablon-card" key={e}>
          <div className="share-card" onClick={() => setVal({ ...val, key: e, value: !val.value })}>
            {/* <CiMenuKebab /> */}
            <FaShare />
            <motion.div className={val.key == e ? val.value ? "share-icons" : "" : ""}
              // initial={{ scale: 0 }}
              animate={{ y: val.key == e ? val.value ? 0 : 60 : 60 }}
              transition={{
                type: "spring",
                stiffness: 460,
                damping: 20,
              }}

            >
              <FaTelegramPlane className='share-iconic' /> <RiInstagramFill className='share-iconic' /> <FaEnvelope className='share-iconic' /> <FaSquareFacebook className='share-iconic' />
            </motion.div>
          </div>
          <div className="card-filter">
            <div className="media">
              <div className="img-filt" style={{ background: "url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdXO_qkk2IrtLqtwb8IZNNQ4u1MHT-UnvV5g&usqp=CAU" + ")" }}>

              </div>
              <ul className="media-icons">
                <li className='icons-item'><IoIosEye /><span>100</span></li>
                <li className='icons-item'><IoMdHeart /><span>4590</span></li>
                <li className='icons-item'><BiSolidMessageRounded /><span>234</span></li>
              </ul>

            </div>
            <ul className="filt-title">
              <li className="filt-title-item"><h3>Zamonbobo manzilgohi</h3></li>
              <li className="filt-title-item"><span className='title-item-head'>O'rni: </span>Toshkent vil Bo'stonliq tumani</li>
              <li className="filt-title-item"><span className='title-item-head'>Chog'i: </span>miloddan avvalgi 90-40 mingyillik</li>
              <li className="item-icons">
                <div className='item-iconic audio-icon'><AiFillAudio /><span class="tooltiptext">Audio</span></div><div className='item-iconic book-icon'><IoBook /><span class="tooltiptext">Text</span></div><div className='item-iconic _3d-cion'><AiOutlineCodeSandbox /><span class="tooltiptext">3D</span></div> {/* mediada yo'qolishi kere*/}
                <div className='item-iconic foto-icon'><MdPhotoCamera /><span class="tooltiptext">Foto</span></div><div className='item-iconic map-icon'> <SiOpenstreetmap /><span class="tooltiptext">Map</span></div><div className='item-iconic video-icon'><IoVideocam /><span class="tooltiptext">Video</span></div><div className='item-iconic save-icon'><MdBookmark /><span class="tooltiptext">Save</span></div>
              </li>

            </ul>
          </div>
        </div>

      )}

    </div >

  )
}
