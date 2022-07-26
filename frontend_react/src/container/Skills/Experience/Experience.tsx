import React, { useState } from "react";
import { motion } from "framer-motion";

import "./Experience.module.scss";
import { ExperienceItem } from "../models/ExperienceItem";
import { WorkExperienceItem } from "../models/WorkExperienceItem";
import { SelectedWorkItem } from "../Skills";
import WorkExperience from "./WorkExperience";

interface Props {
  experience: ExperienceItem;
  works: WorkExperienceItem[];
  selectedWorkItem: SelectedWorkItem;
  setSelectedWorkItem: React.Dispatch<React.SetStateAction<SelectedWorkItem>>;
}

const Experience: React.FC<Props> = ({
  experience,
  works,
  selectedWorkItem,
  setSelectedWorkItem,
}) => {
  const workItemSelected = (item: WorkExperienceItem | null) => {
    setSelectedWorkItem({ item: item, year: experience.year });
  };
  const currentWorkItem =
    selectedWorkItem.year === experience.year ? selectedWorkItem.item : null;

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
                workItem={work}
                workDescription={currentWorkItem?.desc ?? ""}
                setCurrentWorkItem={workItemSelected}
                key={work._id}
              />
            );
          }
        })}
        {currentWorkItem != null && (
          <div className="app__skill-exp-tooltip">
            <p className="p-text">{currentWorkItem.desc}</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
