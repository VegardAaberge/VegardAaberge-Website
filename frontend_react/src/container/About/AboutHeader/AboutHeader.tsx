import React from "react";
import "./AboutHeader.scss";

const AboutHeader: React.FC = () => {
  return (
    <div className="home-heading-container">
      <h2 className="home-text section-Heading">About Me</h2>
      <span className="home-text1 section-Text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam.
      </span>
    </div>
  );
};

export default AboutHeader;
