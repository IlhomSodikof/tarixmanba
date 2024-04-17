import React from "react";
import Filter from "../Components/component/Filter";
import BigCacdFilter from "../Components/component/BigCacdFilter";
import { useParams } from "react-router-dom";
import MapSearch from "../Components/component/MapSearch";

export default function ShablonManba() {
  const params = useParams();
  console.log(params);
  return (
    <div className="shablon-container">
      <div className="filt-cont-shablonmanba">
        <Filter />
      </div>
      <BigCacdFilter />
    </div>
  );
}
