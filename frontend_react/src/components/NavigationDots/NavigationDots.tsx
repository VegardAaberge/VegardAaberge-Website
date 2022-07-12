import React from "react";

import { constants } from "../../constants/";
import "./NavigationDots.scss";

interface Props {
  activeItem: string;
}

const links = [
  constants.ID_HOME,
  constants.ID_ABOUT,
  constants.ID_WORK,
  constants.ID_SKILLS,
  constants.ID_TESTIMONIALS,
  constants.ID_CONTACT,
];

const NavigationDots: React.FC<Props> = ({ activeItem }) => {
  return (
    <div className="app__navigation">
      {links.map((item, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={activeItem === item ? { backgroundColor: "#313BAC" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
