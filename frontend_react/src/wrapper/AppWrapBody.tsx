import React from "react";

import { NavigationDots, SocialMedia } from "../components";

import styles from "./AppWrap.module.scss";

interface Props {
  Component: React.FC;
  idName: string;
  className?: string;
}

const AppWrapBody: React.FC<Props> = ({ Component, idName, className }) => {
  return (
    <div id={idName} className={styles.app__container}>
      <SocialMedia />

      <div className={`${styles.wrapper} ${styles.flex_center}`}>
        <Component />
      </div>
      <NavigationDots activeItem={idName} />
    </div>
  );
};

export default AppWrapBody;
