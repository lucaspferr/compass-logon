import React from "react";
import HomeBody from "../../components/HomeBody/HomeBody";
import HomeFooter from "../../components/HomeFooter/HomeFooter";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import HomeImageBackground from "../../components/ImagesAndIcons/HomeImageBackground";

const HomePage = () => {
  return (
    <React.Fragment>
      <HomeHeader />
      <HomeBody />
      <HomeFooter />
    </React.Fragment>
  );
};

export default HomePage;
