import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { urlFor } from "../../../client";
import { WorkItem } from "../WorkItem";
import "./WorkCard.scss";

interface Props {
  work: WorkItem;
}

const WorkCard: React.FC<Props> = ({ work }) => {
  return (
    <div className="app__work-item app__flex-center">
      <div className="app__work-img app__flex-center">
        <img src={urlFor(work.imgUrl).url()} alt={work.title} />

        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.5,
          }}
          className="app__work-hover app__flex-center"
        >
          <a href={work.projectLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [0, 0.9] }}
              transition={{ duration: 0.25 }}
              className="app__flex-center"
            >
              <AiFillEye />
            </motion.div>
          </a>
          <a href={work.codeLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [0, 0.9] }}
              transition={{ duration: 0.25 }}
              className="app__flex-center"
            >
              <AiFillGithub />
            </motion.div>
          </a>
        </motion.div>
      </div>

      <div className="app__work-content app__flex-center">
        <h4 className="bold-text">{work.title}</h4>
        <p className="p-text" style={{ marginTop: 10 }}>
          {work.description}
        </p>
        <div className="app__work-tag app__flex-center">
          <p className="p-text">{work.tags[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
