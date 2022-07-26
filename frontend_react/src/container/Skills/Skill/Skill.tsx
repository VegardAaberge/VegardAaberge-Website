import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../../../client";
import { SkillItem } from "../models/SkillItem";

import styles from "./Skill.module.scss";
import mainStyles from "../../../styles/App.module.scss";

interface Props {
  skill: SkillItem;
}

const Skill: React.FC<Props> = ({ skill }) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className={`${styles.skills_item} ${mainStyles.flex_center}`}
    >
      <div className={mainStyles.flex_center}>
        <img src={urlFor(skill.icon).url()} alt={skill.name} />
      </div>
      <p className={mainStyles.p_text}>{skill.name}</p>
    </motion.div>
  );
};

export default Skill;
