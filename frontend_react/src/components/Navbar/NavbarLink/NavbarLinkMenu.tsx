import Link from "next/link";
import { useState } from "react";
import { NavLink } from "../Navbar";
import { strings } from "../../../constants";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import styles from "./NavbarLink.module.scss";

interface Props {
  navLink: NavLink;
  onLinkClick?: () => void;
}

const NavbarLinkMenu: React.FC<Props> = ({ navLink, onLinkClick }) => {
  const [showDropdown, setShowDropdown] = useState(
    navLink.title == strings.PROJECTS
  );

  if (navLink.dropdown === undefined) {
    return <div>No dropdown value available</div>;
  }

  const titleClicked = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <a
        onClick={titleClicked}
        className={`${styles.nav_dropdown_link} ${
          showDropdown ? styles.title_active : styles.title_inactive
        }`}
      >
        {navLink.title}{" "}
        <KeyboardArrowDownIcon className={styles.menu_arrow_down} />
      </a>
      {showDropdown &&
        navLink.dropdown.map((option) => (
          <li key={option.link} className={styles.menu_dropdown_item}>
            <Link href={navLink.link + option.link} key={option.title}>
              <a onClick={onLinkClick} className={styles.nav_link}>
                {option.title}
              </a>
            </Link>
          </li>
        ))}
    </>
  );
};

export default NavbarLinkMenu;
