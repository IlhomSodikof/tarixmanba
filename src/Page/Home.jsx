import React from "react";
import MatbuotHome from "../Components/Home/MatbuotHome";
import Map from "../Components/Home/Map";
// import HomeLoader from '../Components/components/HomeLoader'
// import MiniSpin from '../Components/components/miniSpin'
import Shtamp from "../Components/Home/Shtamp";
import AxYodgorliklarHome from "../Components/Home/AxYodgorliklarHome";
import GlobeComponent from "../Components/Home/GlobeComponent";

// import MatbuotHome from "../Components/Home/MatbuotHome";
// import Map from "../Components/Home/Map";
import HomeLoader from "../Components/components/HomeLoader";
import MiniSpin from "../Components/components/miniSpin";
// import Shtamp from "../Components/Home/Shtamp";
// import AxYodgorliklarHome from "../Components/Home/AxYodgorliklarHome";
import Hero from "../Components/Hero";
import SliderWebsite from "../Components/SliderWebsite";
import Library from "../Components/Library";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        {/* <GlobeComponent /> */}
        <Map />
        <Shtamp />
        <MatbuotHome />
        <AxYodgorliklarHome />
        <SliderWebsite />
        <Library />
        {/* <MiniSpin />
        <HomeLoader /> */}
      </main>
    </>
  );
}
