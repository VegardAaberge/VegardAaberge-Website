import Link from "next/link";
import { useState } from "react";
import { styled } from "@mui/system";
import { NavLink } from "../Navbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import styles from "./NavbarLink.module.scss";

interface Props {
  navLink: NavLink;
  onLinkClick?: () => void;
}

const NavbarLinkDropdown: React.FC<Props> = ({ navLink }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  if (navLink.dropdown === undefined) {
    return <div>No dropdown value available</div>;
  }

  return (
    <div
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <a className={`${styles.nav_link} ${styles.nav_link_dropdown}`}>
        {navLink.title}
        <KeyboardArrowDownIcon className={styles.arrow_down} />
      </a>
      <ul
        className={`${styles.dropdown_ul} ${showDropdown ? "" : styles.hidden}`}
      >
        {navLink.dropdown.map((option) => (
          <li key={option.link}>
            {option.external === true ? (
              <a
                href={navLink.link + option.link}
                target="_blank"
                rel="noreferrer"
              >
                {option.title}
              </a>
            ) : (
              <Link href={navLink.link + option.link}>
                <a>{option.title}</a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarLinkDropdown;
