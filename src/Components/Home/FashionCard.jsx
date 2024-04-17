import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoTimeSharp } from "react-icons/io5";

// imaga import
import fashionPattern from "../../assets/img/fashion_pattern.png";

export default function FashionCard() {
  return (
    <>
      <div className="fashion__container">
        <h1 className="fashion__title">
          <span>Eng Mashxur </span> Tarixiy Manbalar
        </h1>
        <div className="fashion__content">
          <div class="card">
            <div class="face front">
              <img
                src="https://htmldemo.net/pharaoh/pharaoh/images/event/1.jpg"
                alt=""
              />
              <h3>Japan</h3>
            </div>
            <div class="face back">
              <h3>Japan</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                harum molestiae iste, nihil doloribus fugiat distinctio ducimus
                maxime totam nulla fuga odio non aperiam eos?
              </p>
              <div className="fashion__location">
                <IoLocationSharp />

                <p>Italiya</p>
              </div>
              <div className="fashion__time">
                <IoTimeSharp />

                <p>Friday To Sunday:10 </p>
              </div>
              <div class="link">
                <a href="#">Ko'proq</a>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="face front">
              <img
                src="https://htmldemo.net/pharaoh/pharaoh/images/event/2.jpg"
                alt=""
              />
              <h3>Spain</h3>
            </div>
            <div class="face back">
              <h3>Spain</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                harum molestiae iste, nihil doloribus fugiat distinctio ducimus
                maxime totam nulla fuga odio non aperiam eos?
              </p>
              <div className="fashion__location">
                <IoLocationSharp />

                <p>Italiya</p>
              </div>
              <div className="fashion__time">
                <IoTimeSharp />

                <p>Friday To Sunday:10 </p>
              </div>
              <div class="link">
                <a href="#">Ko'proq</a>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="face front">
              <img
                src="https://htmldemo.net/pharaoh/pharaoh/images/event/1.jpg"
                alt=""
              />
              <h3>Perú</h3>
            </div>
            <div class="face back">
              <h3>Perú</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                harum molestiae iste, nihil doloribus fugiat distinctio ducimus
                maxime totam nulla fuga odio non aperiam eos?
              </p>
              <div className="fashion__location">
                <IoLocationSharp />

                <p>Ispaniya </p>
              </div>
              <div className="fashion__time">
                <IoTimeSharp />

                <p>Friday To Sunday:10 </p>
              </div>
              <div class="link">
                <a href="#">Ko'proq</a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face front">
              <img
                src="https://htmldemo.net/pharaoh/pharaoh/images/event/1.jpg"
                alt=""
              />
              <h3>Italy</h3>
            </div>
            <div class="face back">
              <h3>Italy</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                harum molestiae iste, nihil doloribus fugiat distinctio ducimus
                maxime totam nulla fuga odio non aperiam eos?
              </p>
              <div className="fashion__location">
                <IoLocationSharp />

                <p>Italiya Muzeyi</p>
              </div>
              <div className="fashion__time">
                <IoTimeSharp />

                <p>Friday To Sunday:10 </p>
              </div>
              <div class="link">
                <a href="#">Ko'proq</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fashion_pattern">
        <img src={fashionPattern} alt="" />
      </div>
    </>
  );
}
