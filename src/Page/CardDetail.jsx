import React from "react";
// import image
import DetailImg from "../assets/img/arxeologiya4.jpg";

export default function NewsDetail() {
  return (
    <div className="card__container">
      <div className="card__detail__container">
        <div className="Card_detail_img">
          <img src={DetailImg} />
        </div>
        <div className="card_detail_title">
          <h1>Card Detail Title</h1>
          <span className="data_card_create">Card Create time</span>
          <div className="card_detail_describtion">
            <p>
              News description Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Fugit quis eaque ducimus culpa, qui fugiat
              molestias iusto. Voluptatem, magni vitae! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sunt dignissimos, quibusdam
              accusamus recusandae, inventore quidem saepe amet iste optio ullam
              totam dolorem ipsam adipisci eius quaerat suscipit accusantium cum
              quod dolorum molestiae qui maiores natus ex nihil. Voluptatibus
              ipsum rerum minima culpa animi, est sint, quos consequatur vitae,
              officia reiciendis suscipit placeat! Nisi libero, illo sunt
              excepturi, omnis assumenda deleniti accusamus repudiandae labore
              rem cumque quibusdam fuga id ab. Possimus neque modi officiis
              aspernatur accusantium culpa fugiat. Deserunt impedit reiciendis
              ullam cupiditate eum temporibus fugiat libero magni iste vero
              fuga, sed quisquam quibusdam. Quo molestiae magnam nam fugit
              minima accusantium.
            </p>
            {/*  */}
          </div>
        </div>

        {/* <div
          className="share-jadids"
          onClick={() =>
            (window.location.href = `https://telegram.me/share/url?url=http://jadidlar.uz/jadidlar/${router?.id}/`)
          }
        >
          <div>
            <a target="_blank" className="span-jadids">
              {" "}
              {t("share_")}
            </a>
            <div className="sp-ic-jd">
              {" "}
              <FaTelegramPlane />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
