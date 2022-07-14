import React from "react";
import { motion } from "framer-motion";

import "./HomeInfo.scss";

const HomeInfo: React.FC = () => {
  return (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__home-info"
    >
      <div className="app__home-badge">
        <div className="badge-cmp app__flex-center">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Vegard</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex-center">
          <p className="p-text">App Developer</p>
          <p className="p-text">Freelancer</p>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeInfo;
