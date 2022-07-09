import React from "react";

import "./AppWrap.scss";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (Component: React.FC, idName: string, className?: string) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${className}`}>
        <SocialMedia />

        <div className="app__wrapper app__flex-center">
          <Component />

          <div className="copyright">
            <p className="p-text">@2022 Vegard</p>
            <p className="p-text">All rights reserved</p>
          </div>
        </div>
        <NavigationDots activeItem={idName} />
      </div>
    );
  };

export default AppWrap;
