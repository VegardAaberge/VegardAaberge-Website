import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../../../client";
import { SkillItem } from "../models/SkillItem";

import styles from "./Skill.module.scss";
import mainStyles from "../../../styles/App.module.scss";
import Image from "next/image";

interface Props {
  skill: SkillItem;
}

const Skill: React.FC<Props> = ({ skill }) => {
  return (
    <div className={`${styles.skills_item} ${mainStyles.flex_center}`}>
      <div className={mainStyles.flex_center}>
        <div className={styles.skills_item_image}>
          <Image
            src={urlFor(skill.icon).url()}
            alt={skill.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <p className={mainStyles.p_text}>{skill.name}</p>
    </div>
  );
};

export default Skill;
