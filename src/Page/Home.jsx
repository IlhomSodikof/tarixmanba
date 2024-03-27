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
        {/* <video data-testid="video-asset" style={{ width: "675px", maxWidth: "100%" }} src="https://media.istockphoto.com/id/950253426/video/close-up-of-very-old-coins.mp4?s=mp4-640x640-is&amp;k=20&amp;c=kHvhxNg1Hli6PCpJyRthVCGtzrXHDNKhE0T2jO49xy8=" alt="Close up of very old coins Coins From Various Countries 4K Resolution Stock Footage Video" controls controlslist="nodownload" autoplay={true} loop></video> */}
        <Acardion />
        <Map />
        <FashionCard />

        <HomeCardMuxr />
        <HomeCardMatbuot />
        <HomeCardArchi />
        <ViewKop />
      </main >
    </>
  );
}
