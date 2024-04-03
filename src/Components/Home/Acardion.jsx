import React from "react";
import { motion } from "framer-motion";

export default function Acardion() {
  return (
    <div className="acardions">
      <motion.h1
        id="acardion-title"
        initial={{ scale: 1, x: 0 }}
        animate={{ x: 280, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 80,
        }}
      >
        TARIXY OBIDALAR VA NODIR tOPILMALAR
      </motion.h1>
      <div class="flex-container">
        <div className="flex-slide acc_img1">
          <div className="flex-title flex-title-home">Ichanqal'a</div>
        </div>

        <div className="flex-slide acc_img2">
          <div className="flex-title">Siniq saroy</div>
        </div>
        <div className="flex-slide acc_img3">
          <div className="flex-title">Oxak tepa</div>
        </div>
        <div className="flex-slide acc_img4">
          <div className="flex-title">Igna makon</div>
        </div>
        <div className="flex-slide acc_img5">
          <div className="flex-title" style={{ paddingTop: 25 }}>
            Pichoq topti
          </div>
        </div>
        <div className="flex-slide acc_img6">
          <div className="flex-title">Qipchoq</div>
        </div>
      </div>
    </div>
  );
}
