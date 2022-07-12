import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { WorkExperienceItem } from "../models/WorkExperienceItem";

interface Props {
  work: WorkExperienceItem;
}

const WorkExperience: React.FC<Props> = ({ work }) => {
  const [tooltip, setTooltip] = useState(false);

  return (
    <div
      className="app__skills-exp-work-item"
      key={work.name}
      onMouseEnter={() => {
        setTooltip(true);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setTooltip(false);
        }, 50);
      }}
    >
      {tooltip && (
        <div id={work.name} className="app__skill-exp-tooltip">
          <p>{work.desc}</p>
        </div>
      )}
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
