import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { WorkExperienceItem } from "../models/WorkExperienceItem";

import styles from "./Experience.module.scss";
import mainStyles from "../../../styles/App.module.scss";

interface Props {
  workItem: WorkExperienceItem;
  workDescription: string;
  setCurrentWorkItem: (workItem: WorkExperienceItem | null) => void;
}

const WorkExperience: React.FC<Props> = ({
  workItem: work,
  workDescription,
  setCurrentWorkItem,
}) => {
  let newWorkItem: WorkExperienceItem | null = null;

  return (
    <div
      className={styles.skills_exp_work_item}
      key={work.name}
      onClick={() => {
        newWorkItem = workDescription !== work.desc ? work : null;
        setCurrentWorkItem(newWorkItem);
      }}
    >
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={styles.skill_exp_work}
        key={work.name}
      >
        <h4 className={mainStyles.bold_text}>{work.name}</h4>
        <p className={mainStyles.p_text}>{work.company}</p>
      </motion.div>
    </div>
  );
};

export default WorkExperience;
