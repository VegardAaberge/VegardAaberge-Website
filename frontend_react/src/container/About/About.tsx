import React, { useEffect, useState } from "react";

import { AboutItem } from "./AboutItem";
import AboutHeader from "./AboutHeader/AboutHeader";
import AboutCard from "./AboutCard/AboutCard";

import styles from "./About.module.scss";

interface Props {
  iAbouts: AboutItem[];
}

const About: React.FC<Props> = ({ iAbouts }) => {
  const [abouts, setAbouts] = useState<AboutItem[]>([]);

  useEffect(() => {
    setAbouts(iAbouts);
  }, [iAbouts]);

  return (
    <div className={styles.about}>
      <AboutHeader />
      <div className={styles.about_cards}>
        {abouts.map((about, index) => (
          <AboutCard about={about} key={about.title + index} />
        ))}
      </div>
    </div>
  );
};

export default About;
