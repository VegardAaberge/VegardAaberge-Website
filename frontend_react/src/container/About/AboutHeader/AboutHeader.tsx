import React from "react";
import "./AboutHeader.module.scss";

const AboutHeader: React.FC = () => {
  return (
    <div className="app__about-header">
      <p className="app__about-header-title head-text">About Me</p>
      <span className="app__about-header-content">
        I am a software developer with professional experience since 2015. I did
        a mechatronics degree in New Zealand where I learned how to combine
        programming with engineering.
      </span>
      <br />
      <span className="app__about-header-content">
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
