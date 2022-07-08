import React from "react";
import { motion } from "framer-motion";

import { images } from "../../../constants";
import "./HeaderImg.scss";

const HeaderImg: React.FC = () => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_bg"
        className="overlay_circle"
      />
    </motion.div>
  );
};

export default HeaderImg;
