import React from "react";
import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social_links}>
        <div>
          <a
            href="https://www.linkedin.com/in/vegard-aaberge-a0a38426"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/VegardAaberge"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </div>
        <div>
          <a href="mailto:vegard.aaberge@gmail.com">
            <FiMail />
          </a>
        </div>
      </div>
      <div className={styles.navigation_links}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/work/my_playgroup_app">
          <a>Portfolio</a>
        </Link>
        <Link href="/privacy">
          <a>Privacy Policy</a>
        </Link>
      </div>

      <div className={styles.copyright}>Vegard Hamnes Aaberge @ 2022</div>
    </footer>
  );
};

export default Footer;
