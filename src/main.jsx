import React from "react";
import ReactDOM from "react-dom/client";
import Clock from "./components/Clock/Clock";
import LogonCompass from "./components/containers/main_content/LogonCompass";
import Countdown from "./components/Countdown/Countdown";
import HomeFooter from "./components/HomeFooter/HomeFooter";
import Weather from "./components/Weather/Weather";
import "./index.css";
import LogonPage from "./pages/Logon/LogonPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <LogonCompass/> */}
    {/* <Clock/>
    <Weather/> */}
    {/* <LogonPage/> */}
    {/* <Countdown /> */}
    <HomeFooter />
  </React.StrictMode>
);
