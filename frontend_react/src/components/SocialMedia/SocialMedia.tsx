import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

import styles from "./SocialMedia.module.scss";

interface Props {}

const SocialMedia: React.FC<Props> = () => {
  return (
    <div className={styles.social}>
      <div>
        <a
          href="https://www.linkedin.com/in/vegard-aaberge-a0a38426"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/VegardAaberge"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="mailto:vegard.aaberge@gmail.com">
          <FiMail />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
