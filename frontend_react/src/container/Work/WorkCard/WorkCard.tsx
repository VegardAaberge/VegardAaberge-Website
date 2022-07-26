import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { urlFor } from "../../../client";
import { WorkItem } from "../WorkItem";
import "./WorkCard.module.scss";

interface Props {
  work: WorkItem;
}

const WorkCard: React.FC<Props> = ({ work }) => {
  return (
    <div className="work-item flex-center">
      <div className="work-img flex-center">
        <img src={urlFor(work.imgUrl).url()} alt={work.title} />

        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.5,
          }}
          className="work-hover flex-center"
        >
          <a href={work.projectLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [0, 0.9] }}
              transition={{ duration: 0.25 }}
              className="flex-center"
            >
              <AiFillEye />
            </motion.div>
          </a>
          <a href={work.codeLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [0, 0.9] }}
              transition={{ duration: 0.25 }}
              className="flex-center"
            >
              <AiFillGithub />
            </motion.div>
          </a>
        </motion.div>
      </div>

      <div className="work-content flex-center">
        <h4 className="bold-text">{work.title}</h4>
        <p className="p-text" style={{ marginTop: 10 }}>
          {work.description}
        </p>
        <div className="work-tag flex-center">
          <p className="p-text">{work.tags[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
