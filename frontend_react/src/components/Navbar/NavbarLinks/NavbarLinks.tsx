import React from "react";

import styles from "./NavbarLinks.module.scss";
import mainStyles from "../../../styles/App.module.scss";
import Link from "next/link";
import { NavLink } from "../Navbar";
import NavbarLink from "../NavbarLink/NavbarLink";

interface Props {
  links: Array<NavLink>;
}

const NavbarLinks: React.FC<Props> = ({ links }) => {
  return (
    <ul className={styles.navbar_links}>
      {links.map((navLink) => (
        <li
          className={`${mainStyles.flex_center} ${mainStyles.p_text}`}
          key={navLink.link}
        >
          <div className={styles.navbar_circle} />
          <NavbarLink navLink={navLink} />
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
