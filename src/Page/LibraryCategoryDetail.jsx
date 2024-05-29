import React from "react";
import { useParams } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import { useState } from "react";
import { useEffect } from "react";

export default function LibraryCategoryDetail() {
  const route = useParams();

  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    console.log(route);
    const response = await DataService.get(
      endpoints.libraryCategoryById(route?.id)
    );
    setApiData(response);
    console.log(response, "lib category detail");
    // let x = document.querySelector("title");
    // x.textContent = `Jadidlar / ${response.title}`;
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card__container">
      <div className="category_detail_container">
        <div className="section-title">
          <h1>{apiData?.title}</h1>
        </div>
      </div>
    </div>
  );
}
