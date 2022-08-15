import React from "react";
import Image from "next/image";

import { images } from "../../../constants";
import styles from "./HomeImg.module.scss";

const HomeImg: React.FC = () => {
  return (
    <div className={styles.home_img}>
      <div className={styles.home_img_bg} />
      <Image
        layout="fill"
        objectFit="contain"
        src={images.profile}
        alt=""
        className={styles.home_img_img}
      />
    </div>
  );
};

export default HomeImg;
