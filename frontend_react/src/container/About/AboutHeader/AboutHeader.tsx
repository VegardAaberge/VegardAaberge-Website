import React from "react";

import styles from "./AboutHeader.module.scss";
import mainStyles from "./../../../styles/App.module.scss";

const AboutHeader: React.FC = () => {
  return (
    <div className={styles.about_header}>
      <p className={`${styles.about_header_title} ${mainStyles.head_text}`}>
        About Me
      </p>
      <span className={styles.about_header_content}>
        I am a software developer with professional experience since 2015. I did
        a mechatronics degree in New Zealand where I learned how to combine
        programming with engineering.
      </span>
      <br />
      <span className={styles.about_header_content}>
        After the degree I moved back to Norway and did a freelance project for
        Lundin before I got a job at Unizite where I provided support for
        clients, developed tools and created the app used in Unizite to manage
        projects. In 2018 I moved to China as she wanted to setup a busieness in
        China and kept working for Unizite remotely.
      </span>
    </div>
  );
};

export default AboutHeader;
