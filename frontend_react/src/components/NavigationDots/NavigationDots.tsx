import React from "react";

import "./NavigationDots.scss";

interface Props {
  activeItem: string;
}

const links = ["home", "about", "work", "skills", "testimonals", "contact"];

const NavigationDots: React.FC<Props> = ({ activeItem }) => {
  return (
    <div className="app__navigation">
      {links.map((item, index) => (
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
