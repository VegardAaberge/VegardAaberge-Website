import React from "react";

import { images } from "../../constants";
import "./Navbar.scss";

import NavbarLinks from "./NavbarLinks/NavbarLinks";
import NavbarMenu from "./NavbarMenu/NavbarMenu";

const links = ["home", "about", "work", "skill", "contact"];

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
