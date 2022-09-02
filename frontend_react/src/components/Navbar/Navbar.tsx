import React, { useContext } from "react";
import Image from "next/image";

import { images, strings } from "../../constants";
import styles from "./Navbar.module.scss";

import NavbarLinks from "./NavbarLinks/NavbarLinks";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import Link from "next/link";
import { WorkContextType } from "../../context/WorkContextType";
import { WorkContext } from "../../context/WorkContext";
import { WorkItem } from "../../container/Work/WorkItem";

export interface NavLink {
  link: string;
  title: string;
  external?: boolean;
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
      title: strings.PROJECTS,
      link: strings.LINK_PROJECTS,
      dropdown: works.map((work) => ({
        title: work.title,
        link: work.projectLink,
      })),
    },
    {
      title: strings.OTHER,
      link: strings.LINK_OTHER,
      dropdown: [
        {
          title: "Old website",
          link: "/old-website/index.html",
          external: true,
        },
        {
          title: "Brudesalong Website",
          link: "/brudesalong/index.html",
          external: true,
        },
        {
          title: "My Github",
          link: "https://github.com/VegardAaberge",
          external: true,
        },
      ],
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
