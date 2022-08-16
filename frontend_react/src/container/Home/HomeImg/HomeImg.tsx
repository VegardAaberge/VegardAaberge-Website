import React from "react";
import Image from "next/image";

import { images } from "../../../constants";
import styles from "./HomeImg.module.scss";
import { useMediaQuery } from "@mui/material";

const HomeImg: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width:768px)");

  return (
    <div className={styles.home_img}>
      <div className={styles.home_img_bg} />
      <Image
        layout="fill"
        objectFit="contain"
        src={isDesktop ? images.profile : images.profileMobile}
        alt=""
        className={styles.home_img_img}
      />
    </div>
  );
};

export default HomeImg;
