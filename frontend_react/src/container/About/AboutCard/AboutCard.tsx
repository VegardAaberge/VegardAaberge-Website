import React from "react";
import { motion } from "framer-motion";

import { urlFor } from "../../../client";
import { AboutItem } from "../AboutItem";

interface Props {
  about: AboutItem;
}

const AboutCard: React.FC<Props> = ({ about }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, type: "tween" }}
      className="app__profiles-item"
    >
      <img src={urlFor(about.imgUrl).url()} alt={about.title} />
      <h2 className="bold-text" style={{ marginTop: 20 }}>
        {about.title}
      </h2>
      <p className="p-text" style={{ marginTop: 10 }}>
        {about.description}
      </p>
    </motion.div>
  );
};

export default AboutCard;
