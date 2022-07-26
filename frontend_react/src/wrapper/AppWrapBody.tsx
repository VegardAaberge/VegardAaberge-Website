import React from "react";

import { strings } from "../constants/";
import { NavigationDots, SocialMedia } from "../components";

import styles from "./AppWrap.module.scss";
import mainStyles from "../styles/App.module.scss";

interface Props {
  Component: React.FC;
  idName: string;
  className?: string;
}

const AppWrapBody: React.FC<Props> = ({ Component, idName, className }) => {
  const style =
    className === strings.CLASS_WHITE_BG
      ? mainStyles.whitebg
      : mainStyles.primarybg;

  return (
    <div id={idName} className={`${styles.container} ${style}`}>
      <SocialMedia />

      <div className={`${styles.wrapper} ${mainStyles.flex_center}`}>
        <Component />
      </div>
      <NavigationDots activeItem={idName} />
    </div>
  );
};

export default AppWrapBody;
