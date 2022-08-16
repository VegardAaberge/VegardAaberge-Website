import React from "react";

import { strings } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import HomeBtns from "./HomeBtns/HomeBtns";
import HomeImg from "./HomeImg/HomeImg";
import HomeInfo from "./HomeInfo/HomeInfo";
import styles from "./Home.module.scss";
import { useMediaQuery } from "@mui/material";

const Home: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width:768px)");

  return (
    <div className={styles.home_wrapper}>
      <div className={styles.home_left}>
        <HomeInfo />
        <HomeBtns />
      </div>
      {isDesktop && <HomeImg />}
    </div>
  );
};

export default Home;
