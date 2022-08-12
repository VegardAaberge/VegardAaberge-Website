import React from "react";
import Image from "next/image";

import { images, strings } from "../../constants";
import styles from "./Navbar.module.scss";

import NavbarLinks from "./NavbarLinks/NavbarLinks";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import Link from "next/link";
import { WorkItem } from "../../container/Work/WorkItem";

export interface NavLink {
  link: string;
  title: string;
  dropdown?: Array<NavLink>;
}

interface Props {
  works: WorkItem[];
}

const Navbar: React.FC<Props> = ({ works }) => {
  const links: NavLink[] = [
    { title: strings.ID_HOME, link: "/#" + strings.ID_HOME },
    { title: strings.ID_WORK, link: "/#" + strings.ID_WORK },
    { title: strings.ID_SKILLS, link: "/#" + strings.ID_SKILLS },
    { title: strings.ID_CONTACT, link: "/#" + strings.ID_CONTACT },
    {
      title: "Projects",
      link: "work/",
      dropdown: works.map((work) => ({
        title: work.title,
        link: work.projectLink,
      })),
    },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Link href="/">
          <a>
            <Image src={images.logo} alt="logo" />
          </a>
        </Link>
      </div>
      <NavbarLinks links={links} />
      <NavbarMenu links={links} />
    </nav>
  );
};

export default Navbar;
