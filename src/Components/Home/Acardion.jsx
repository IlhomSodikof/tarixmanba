import React from 'react'
import { motion } from "framer-motion";

export default function Acardion() {
  return (

    <div className='acardions'>
      <motion.h1 className='acardion-title'
        initial={{ scale: 1, x: 0 }}
        animate={{ x: 250, scale: 1.1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 80
        }}
      >Tarixiy obidalar va nodir topilmalar</motion.h1>
      <div class="flex-container">

        <div className="flex-slide home">
          <div className="flex-title flex-title-home">Toshqala</div>
        </div>

        <div className="flex-slide about">
          <div className="flex-title">Siniq saroy</div>
        </div>
        <div className="flex-slide work">
          <div className="flex-title">Oxak tepa</div>

        </div>
        <div className="flex-slide about">
          <div className="flex-title">Igna makon</div>
        </div>
        <div className="flex-slide contact">
          <div className="flex-title" style={{ paddingTop: 25 }}>Pichoq topti</div>
        </div>
        <div className="flex-slide about">
          <div className="flex-title">Qipchoq</div>
        </div>

      </div >
    </div>
  )
}
