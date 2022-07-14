import React from "react";
import { motion } from "framer-motion";

import { images } from "../../../constants";
import "./HomeCircles.scss";

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

const HomeCircles: React.FC = () => {
  return (
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__home-circles"
    >
      {[images.xamarin, images.kotlin, images.typescript].map(
        (circle: string, index) => (
          <div className="circle-cmp app__flex-center" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        )
      )}
    </motion.div>
  );
};

export default HomeCircles;
