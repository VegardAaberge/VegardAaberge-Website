import React from "react";
import "./NavbarLinks.scss";

interface Props {
  links: Array<string>;
}

const NavbarLinks: React.FC<Props> = ({ links }) => {
  return (
    <ul className="app__navbar-links">
      {links.map((item) => (
        <li className="app__flex-center p-text" key={`link-${item}`}>
          <div />
          <a href={`#${item}`}>{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
