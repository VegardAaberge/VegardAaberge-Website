import React from "react";

import "./HomeInfo.scss";

const HomeInfo: React.FC = () => {
  return (
    <div className="app__home-info">
      <h2 className="app__home-info-intro">Hello, My name is</h2>
      <h1 className="app__home-info-name">Vegard Aaberge</h1>
      <div className="app__home-info-title">
        <div className="app__home-info-title-wrapper">
          {[
            "App Developer",
            "Web Developer",
            "Photographer",
            "Writer",
            "Content Creator",
          ].map((item) => (
            <div className="app__home-info-title-item">{item}</div>
          ))}
        </div>
      </div>
      <p className="app__home-info-desc">
        I design and develop services for customers of all sizes, specializing
        in creating stylish, modern websites, web services and online stores.
      </p>
    </div>
  );
};

export default HomeInfo;
