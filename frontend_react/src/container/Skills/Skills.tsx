import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { ExperienceItem, SkillItem, WorkExperienceItem } from "./models";
import { constants } from "../../constants/";
import { client } from "../../client";
import AppWrap from "../../wrapper/AppWrap";
import Skill from "./Skill/Skill";
import Experience from "./Experience/Experience";
import "./Skills.scss";

const Skills: React.FC = () => {
  const [works, setWorks] = useState<WorkExperienceItem[]>([]);
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const [skills, setSkills] = useState<SkillItem[]>([]);

  useEffect(() => {
    const worksQuery = '*[_type == "workExperience"]';
    const experienceQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(worksQuery).then((data) => {
      setWorks(data);
    });
    client.fetch(experienceQuery).then((data) => {
      setExperiences(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div className="app__skills-container">
      <motion.div className="app__skills-list">
        {skills.map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </motion.div>
      <motion.div className="app__skills-exp">
        {experiences.map((experience) => (
          <Experience
            key={experience.year}
            experience={experience}
            works={works}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  Skills,
  constants.ID_SKILLS,
  true,
  constants.CLASS_WHITE_BG
);
