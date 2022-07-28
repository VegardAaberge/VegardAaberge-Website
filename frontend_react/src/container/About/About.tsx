import React, { useEffect, useState } from "react";

import { client } from "../../client";
import { AboutItem } from "./AboutItem";
import { strings } from "../../constants";
import AboutHeader from "./AboutHeader/AboutHeader";
import AboutCard from "./AboutCard/AboutCard";

import styles from "./About.module.scss";
import mainStyles from "./../../styles/App.module.scss";

const About = () => {
  const [abouts, setAbouts] = useState<AboutItem[]>([]);

  useEffect(() => {
    client.fetch(strings.QUERY_ABOUT).then((data) => {
      data.length = 3;
      setAbouts(data);
    });
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
