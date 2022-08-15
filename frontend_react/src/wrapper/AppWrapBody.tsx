import React from "react";

import { strings } from "../constants/";
import { NavigationDots, SocialMedia } from "../components";

import styles from "./AppWrap.module.scss";
import mainStyles from "../styles/App.module.scss";

interface Props {
  idName: string;
  className?: string;
  children: React.ReactNode;
}

const AppWrapBody: React.FC<Props> = ({ idName, className, children }) => {
  const style =
    className === strings.CLASS_WHITE_BG
      ? mainStyles.whitebg
      : mainStyles.primarybg;

  if (idName == strings.ID_HOME) {
    return (
      <div className={`${styles.home_wrapper} ${mainStyles.flex_center}`}>
        {children}
      </div>
    );
  }
  return (
    <div id={idName} className={`${styles.container} ${style}`}>
      <SocialMedia />

      <div className={`${styles.wrapper} ${mainStyles.flex_center}`}>
        {children}
      </div>
      <NavigationDots activeItem={idName} />
    </div>
  );
};

export default AppWrapBody;
