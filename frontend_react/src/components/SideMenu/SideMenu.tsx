import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiX } from "react-icons/hi";

import styles from "./SideMenu.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

interface WorkLink {
  link: string;
  title: string;
}

interface Props {
  links: Array<WorkLink>;
  setToggle: (isToggled: boolean) => void;
}

const NavbarMenu: React.FC<Props> = ({ links, setToggle }) => {
  const router = useRouter();

  return (
    <div className={styles.navbar_menu}>
      <motion.div
        initial={{ opacity: 1, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <HiX onClick={() => setToggle(false)} />
        <ul>
          {links.map((item) => (
            <li key={item.title}>
              <a
                onClick={() => {
                  router.push(`/work/${item.link}`);
                  setToggle(false);
                }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default NavbarMenu;
