import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



export default function () {
  return (
    <>
      <div className="libraryCont">

        <div className="backGroundLib">
          <motion.h1
            initial={{ scale: 1, x: 0 }}
            animate={{ x: 250, scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 80
            }}
          >
            TARIXY QO'LYOZMALR VA <br /> NODIR ASARLAR</motion.h1>
        </div>
        <div className="libCardCont">
          <Link className="linkLib">
            <div className="libraryCard">
              <div className="iconLib">
                <img src="https://baburid.uz/front/img/library/icon_1.png" alt="icon" />
              </div>
              <h3>Ilmiy asarlar</h3>
              <p>Shosh va Movoronnahr hudularidagi qo'l yozma asarlar</p>
            </div>
          </Link>

          <Link className="linkLib">
            <div className="libraryCard">
              <div className="iconLib">
                <img src="https://baburid.uz/front/img/library/icon_2.png" alt="icon" />
              </div>
              <h3>Qo'lyozma ijody meros</h3>
              <p>Shosh va Movoronnahr hudularidagi qo'l yozma asarlar</p>
            </div>
          </Link>

          <Link className="linkLib">
            <div className="libraryCard">
              <div className="iconLib">
                <img src="https://baburid.uz/front/img/library/icon_3.png" alt="icon" />
              </div>
              <h3>Tangalarga oid asarlar</h3>
              <p>Shosh va Movoronnahr hudularidagi qo'l yozma asarlar</p>
            </div>
          </Link>

          <Link className="linkLib">
            <div className="libraryCard">
              <div className="iconLib">
                <img src="https://baburid.uz/front/img/library/icon_4.png" alt="icon" />
              </div>
              <h3>Btiklar va Nodir asarlar</h3>
              <p>Shosh va Movoronnahr hudularidagi qo'l yozma asarlar</p>
            </div>
          </Link>

          <Link className="linkLib">
            <div className="libraryCard">
              <div className="iconLib">
                <img src="https://baburid.uz/front/img/library/icon_5.png" alt="icon" />
              </div>
              <h3>Muhirlarga oid asarlar</h3>
              <p>Shosh va Movoronnahr hudularidagi qo'l yozma asarlar</p>
            </div>
          </Link>

          <Link className="linkLib">
            <div className="libraryCard">
              <div className="iconLib">
                <img src="https://baburid.uz/front/img/library/icon_6.png" alt="icon" />
              </div>
              <h3>Suratlarga muhirlangan tarix</h3>
              <p>Shosh va Movoronnahr hudularidagi qo'l yozma asarlar</p>
            </div>
          </Link>

          <Link className="linkLib">
            <div className="libraryCard">
              <div className="iconLib">
                <img src="https://baburid.uz/front/img/library/icon_7.png" alt="icon" />
              </div>
              <h3>Video materiallar</h3>
              <p>Shosh va Movoronnahr hudularidagi qo'l yozma asarlar</p>
            </div>
          </Link>

          <Link className="linkLib">
            <div className="libraryCard">
              <div className="iconLib">
                <img src="https://baburid.uz/front/img/library/icon_8.png" alt="icon" />
              </div>
              <h3>Arxeologik asarlar</h3>
              <p>Shosh va Movoronnahr hudularidagi qo'l yozma asarlar</p>
            </div>
          </Link>
        </div>

        <div className="moreLib">
          <IoBookOutline /> Barchasi
        </div>

      </div>
    </>
  )
}
