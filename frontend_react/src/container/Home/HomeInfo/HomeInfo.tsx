import { NextPage } from "next";
import React from "react";

import styles from "./HomeInfo.module.scss";
import mainStyles from "../../../styles/App.module.scss";
import { useMediaQuery } from "@mui/material";
import HomeImg from "../HomeImg/HomeImg";

const HomeInfo: NextPage = () => {
  const isMobile = useMediaQuery("(max-width:767px)");

  return (
    <div className={styles.home_info}>
      <h2 className={styles.home_info_intro}>Hi, I am</h2>
      <h1 className={styles.home_info_name}>
        Vegard <br /> Aaberge
      </h1>
      <div className={styles.home_info_title}>
        <div className={styles.home_info_title_wrapper}>
          {["Xamarin", "Native Android", "UI/UX", "React", "Spring Boot"].map(
            (item) => (
              <div key="1" className={styles.home_info_title_item}>
                {item}
              </div>
            )
          )}
        </div>
      </div>
      <p className={`${styles.home_info_desc} ${mainStyles.p_text}`}>
        I have severall years of experience developing mobile apps and web
        applications for both small and large customers.
      </p>
      {isMobile && <HomeImg />}
    </div>
  );
};

export default HomeInfo;
