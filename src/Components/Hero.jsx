import React from "react";
import CountUp from "react-countup";

export default function Hero() {
  return (
    <div className="hero_container">
      <img
        src="http://tarixmanba.sosgroup.uz/_nuxt/ozfaklogo.g0Ruau9o.png"
        alt=""
      />
      <h2>
        Saytning toʻliq imkoniyatlaridan foydalanish uchun{" "}
        <a href="#"> Roʻyxatdan oʻting</a>
        yoki shaxsiy xonaga kiring
      </h2>
      <div class="search_container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." />
          <button>
            <i class="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="count_up">
        <h3>Tarixmanba.uz saytidagi manbalar soni</h3>
        <div className="count">
          <CountUp start={8200} end={8409} duration={4} />
        </div>
      </div>
    </div>
  );
}
