import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { WorkExperienceItem } from "../models/WorkExperienceItem";

interface Props {
  work: WorkExperienceItem;
  workDescription: string;
  setWorkDescription: React.Dispatch<React.SetStateAction<string>>;
}

const WorkExperience: React.FC<Props> = ({
  work,
  workDescription,
  setWorkDescription,
}) => {
  let newDesc = "";

  return (
    <div
      className="app__skills-exp-work-item"
      key={work.name}
      onMouseEnter={() => {
        newDesc = work.desc;
        setTimeout(() => {
          setWorkDescription(newDesc);
        }, 300);
      }}
      onMouseLeave={() => {
        newDesc = "";
        setWorkDescription(newDesc);
      }}
      onClick={() => {
        newDesc = workDescription !== work.desc ? work.desc : "";
        setWorkDescription(newDesc);
      }}
    >
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__skill-exp-work"
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
