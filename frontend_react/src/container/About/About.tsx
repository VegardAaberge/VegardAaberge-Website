import React, { useState, useEffect } from "react";

import { client } from "../../client";
import { AboutItem } from "./AboutItem";
import AppWrap from "../../wrapper/AppWrap";
import AboutHeader from "./AboutHeader/AboutHeader";
import AboutCard from "./AboutCard/AboutCard";
import "./About.scss";

const About: React.FC = () => {
  const [abouts, setAbouts] = useState<AboutItem[]>([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div className="app__about app__flex-center">
      <AboutHeader />

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <AboutCard about={about} key={about.title + index} />
        ))}
      </div>
    </div>
  );
};

export default AppWrap(About, "about", true, "app__whitebg");
