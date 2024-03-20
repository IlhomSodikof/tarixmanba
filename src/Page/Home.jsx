import React from "react";
import HomeCardMatbuot from "../Components/Home/HomeCardsMatbuot";
import HomeCardMuxr from "../Components/Home/HomeCardsMuxr";
import HomeCardArchi from "../Components/Home/HomeCardsArchi";
import ViewKop from "../Components/Home/ViewKop";

export default function Home() {
  return (
    <>
      <main className="card__container">
        <HomeCardMuxr />
        <HomeCardMatbuot />
        <HomeCardArchi />
        <ViewKop />
      </main>
    </>
  );
}
