import React, { useEffect, useRef, useState } from "react";
import HomeCardMatbuot from "../Components/Home/HomeCardsMatbuot";
import HomeCardMuxr from "../Components/Home/HomeCardsMuxr";
import HomeCardArchi from "../Components/Home/HomeCardsArchi";
import HomeCardsCoin from "../Components/Home/HomeCardsCoin";
import HomeCardsFolkArt from "../Components/Home/HomeCardsFolkArt";
import HomeCardsManuscript from "../Components/Home/HomeCardsManuscript";
import HomeCardsLetter from "../Components/Home/HomeCardsLetter";
import HomeCardsArt from "../Components/Home/HomeCardsArt";
import HomeCardsArxiv from "../Components/Home/HomeCardsArxiv";
import HomeCardsDocuments from "../Components/Home/HomeCardsDocuments";
import HomeCardsManuments from "../Components/Home/HomeCardsManuments";
import HomeCardsMedia from "../Components/Home/HomeCardsMedia";
import ViewKop from "../Components/Home/ViewKop";
import FashionCard from "../Components/Home/FashionCard";
import Acardion from "../Components/Home/Acardion";
import Map from "../Components/Home/Map";
import Videos from "../assets/videoHome.mp4";
import Pattern from "../Components/component/Pattern";

export default function Home() {
  const videoRef = useRef();
  // const [autos, setAutos] = useState(true);

  // useEffect(() => {
  //   videoRef.current.play();
  // }, []);
  // useEffect(() => {
  //   // Component monte edildiğinde videoyu başlat
  //   videoRef.current.play();
  // }, [autos]);
  return (
    <>
      <main className="card__container">
        {/* <video
          autoPlay
          muted
          loop
          id="myVideo"
          className="video-make"
          ref={videoRef}
          style={{ width: "100%" }}
          src={Videos}
        /> */}

        {/* <video
          className="video-make"
          data-testid="video-asset"
          style={{ width: "100%" }}
          alt="Numismatics. Old collectible coins on the table. Ancient Stock Footage Video"
          playbackRate={0.5}
          controlslist="nodownload"
          ref={videoRef}
          autoPlay="true"
          loop={true}
          aria-valuemax
        >
          <source
            type="video/mp4"
            src="https://uploads.actionvfx.com/video/d14c7c0d-52ac-48c7-8530-4d4de285e7c7/mp4/Fire+Embers.mp4"
          />
        </video> */}
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
        {/* <Acardion /> */}
        <Map />
        <FashionCard />
        <HomeCardArchi />
        <HomeCardsFolkArt />
        <HomeCardsLetter />
        <HomeCardsManuments />
        <HomeCardsManuscript />
        <HomeCardsCoin />
        <HomeCardsDocuments />
        <HomeCardMuxr />
        <HomeCardsArt />
        <HomeCardMatbuot />
        <HomeCardsArxiv />
        <HomeCardsMedia />
        <ViewKop />
      </main>
    </>
  );
}
