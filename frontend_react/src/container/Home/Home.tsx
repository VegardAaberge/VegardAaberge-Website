import React from "react";

import "./Home.scss";
import HomeImg from "./HomeImg/HomeImg";
import HomeInfo from "./HomeInfo/HomeInfo";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="app__home-wrapper">
      <HomeInfo />
      <HomeImg />
    </div>
  );
};

export default Home;
