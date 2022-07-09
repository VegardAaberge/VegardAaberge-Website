import React, { useState, useEffect } from "react";

import "./About.scss";
import { AppWrap } from "../../wrapper";
import { client } from "../../client";
import { AboutItem } from "./AboutItem";
import AboutHeader from "./AboutHeader/AboutHeader";
import AboutCard from "./AboutCard/AboutCard";

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
          <AboutCard about={about} index={index} />
        ))}
      </div>
    </div>
  );
};

export default AppWrap(About, "about");
