import React, { useEffect, useState } from "react";

import { client } from "../../client";
import { AboutItem } from "./AboutItem";
import { strings } from "../../constants";
import AboutHeader from "./AboutHeader/AboutHeader";
import AboutCard from "./AboutCard/AboutCard";

import styles from "./About.module.scss";
import mainStyles from "./../../styles/App.module.scss";

interface Props {
  iAbouts: AboutItem[];
}

const About: React.FC<Props> = ({ iAbouts }) => {
  const [abouts, setAbouts] = useState<AboutItem[]>([]);

  useEffect(() => {
    setAbouts(iAbouts);
  }, []);

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
