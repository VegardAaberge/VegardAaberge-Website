import React from "react";

import "./HomeInfo.scss";

const HomeInfo: React.FC = () => {
  return (
    <div className="app__home-info">
      <h2 className="app__home-info-intro">Hello, My name is</h2>
      <h1 className="app__home-info-name">Vegard Aaberge</h1>
      <div className="app__home-info-title">
        <div className="app__home-info-title-wrapper">
          {["Xamarin", "Native Android", "UI/UX", "React", "Spring Boot"].map(
            (item) => (
              <div className="app__home-info-title-item">{item}</div>
            )
          )}
        </div>
      </div>
      <p className="app__home-info-desc">
        I have severall years of experience developing mobile apps and web
        applications for both small and large customers.
      </p>
    </div>
  );
};

export default HomeInfo;
