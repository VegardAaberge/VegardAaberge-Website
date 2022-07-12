import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { ExperienceItem, SkillItem, WorkExperienceItem } from "./models";
import { strings } from "../../constants/";
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
    client.fetch(strings.QUERY_WORK_EXPERIENCE).then((data) => {
      setWorks(data);
    });
    client.fetch(strings.QUERY_EXPERIENCES).then((data) => {
      setExperiences(data);
    });
    client.fetch(strings.QUERY_SKILLS).then((data) => {
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

export default AppWrap(Skills, strings.ID_SKILLS, true, strings.CLASS_WHITE_BG);
