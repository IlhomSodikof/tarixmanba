import React, { useState } from "react";
import HomeCardMatbuot from "../Components/Home/HomeCardsMatbuot";
import HomeCardMuxr from "../Components/Home/HomeCardsMuxr";
import HomeCardArchi from "../Components/Home/HomeCardsArchi";
import ViewKop from "../Components/Home/ViewKop";
import FashionCard from "../Components/Home/FashionCard";
import Acardion from "../Components/Home/Acardion";
import Map from "../Components/Home/Map";
// import Background, { AuroraBackgroundDemo } from '../Components/component/AuroraBackgroundDemo';

export default function Home() {
  return (
    <>
      <main className="card__container">
        {/* <AuroraBackgroundDemo /> */}
        {/* <ParticlesComponent id='particles' style={{
          zIndex: -10, // Z-index value
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }} /> */}
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
