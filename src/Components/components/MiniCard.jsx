import React, { useRef } from 'react'
import { FaRegEye } from "react-icons/fa";
import { MdStarPurple500 } from "react-icons/md";
import { TfiCommentAlt } from "react-icons/tfi";
import { motion } from "framer-motion"

import { HiMiniArrowLongRight } from "react-icons/hi2";
export default function MiniCard() {
  const constraintsRef = useRef(null)
  return (
    // <div className='mini-card'>
    //   <img className='mini-c-img' src="http://tarixmanba.sosgroup.uz:2118/storage/uploads/sources/3eYwBbTfDinfxgoqeHJl81y5FTs48aQEjQ5ZNjFQ.png" alt="" />
    //   <div className='mini-c-title'>
    //     <h3 className='.mini-c-h3'>Mullo Mirzo Muhammad muhri</h3>
    //     <div className='mini-bottom-cont'>
    //       <div className='mini-cards-icons'>
    //         <span className='mini-card-icons-item'><span className='eye-mini'>< FaRegEye /></span>100</span>
    //         <span className='mini-card-icons-item'><span className='stars-mini'><MdStarPurple500 /></span>100</span>
    //         <span className='mini-card-icons-item'><span className='coments-mini'><TfiCommentAlt /></span>100</span>

    //       </div>
    //       <div className='details-mini'><HiMiniArrowLongRight /></div>
    //     </div>

    //   </div>

    // </div>
    < motion.div className='product-card'

      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }} >

      < motion.div div className="product-tumb" ref={constraintsRef} >
        <motion.img drag
          dragConstraints={constraintsRef} src="http://tarixmanba.sosgroup.uz:2118/storage/uploads/sources/3eYwBbTfDinfxgoqeHJl81y5FTs48aQEjQ5ZNjFQ.png" alt="" />
      </ motion.div>
      <div className="product-details">
        <span className="product-catagory">Muhrlar</span>
        <h4><a href="">Zomin shohi ZAmonhon muhri </a></h4>

        <div className="product-bottom-details">
          {/* <div className="product-price"><small>$96.00</small>$230.99</div> */}
          <div className="product-links">
            <a href=""> < FaRegEye /></a>
            <a href=""><MdStarPurple500 /></a>
            <a href=""><TfiCommentAlt /></a>

          </div><div className="badge"> → </div>
        </div>
      </div>
    </motion.div  >
  )
}
