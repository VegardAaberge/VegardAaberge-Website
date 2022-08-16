import Link from "next/link";
import { NavLink } from "../Navbar";
import NavbarLinkDropdown from "./NavbarLinkDropdown";
import NavbarLinkMenu from "./NavbarLinkMenu";

import styles from "./NavbarLink.module.scss";

interface Props {
  navLink: NavLink;
  isMenu: Boolean;
  onLinkClick?: () => void;
}

const NavbarLink: React.FC<Props> = ({ navLink, isMenu, onLinkClick }) => {
  if (navLink.dropdown !== undefined) {
    if (isMenu) {
      return <NavbarLinkMenu navLink={navLink} onLinkClick={onLinkClick} />;
    } else {
      return <NavbarLinkDropdown navLink={navLink} />;
    }
  } else {
    return (
      <Link href={navLink.link}>
        <a className={styles.nav_link} onClick={onLinkClick}>
          {navLink.title}
        </a>
      </Link>
    );
  }
};

export default NavbarLink;
