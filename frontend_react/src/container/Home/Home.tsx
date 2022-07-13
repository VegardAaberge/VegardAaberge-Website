import React from "react";

import { strings } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import HomeInfo from "./HomeInfo/HomeInfo";
import HomeImg from "./HomeImg/HomeImg";
import HomeCircles from "./HomeCircles/HomeCircles";
import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="app__home app__flex-center">
      <HomeInfo />
      <HomeImg />
      <HomeCircles />
    </div>
  );
};

export default AppWrap(Home, strings.ID_HOME, false);
