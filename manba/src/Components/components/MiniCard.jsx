import React from 'react'
import { FaRegEye } from "react-icons/fa";
import { MdStarPurple500 } from "react-icons/md";
import { TfiCommentAlt } from "react-icons/tfi";

import { HiMiniArrowLongRight } from "react-icons/hi2";
export default function MiniCard() {
  return (
    <div className='mini-card'>
      <img className='mini-c-img' src="http://tarixmanba.sosgroup.uz:2118/storage/uploads/sources/3eYwBbTfDinfxgoqeHJl81y5FTs48aQEjQ5ZNjFQ.png" alt="" />
      <div className='mini-c-title'>
        <h3 className='.mini-c-h3'>Mullo Mirzo Muhammad muhri</h3>
        <div className='mini-bottom-cont'>
          <div className='mini-cards-icons'>
            <span className='mini-card-icons-item'><span className='eye-mini'>< FaRegEye /></span>100</span>
            <span className='mini-card-icons-item'><span className='stars-mini'><MdStarPurple500 /></span>100</span>
            <span className='mini-card-icons-item'><span className='coments-mini'><TfiCommentAlt /></span>100</span>

          </div>
          <div className='details-mini'><HiMiniArrowLongRight /></div>
        </div>

      </div>

    </div>
  )
}
