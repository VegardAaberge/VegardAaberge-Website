import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Header.scss";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import HeaderImg from "./HeaderImg/HeaderImg";
import HeaderCircles from "./HeaderCircles/HeaderCircles";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <div id="home" className="app__header app__flex-center">
      <HeaderInfo />
      <HeaderImg />
      <HeaderCircles />
    </div>
  );
};

export default Header;
