import React, { useState } from "react";
import styles from "./NavbarMenu.module.scss";
import { motion } from "framer-motion";
import { HiX, HiMenuAlt4 } from "react-icons/hi";
import Link from "next/link";
import { NavLink } from "../Navbar";
import NavbarLink from "../NavbarLink/NavbarLink";

interface Props {
  links: Array<NavLink>;
}

const NavbarMenu: React.FC<Props> = ({ links }) => {
  const [toggle, setToggle] = useState(false);

  const onLinkClick = () => {
    setTimeout(() => {
      setToggle(false);
    }, 500);
  };

  return (
    <div className={styles.navbar_menu}>
      <HiMenuAlt4 onClick={() => setToggle(true)} />

      {toggle && (
        <motion.div
          initial={{ opacity: 1, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <HiX onClick={() => setToggle(false)} />
          <ul>
            {links.map((navLink) => (
              <li key={navLink.link}>
                <NavbarLink
                  navLink={navLink}
                  isMenu={true}
                  onLinkClick={onLinkClick}
                />
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default NavbarMenu;
