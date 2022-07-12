import React from "react";

import { strings } from "../../constants/";
import "./NavigationDots.scss";

interface Props {
  activeItem: string;
}

const links = [
  strings.ID_HOME,
  strings.ID_ABOUT,
  strings.ID_WORK,
  strings.ID_SKILLS,
  strings.ID_TESTIMONIALS,
  strings.ID_CONTACT,
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
