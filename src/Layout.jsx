import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="container-layout">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
