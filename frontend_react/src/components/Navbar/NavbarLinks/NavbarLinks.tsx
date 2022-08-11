import React from "react";

import styles from "./NavbarLinks.module.scss";
import mainStyles from "../../../styles/App.module.scss";
import Link from "next/link";

interface Props {
  links: Array<string>;
}

const NavbarLinks: React.FC<Props> = ({ links }) => {
  return (
    <ul className={styles.navbar_links}>
      {links.map((item) => (
        <li
          className={`${mainStyles.flex_center} ${mainStyles.p_text}`}
          key={`link-${item}`}
        >
          <div />
          <Link href={`#${item}`}>
            <a>{item}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
