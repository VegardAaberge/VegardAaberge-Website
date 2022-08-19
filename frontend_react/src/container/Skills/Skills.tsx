import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { ExperienceItem, SkillItem, WorkExperienceItem } from "./models";
import { strings } from "../../constants/";
import { client } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
import Skill from "./Skill/Skill";
import Experience from "./Experience/Experience";

import mainStyles from "./../../styles/App.module.scss";
import styles from "./Skills.module.scss";

export interface SelectedWorkItem {
  item: WorkExperienceItem | null;
  year?: number;
}

interface Props {
  iWorks: WorkExperienceItem[];
  iExperiences: ExperienceItem[];
  iSkills: SkillItem[];
}

const Skills: React.FC<Props> = ({ iWorks, iExperiences, iSkills }) => {
  const [works, setWorks] = useState<WorkExperienceItem[]>([]);
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const [skills, setSkills] = useState<SkillItem[]>([]);
  const [selectedWorkItem, setSelectedWorkItem] = useState<SelectedWorkItem>({
    item: null,
  });

  useEffect(() => {
    setWorks(iWorks);
    setExperiences(iExperiences);
    setSkills(iSkills);
  }, [iWorks, iExperiences, iSkills]);

  const containSkill = (
    skill: SkillItem,
    selectedWorkItem: SelectedWorkItem
  ) => {
    if (selectedWorkItem.item?.skillsUsed === undefined) return false;

    return selectedWorkItem.item.skillsUsed.find(
      (usedSkill) => usedSkill._ref === skill._id
    );
  };

  const filteredSkills =
    selectedWorkItem.item === null
      ? skills
      : skills.filter((s) => containSkill(s, selectedWorkItem));

  return (
    <>
      <h2 className={mainStyles.head_text}>
        Timeline & <span>Skills</span>
      </h2>
      <div className={styles.skills_container}>
        <motion.div className={styles.skills_exp}>
          {experiences.map((experience) => (
            <Experience
              key={experience.year}
              experience={experience}
              works={works}
              selectedWorkItem={selectedWorkItem}
              setSelectedWorkItem={setSelectedWorkItem}
            />
          ))}
        </motion.div>
        <div className={styles.skills_divider}></div>
        <motion.div className={styles.skills_list}>
          {filteredSkills.map((skill) => (
            <Skill key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
