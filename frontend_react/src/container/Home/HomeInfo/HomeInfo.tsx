import React from "react";

import "./HomeInfo.scss";

const HomeInfo: React.FC = () => {
  return (
    <div className="app__home-left">
      <div className="app__home-left-wrapper">
        <h2 className="app__home-intro">Hello, My name is</h2>
        <h1 className="app__home-name">Vegard Aaberge</h1>
        <div className="app__home-title">
          <div className="app__home-title-wrapper">
            {[
              "App Developer",
              "Web Developer",
              "Photographer",
              "Writer",
              "Content Creator",
            ].map((item) => (
              <div className="app__home-title-item">{item}</div>
            ))}
          </div>
        </div>
        <p className="app__home-desc">
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites, web services and online stores.
        </p>
      </div>
    </div>
  );
};

export default HomeInfo;
