import React, { useEffect, useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { motion, useMotionValueEvent } from "framer-motion";
import { useScroll } from "framer-motion";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";

export default function () {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", latest);
  });

  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.libraryCategory);
    console.log(response.results, "libCategory");
    setApiData(response);
    // let x = document.querySelector("title");
    // x.textContent = `Jadidlar / ${response.title}`;
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="libraryCont">
        <div className="backGroundLib">
          <motion.h1
            className="loders-h1"
            initial={{ scale: 1, x: 0 }}
            animate={{ x: 250, scale: 1.1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 80,
            }}
          >
            TARIXIY QO'LYOZMALAR VA <br /> NODIR ASARLAR
          </motion.h1>
        </div>
        <div className="libCardCont">
          {apiData?.results?.map((libCategory) => (
            <Link
              className="linkLib"
              to={`/libraryDetail/${libCategory.id}`}
              key={libCategory.id}
            >
              <div className="libraryCard">
                <div className="iconLib">
                  <img
                    src="https://baburid.uz/front/img/library/icon_1.png"
                    alt="icon"
                  />
                </div>
                <h3>{libCategory.title}</h3>
                {/* <p>Shosh va Movoronnahr hudularidagi qo'l yozma asarlar</p> */}
              </div>
            </Link>
          ))}

          {/* <Link className="linkLib">
            <div className="libraryCard">
              <div className="iconLib">
                <img
                  src="https://baburid.uz/front/img/library/icon_2.png"
                  alt="icon"
                />
              </div>
              <h3>Qo'lyozma ijody meros</h3>
              <p>Shosh va Movoronnahr hudularidagi qo'l yozma asarlar</p>
            </div>
          </Link>

          <Link className="linkLib">
            <div className="libraryCard">
              <div className="iconLib">
                <img
                  src="https://baburid.uz/front/img/library/icon_3.png"
                  alt="icon"
                />
              </div>
              <h3>Tangalarga oid asarlar</h3>
              <p>Shosh va Movoronnahr hudularidagi qo'l yozma asarlar</p>
            </div>
          </Link>

          <Link className="linkLib">
            <div className="libraryCard">
              <div className="iconLib">
                <img
                  src="https://baburid.uz/front/img/library/icon_4.png"
                  alt="icon"
                />
              </div>
              <h3>Btiklar va Nodir asarlar</h3>
              <p>Shosh va Movoronnahr hudularidagi qo'l yozma asarlar</p>
            </div>
          </Link>

          <Link className="linkLib">
            <div className="libraryCard">
              <div className="iconLib">
                <img
                  src="https://baburid.uz/front/img/library/icon_5.png"
                  alt="icon"
                />
              </div>
              <h3>Muhirlarga oid asarlar</h3>
              <p>Shosh va Movoronnahr hudularidagi qo'l yozma asarlar</p>
            </div>
          </Link>

          <Link className="linkLib">
            <div className="libraryCard">
              <div className="iconLib">
                <img
                  src="https://baburid.uz/front/img/library/icon_6.png"
                  alt="icon"
                />
              </div>
              <h3>Suratlarga muhirlangan tarix</h3>
              <p>Shosh va Movoronnahr hudularidagi qo'l yozma asarlar</p>
            </div>
          </Link>

          <Link className="linkLib">
            <div className="libraryCard">
              <div className="iconLib">
                <img
                  src="https://baburid.uz/front/img/library/icon_7.png"
                  alt="icon"
                />
              </div>
              <h3>Video materiallar</h3>
              <p>Shosh va Movoronnahr hudularidagi qo'l yozma asarlar</p>
            </div>
          </Link>

          <Link className="linkLib">
            <div className="libraryCard">
              <div className="iconLib">
                <img
                  src="https://baburid.uz/front/img/library/icon_8.png"
                  alt="icon"
                />
              </div>
              <h3>Arxeologik asarlar</h3>
              <p>Shosh va Movoronnahr hudularidagi qo'l yozma asarlar</p>
            </div>
          </Link> */}
        </div>

        <div className="moreLib">
          <IoBookOutline /> Barchasi
        </div>
      </div>
      <div className="library_pattern1">
        <img
          src="https://png.pngtree.com/png-clipart/20220909/original/pngtree-luxury-mandala-circle-frame-transparent-with-vintage-gold-circular-pattern-png-image_8503769.png"
          alt=""
        />
      </div>
    </>
  );
}
