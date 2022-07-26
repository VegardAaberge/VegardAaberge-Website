import React from "react";
import Image from "next/image";

import { images, strings } from "../../constants";
import styles from "./Navbar.module.scss";

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
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Image src={images.logo} alt="logo" />
      </div>
      <NavbarLinks links={links} />
      <NavbarMenu links={links} />
    </nav>
  );
};

export default Navbar;
