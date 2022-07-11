import React from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { WorkExperienceItem } from "../models/WorkExperienceItem";

interface Props {
  work: WorkExperienceItem;
}

const WorkExperience: React.FC<Props> = ({ work }) => {
  return (
    <div className="app__skills-exp-work-item" key={work.name}>
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
      <ReactTooltip
        id={work.name}
        effect="solid"
        arrowColor="#fff"
        className="app__skill-exp-tooltip"
      >
        {work.desc}
      </ReactTooltip>
    </div>
  );
};

export default WorkExperience;
