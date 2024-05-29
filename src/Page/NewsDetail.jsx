import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";

export default function apiData() {
  const route = useParams();

  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    console.log(route);
    const response = await DataService.get(endpoints.newsById(route?.id));
    setApiData(response);
    console.log(response, "news detail");
    // let x = document.querySelector("title");
    // x.textContent = `Jadidlar / ${response.title}`;
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="card__container">
      {/* <h2>{JSON.stringify(apiData)}</h2> */}
      <div className="news__detail__container">
        <div className="detail_img">
          <img
            src={`http://161.35.219.128:8001${apiData?.file}`}
            alt="chiqmadi"
          />
        </div>
        <div className="detail_title">
          <h1>{apiData?.title}</h1>
          <span className="data-detail">{apiData?.created_time}</span>
          <div className="detail_describtion">
            <p>{apiData.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
