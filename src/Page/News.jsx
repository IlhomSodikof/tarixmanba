import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Pattern from "../Components/component/Pattern";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";

export default function News() {
  const navigate = useNavigate();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.news);
    console.log(response.results, "newslar");
    setApiData(response);
    // let x = document.querySelector("title");
    // x.textContent = `Jadidlar / ${response.title}`;
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="card__container">
        <div className="news__container">
          <div className="section-title">
            <h1>Tarixga oid eng so'ngi yangiliklar</h1>
          </div>

          <div className="row">
            {apiData?.results?.map((news) => {
              return (
                <div className="column" key={news.id}>
                  <div className="effect">
                    <div className="effect-img">
                      <img
                        src={`http://161.35.219.128:8001${news.file}`}
                        alt=""
                      />
                    </div>
                    <div className="effect-text">
                      <div className="inner">
                        <h2>{news.title}</h2>
                        <p>{news.content}</p>
                        <div className="effect-btn">
                          {/* <Link to="/newsDetail"> */}
                          <button
                            href="#"
                            className="btn"
                            onClick={() => navigate(`/newsDetail/${news.id}`)}
                          >
                            <i className="fa fa-eye"></i> Read More
                          </button>
                          {/* </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="news_pattern1">
        <img
          src="https://png.pngtree.com/png-clipart/20220909/original/pngtree-luxury-mandala-circle-frame-transparent-with-vintage-gold-circular-pattern-png-image_8503769.png"
          alt=""
        />
      </div> */}
    </>
  );
}
