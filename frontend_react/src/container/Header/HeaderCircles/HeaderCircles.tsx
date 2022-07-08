import React from "react";
import { motion } from "framer-motion";

import { images } from "../../../constants";
import "./HeaderCircles.scss";

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

const HeaderCircles: React.FC = () => {
  return (
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.flutter, images.redux, images.sass].map(
        (circle: string, index) => (
          <div className="circle-cmp app__flex-center" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        )
      )}
    </motion.div>
  );
};

export default HeaderCircles;
