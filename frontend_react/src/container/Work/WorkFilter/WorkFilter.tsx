import React from "react";

import styles from "./WorkFilter.module.scss";
import mainStyles from "./../../../styles/App.module.scss";

interface Props {
  activeFilter: string;
  handleWorkFilter: (item: string) => void;
}

const WorkFilter: React.FC<Props> = ({ activeFilter, handleWorkFilter }) => {
  return (
    <div className={styles.work_filter}>
      {["Website", "Mobile App", "Software", "All"].map((item, index) => (
        <div
          key={index}
          onClick={() => handleWorkFilter(item)}
          className={`${styles.work_filter_item} ${mainStyles.flex_center} ${
            mainStyles.p_text
          } ${activeFilter === item ? styles.item_active : ""}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default WorkFilter;
