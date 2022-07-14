import React from "react";

import { NavigationDots, SocialMedia } from "../components";

interface Props {
  Component: React.FC;
  idName: string;
  className?: string;
}

const AppWrapBody: React.FC<Props> = ({ Component, idName, className }) => {
  return (
    <div id={idName} className={`app__container ${className}`}>
      <SocialMedia />

      <div className="app__wrapper app__flex-center">
        <Component />
      </div>
      <NavigationDots activeItem={idName} />
    </div>
  );
};

export default AppWrapBody;
