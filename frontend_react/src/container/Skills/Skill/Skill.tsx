import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../../../client";

import "./Skill.module.scss";
import { SkillItem } from "../models/SkillItem";

interface Props {
  skill: SkillItem;
}

const Skill: React.FC<Props> = ({ skill }) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__skills-item app__flex-center"
    >
      <div className="app__flex-center">
        <img src={urlFor(skill.icon).url()} alt={skill.name} />
      </div>
      <p className="p-text">{skill.name}</p>
    </motion.div>
  );
};

export default Skill;
