import React from "react";
import { Link } from "react-router-dom";
import Pattern from "../Components/component/Pattern";

export default function News() {
  return (
    <div className="card__container">
      <div class="news__container">
        <div class="section-title">
          <h1>Tarixga oid eng so'ngi yangiliklar</h1>
        </div>

        <div class="row">
          <div class="column">
            <div class="effect">
              <div class="effect-img">
                <img
                  src="https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
                  alt=""
                />
              </div>
              <div class="effect-text">
                <div class="inner">
                  <h2>This is heading</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat velit qui quos repellat nulla soluta exceptu
                  </p>
                  <div class="effect-btn">
                    <Link to="/newsDetail">
                      <a href="#" class="btn">
                        <i class="fa fa-eye"></i> Read More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="effect">
              <div class="effect-img">
                <img
                  src="https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
                  alt=""
                />
              </div>
              <div class="effect-text">
                <div class="inner">
                  <h2>This is heading</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat velit qui quos repellat nulla cum soluta exceptu
                  </p>
                  <div class="effect-btn">
                    <Link to="/newsDetail">
                      <a href="#" class="btn">
                        <i class="fa fa-eye"></i> Read More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="effect">
              <div class="effect-img">
                <img
                  src="https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
                  alt=""
                />
              </div>
              <div class="effect-text">
                <div class="inner">
                  <h2>This is heading</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat velit qui quos repellat nulla cum soluta exceptu
                  </p>
                  <div class="effect-btn">
                    <Link to="/newsDetail">
                      <a href="#" class="btn">
                        <i class="fa fa-eye"></i> Read More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="effect">
              <div class="effect-img">
                <img
                  src="https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
                  alt=""
                />
              </div>
              <div class="effect-text">
                <div class="inner">
                  <h2>This is heading</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat velit qui quos repellat nulla cum soluta exceptu
                  </p>
                  <div class="effect-btn">
                    <Link to="/newsDetail">
                      <a href="#" class="btn">
                        <i class="fa fa-eye"></i> Read More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="effect">
              <div class="effect-img">
                <img
                  src="https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
                  alt=""
                />
              </div>
              <div class="effect-text">
                <div class="inner">
                  <h2>This is heading</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat velit qui quos repellat nulla cum soluta exceptu
                  </p>
                  <div class="effect-btn">
                    <Link to="/newsDetail">
                      <a href="#" class="btn">
                        <i class="fa fa-eye"></i> Read More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="effect">
              <div class="effect-img">
                <img
                  src="https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
                  alt=""
                />
              </div>
              <div class="effect-text">
                <div class="inner">
                  <h2>This is heading</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat velit qui quos repellat nulla cum soluta exceptu
                  </p>
                  <div class="effect-btn">
                    <Link to="/newsDetail">
                      <a href="#" class="btn">
                        <i class="fa fa-eye"></i> Read More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="pattern">
          <img
            src="https://png.pngtree.com/png-clipart/20220909/original/pngtree-luxury-mandala-circle-frame-transparent-with-vintage-gold-circular-pattern-png-image_8503769.png"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
}
