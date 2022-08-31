import React from "react";

import { strings } from "../../constants/";
import styles from "./NavigationDots.module.scss";

interface Props {
  activeItem: string;
}

const links = [
  strings.ID_HOME,
  strings.ID_WORK,
  strings.ID_SKILLS,
  strings.ID_TESTIMONIALS,
  strings.ID_CONTACT,
];

const NavigationDots: React.FC<Props> = ({ activeItem }) => {
  // Set the active item for About to Home, as the navigation dot represent home.
  if (activeItem === strings.ID_ABOUT) {
    activeItem = strings.ID_HOME;
  }

  return (
    <div className={styles.navigation}>
      {links.map((item, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          href={`#${item}`}
          key={item + index}
          className={styles.navigation_dot}
          style={activeItem === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
