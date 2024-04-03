import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Page/Home";
import "leaflet/dist/leaflet.css";
import News from "./Page/News";
import CursorAnim from "./Components/CursorAnim";

import Shablon from "./Page/ShablonManba";
import LibraryCatigory from "./Components/LibraryCatigory";
import Login from "./Components/Login";
import NewsDetail from "./Page/NewsDetail";

export default function App() {
  return (
    <div>
      <CursorAnim />
      <Routes>
        <Route path="/" Component={Layout}>
          <Route path="/" Component={Home} />
          <Route path="/news" Component={News} />
          <Route path="/newsDetail" Component={NewsDetail} />
          <Route path="/library" Component={LibraryCatigory} />
          <Route path="/login" Component={Login} />

          <Route path="/archive" Component={Shablon} />
        </Route>
      </Routes>
    </div>
  );
}
