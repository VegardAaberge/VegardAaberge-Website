import { NextPage } from "next";
import React from "react";

import styles from "./HomeInfo.module.scss";
import globalStyles from "../../../styles/App.module.scss";

const HomeInfo: NextPage = () => {
  return (
    <div className={styles.home_info}>
      <h2 className={styles.home_info_intro}>Hello, My name is</h2>
      <h1 className={styles.home_info_name}>Vegard Aaberge</h1>
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
      <p className={`${styles.home_info_desc} ${globalStyles.p_text}`}>
        I have severall years of experience developing mobile apps and web
        applications for both small and large customers.
      </p>
    </div>
  );
};

export default HomeInfo;
