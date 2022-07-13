import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clock from "./components/Clock/Clock";
import LogonCompass from "./components/containers/main_content/LogonCompass";
import Countdown from "./components/Countdown/Countdown";
import HomeFooter from "./components/HomeFooter/HomeFooter";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import HomeImageBackground from "./components/ImagesAndIcons/HomeImageBackground";
import Weather from "./components/Weather/Weather";
import "./index.css";
import HomePage from "./pages/Home/HomePage";
import LogonPage from "./pages/Logon/LogonPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogonPage />} />
        <Route path="home" element={<HomePage />} />
        <Route />
      </Routes>
    </BrowserRouter>
    {/* <LogonCompass/> */}
    {/* <Clock/>
    <Weather/> */}
    {/* <LogonPage/> */}
    {/* <Countdown /> */}
    {/* <HomeFooter /> */}
    {/* <HomeHeader /> */}
    {/* <HomePage /> */}
    {/* <HomeImageBackground /> */}
  </React.StrictMode>
);
