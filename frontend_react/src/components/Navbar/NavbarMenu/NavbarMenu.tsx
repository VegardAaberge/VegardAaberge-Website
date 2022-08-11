import React, { useState } from "react";
import styles from "./NavbarMenu.module.scss";
import { motion } from "framer-motion";
import { HiX, HiMenuAlt4 } from "react-icons/hi";
import Link from "next/link";

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
          initial={{ opacity: 1, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <HiX onClick={() => setToggle(false)} />
          <ul>
            {links.map((item) => (
              <li key={item}>
                <Link href={`#${item}`} onClick={() => setToggle(false)}>
                  <a>{item}</a>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default NavbarMenu;
