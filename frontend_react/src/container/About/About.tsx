import React, { useEffect, useState } from "react";

import { client } from "../../client";
import { AboutItem } from "./AboutItem";
import { strings } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import AboutHeader from "./AboutHeader/AboutHeader";
import AboutCard from "./AboutCard/AboutCard";
import "./About.module.scss";

const About = () => {
  const [abouts, setAbouts] = useState<AboutItem[]>([]);

  useEffect(() => {
    client.fetch(strings.QUERY_ABOUT).then((data) => {
      data.length = 3;
      setAbouts(data);
    });
  }, []);

  return (
    <div className="app__about app__about-features">
      <AboutHeader />
      <div className="app__about-cards">
        {abouts.map((about, index) => (
          <AboutCard about={about} key={about.title + index} />
        ))}
      </div>
    </div>
  );
};

export default AppWrap(About, strings.ID_ABOUT, true, strings.CLASS_WHITE_BG);
