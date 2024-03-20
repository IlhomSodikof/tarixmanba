import React from "react";
import HomeCardMatbuot from "../Components/Home/HomeCardsMatbuot";
import HomeCardMuxr from "../Components/Home/HomeCardsMuxr";
import HomeCardArchi from "../Components/Home/HomeCardsArchi";
import ViewKop from "../Components/Home/ViewKop";
import FashionCard from "../Components/Home/FashionCard";
import Acardion from "../Components/Home/Acardion";
import Map from "../Components/Home/Map";

export default function Home() {
  return (
    <>
      <main className="card__container">
        <Acardion />
        <Map />
        <FashionCard />

        <HomeCardMuxr />
        <HomeCardMatbuot />
        <HomeCardArchi />
        <ViewKop />
      </main>
    </>
  );
}
