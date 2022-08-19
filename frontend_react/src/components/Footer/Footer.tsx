import React from "react";
import Image from "next/image";

import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social_links}>
        <div>
          <BsTwitter />
        </div>
        <div>
          <FaFacebook />
        </div>
        <div>
          <BsInstagram />
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
