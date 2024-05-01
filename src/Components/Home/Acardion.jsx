import React from "react";
import { motion } from "framer-motion";
// import image
import acc_img1 from "../../assets/img/ichanqala.jpeg";
import bgPattern from "../../assets/img/bg_pattern.png";

export default function Acardion() {
  return (
    <>
      <div className="acardions">
        {/* <motion.h1
          id="acardion-title"
          initial={{ scale: 1, x: -190 }}
          animate={{ x: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 80,
          }}
        >
          TARIXY OBIDALAR VA NODIR tOPILMALAR
        </motion.h1> */}
        <div class="flex-container">
          <div className="flex-slide acc_img1">
            <div className="flex-title">Arxeologiya</div>
          </div>

          <div className="flex-slide acc_img2">
            <div className="flex-title">Xalq og'zaki ijodi</div>
          </div>
          <div className="flex-slide acc_img3">
            <div className="flex-title">Bitiklar</div>
          </div>
          <div className="flex-slide acc_img4">
            <div className="flex-title">Tarixiy yodgorliklar </div>
          </div>
          <div className="flex-slide acc_img5">
            <div className="flex-title">Yozma asarlar</div>
          </div>
          <div className="flex-slide acc_img6">
            <div className="flex-title">Tangalar</div>
          </div>
        </div>
      </div>
      <div className="acardions">
        {/* <motion.h1
          id="acardion-title"
          initial={{ scale: 1, x: -190 }}
          animate={{ x: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 80,
          }}
        >
          TARIXY OBIDALAR VA NODIR tOPILMALAR
        </motion.h1> */}
        <div class="flex-container">
          <div className="flex-slide acc_img7">
            <div className="flex-title">Tarixiy hujjatlar</div>
          </div>

          <div className="flex-slide acc_img8">
            <div className="flex-title">Muhrlar</div>
          </div>
          <div className="flex-slide acc_img9">
            <div className="flex-title">San'at asarlari</div>
          </div>
          <div className="flex-slide acc_img10">
            <div className="flex-title">Matbuat</div>
          </div>
          <div className="flex-slide acc_img11">
            <div className="flex-title">Arxiv hujjatlari</div>
          </div>
          <div className="flex-slide acc_img12">
            <div className="flex-title">Ko'r, eshit, tingla</div>
          </div>
        </div>
      </div>
      <div className="accardion_pattern">
        <img src={bgPattern} alt="" />
      </div>
    </>
  );
}
