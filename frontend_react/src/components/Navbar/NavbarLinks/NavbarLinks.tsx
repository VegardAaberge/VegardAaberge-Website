import React from "react";

import styles from "./NavbarLinks.module.scss";
import mainStyles from "../../../styles/App.module.scss";

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
          <a href={`#${item}`}>{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
