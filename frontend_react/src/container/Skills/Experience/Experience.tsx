import React, { useState } from "react";
import { motion } from "framer-motion";

import "./Experience.scss";
import { ExperienceItem } from "../models/ExperienceItem";
import { WorkExperienceItem } from "../models/WorkExperienceItem";
import WorkExperience from "./WorkExperience";

interface Props {
  experience: ExperienceItem;
  works: WorkExperienceItem[];
}

const Experience: React.FC<Props> = ({ experience, works }) => {
  const [workDescription, setWorkDescription] = useState("");

  return (
    <motion.div className="app__skills-exp-item">
      <div className="app__skills-exp-year">
        <p className="bold-text">{experience.year}</p>
      </div>
      <motion.div className="app__skills-exp-works">
        {experience.works.map((workReference) => {
          const work = works.find((work) => work._id === workReference._ref);
          if (work !== undefined) {
            return (
              <WorkExperience
                work={work}
                workDescription={workDescription}
                setWorkDescription={setWorkDescription}
                key={work._id}
              />
            );
          }
        })}
        {workDescription.length > 0 && (
          <div className="app__skill-exp-tooltip">
            <p>{workDescription}</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
