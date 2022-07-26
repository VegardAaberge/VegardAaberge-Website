import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { WorkExperienceItem } from "../models/WorkExperienceItem";

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
      className="skills-exp-work-item"
      key={work.name}
      onClick={() => {
        newWorkItem = workDescription !== work.desc ? work : null;
        setCurrentWorkItem(newWorkItem);
      }}
    >
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="skill-exp-work"
        data-tip
        data-for={work.name}
        key={work.name}
      >
        <h4 className="bold-text">{work.name}</h4>
        <p className="p-text">{work.company}</p>
      </motion.div>
    </div>
  );
};

export default WorkExperience;
