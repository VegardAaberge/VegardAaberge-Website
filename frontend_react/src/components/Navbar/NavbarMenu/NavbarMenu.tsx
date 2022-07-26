import React, { useState } from "react";
import styles from "./NavbarMenu.module.scss";
import { motion } from "framer-motion";
import { HiX, HiMenuAlt4 } from "react-icons/hi";

interface Props {
  links: Array<string>;
}

const NavbarMenu: React.FC<Props> = ({ links }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.navbar_menu}>
      <HiMenuAlt4 onClick={() => setToggle(true)} />

      {toggle && (
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
      )}
    </div>
  );
};

export default NavbarMenu;
