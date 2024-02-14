import React from "react";
import MiniCard from "../components/MiniCard";

export default function AxYodgorliklarHome() {
  return (
    <>
      <div className="shtamp-container">
        <h2>
          Arxeologik yodgorliklar <span> BARCHASI</span>
        </h2>
        <div className="title-shtamp"></div>
        <div className="title-shtamp-card">
          {[1].map((item) => (
            <MiniCard key={item} />
          ))}
        </div>
      </div>
    </>
  );
}
