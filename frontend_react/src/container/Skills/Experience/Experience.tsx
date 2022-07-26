import React, { useState } from "react";
import { motion } from "framer-motion";

import { ExperienceItem } from "../models/ExperienceItem";
import { WorkExperienceItem } from "../models/WorkExperienceItem";
import { SelectedWorkItem } from "../Skills";
import WorkExperience from "./WorkExperience";

import styles from "./Experience.module.scss";
import mainStyles from "../../../styles/App.module.scss";

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
    <motion.div className={styles.skills_exp_item}>
      <div className={styles.skills_exp_year}>
        <p className={mainStyles.bold_text}>{experience.year}</p>
      </div>
      <motion.div className={styles.skills_exp_works}>
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
          <div className={styles.skill_exp_tooltip}>
            <p className={mainStyles.p_text}>{currentWorkItem.desc}</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
