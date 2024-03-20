import React from "react";
import HomeCardMatbuot from "../Components/Home/HomeCardsMatbuot";
import HomeCardMuxr from "../Components/Home/HomeCardsMuxr";
import HomeCardArchi from "../Components/Home/HomeCardsArchi";
import ViewKop from "../Components/Home/ViewKop";
import FashionCard from "../Components/Home/FashionCard";

export default function Home() {
  return (
    <>
      <main className="card__container">
        <FashionCard />
        <HomeCardMuxr />
        <HomeCardMatbuot />
        <HomeCardArchi />
        <ViewKop />
      </main>
    </>
  );
}
