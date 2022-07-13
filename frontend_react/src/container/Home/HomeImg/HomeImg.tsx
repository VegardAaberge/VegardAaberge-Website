import React from "react";
import { motion } from "framer-motion";

import { images } from "../../../constants";
import "./HomeImg.scss";

const HomeImg: React.FC = () => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__home-img"
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

export default HomeImg;
