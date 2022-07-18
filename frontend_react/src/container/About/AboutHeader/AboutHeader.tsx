import React from "react";
import "./AboutHeader.scss";

const AboutHeader: React.FC = () => {
  return (
    <div className="app__about-header">
      <h2 className="app__about-header-title">About Me</h2>
      <span className="app__about-header-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam.
      </span>
    </div>
  );
};

export default AboutHeader;
