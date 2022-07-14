import React from "react";

import { images, strings } from "../../constants";
import "./Navbar.scss";

import NavbarLinks from "./NavbarLinks/NavbarLinks";
import NavbarMenu from "./NavbarMenu/NavbarMenu";

const links = [
  strings.ID_HOME,
  strings.ID_ABOUT,
  strings.ID_WORK,
  strings.ID_SKILLS,
  strings.ID_CONTACT,
];

const Navbar: React.FC = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <NavbarLinks links={links} />
      <NavbarMenu links={links} />
    </nav>
  );
};

export default Navbar;
