import React from "react";

import { strings } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import HomeBtns from "./HomeBtns/HomeBtns";
import HomeImg from "./HomeImg/HomeImg";
import HomeInfo from "./HomeInfo/HomeInfo";
import styles from "./Home.module.scss";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className={styles.home_wrapper}>
      <div className={styles.home_left}>
        <HomeInfo />
        <HomeBtns />
      </div>
      <HomeImg />
    </div>
  );
};

export default AppWrap(Home, strings.ID_HOME, false, strings.CLASS_PRIMARY_BG);
