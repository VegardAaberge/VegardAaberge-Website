import React from "react";

import { strings } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import HomeBtns from "./HomeBtns/HomeBtns";
import HomeImg from "./HomeImg/HomeImg";
import HomeInfo from "./HomeInfo/HomeInfo";
import "./Home.scss";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className="app__home-wrapper">
      <div className="app__home-left">
        <HomeInfo />
        <HomeBtns />
      </div>
      <HomeImg />
    </div>
  );
};

export default AppWrap(Home, strings.ID_HOME, true, strings.CLASS_PRIMARY_BG);
