import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Page/Home";
import "leaflet/dist/leaflet.css";
import News from "./Page/News";

import Shablon from "./Page/ShablonManba";
import LibraryCatigory from "./Components/LibraryCatigory";
import Login from "./Components/Login";
import NewsDetail from "./Page/NewsDetail";
import CardDetail from "./Page/CardDetail";
import Media from "./Page/Media";
import LibraryCategoryDetail from "./Page/LibraryCategoryDetail";

export default function App() {
  return (
    <div>
      {/* <CursorAnim /> */}
      <Routes>
        <Route path="/" Component={Layout}>
          <Route path="/" Component={Home} />
          <Route path="/news" Component={News} />
          <Route path="/newsDetail/:id" Component={NewsDetail} />
          <Route path="/library" Component={LibraryCatigory} />
          <Route path="/libraryDetail/:id" Component={LibraryCategoryDetail} />
          <Route path="/cardDetail/:id" Component={CardDetail} />
          <Route path="/media" Component={Media} />
          <Route path="/login" Component={Login} />
          <Route path="/sources/:type/:id" Component={Shablon} />
        </Route>
      </Routes>
    </div>
  );
}
