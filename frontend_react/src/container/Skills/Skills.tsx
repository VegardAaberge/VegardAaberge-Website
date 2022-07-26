import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { ExperienceItem, SkillItem, WorkExperienceItem } from "./models";
import { strings } from "../../constants/";
import { client } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
import Skill from "./Skill/Skill";
import Experience from "./Experience/Experience";

import styles from "./Skills.module.scss";

export interface SelectedWorkItem {
  item: WorkExperienceItem | null;
  year?: string;
}

const Skills: React.FC = () => {
  const [works, setWorks] = useState<WorkExperienceItem[]>([]);
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const [skills, setSkills] = useState<SkillItem[]>([]);
  const [selectedWorkItem, setSelectedWorkItem] = useState<SelectedWorkItem>({
    item: null,
  });

  useEffect(() => {
    client.fetch(strings.QUERY_WORK_EXPERIENCE).then((data) => {
      console.log(data);
      setWorks(data);
    });
    client.fetch(strings.QUERY_EXPERIENCES).then((data) => {
      data.sort((a: ExperienceItem, b: ExperienceItem) => {
        return parseInt(b.year, 0) - parseInt(a.year, 0);
      });
      setExperiences(data);
    });
    client.fetch(strings.QUERY_SKILLS).then((data) => {
      setSkills(data);
    });
  }, []);

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
  );
};

export default AppWrap(Skills, strings.ID_SKILLS, true, strings.CLASS_WHITE_BG);
