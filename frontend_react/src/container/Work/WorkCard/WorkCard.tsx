import React from "react";
import Image from "next/image";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { urlFor } from "../../../client";
import { WorkItem } from "../WorkItem";

import styles from "./WorkCard.module.scss";
import mainStyles from "./../../../styles/App.module.scss";

interface Props {
  work: WorkItem;
}

const WorkCard: React.FC<Props> = ({ work }) => {
  return (
    <div className={`${styles.work_item} ${mainStyles.flex_center}`}>
      <div className={`${styles.work_img} ${mainStyles.flex_center}`}>
        <img src={urlFor(work.imgUrl).url()} alt={work.title} />

        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.5,
          }}
          className={`${styles.work_hover} ${mainStyles.flex_center}`}
        >
          <a href={work.projectLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [0, 0.9] }}
              transition={{ duration: 0.25 }}
              className={mainStyles.flex_center}
            >
              <AiFillEye />
            </motion.div>
          </a>
          <a href={work.codeLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [0, 0.9] }}
              transition={{ duration: 0.25 }}
              className={mainStyles.flex_center}
            >
              <AiFillGithub />
            </motion.div>
          </a>
        </motion.div>
      </div>

      <div className={`${styles.work_content} ${mainStyles.flex_center}`}>
        <h4 className={mainStyles.bold_text}>{work.title}</h4>
        <p className={mainStyles.p_text} style={{ marginTop: 10 }}>
          {work.description}
        </p>
        <div className={`${styles.work_tag} ${mainStyles.flex_center}`}>
          <p className={mainStyles.p_text}>{work.tags[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
