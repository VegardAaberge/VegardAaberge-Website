import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiX } from "react-icons/hi";

import styles from "./SideMenu.module.scss";

interface Props {
  links: Array<string>;
  setToggle: (isToggled: boolean) => void;
}

const NavbarMenu: React.FC<Props> = ({ links, setToggle }) => {
  return (
    <div className={styles.navbar_menu}>
      <motion.div
        whileInView={{ x: [300, 0] }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <HiX onClick={() => setToggle(false)} />
        <ul>
          {links.map((item) => (
            <li key={item}>
              <a href={`#${item}`} onClick={() => setToggle(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default NavbarMenu;
