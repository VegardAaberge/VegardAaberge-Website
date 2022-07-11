import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { client } from "../../client";
import "./Skills.scss";
import { ExperienceItem } from "./models/ExperienceItem";
import { SkillItem } from "./models/SkillItem";
import { WorkExperienceItem } from "./models/WorkExperienceItem";
import Skill from "./Skill/Skill";
import Experience from "./Experience/Experience";
import { AppWrap } from "../../wrapper";

interface Props {}

const Skills: React.FC<Props> = () => {
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

export default AppWrap(Skills, "skills");
