import Link from "next/link";
import { styled } from "@mui/system";
import { NavLink } from "../Navbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import styles from "./NavbarLink.module.scss";

const grey = {
  50: "#DBDFE4",
  200: "#E0E3E7",
  300: "#CDD2D7",
  900: "#1A2027",
};

interface Props {
  navLink: NavLink;
}

const Listbox = styled("ul")(
  () => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 5px 0 0 0;
  list-style: none;
  position: absolute;
  height: auto;
  transition: opacity 0.1s ease;
  width: auto;
  box-shadow: ${`0 5px 13px -3px ${grey[200]}`};
  background: var(--primary-color);
  border: 0.5px solid ${grey[300]};
  border-radius: 0.15em;
  color: ${grey[900]};
  overflow: auto;
  z-index: 1;
  outline: 0px;

  &.hidden {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s 0.5s ease, visibility 0.4s 0.5s step-end;
  }

  & > li {
    padding: 8px 16px;
    border-radius: 0.45em;

    &:hover {
      background: ${grey[50]};
    }
  }
  `
);

const NavbarLink: React.FC<Props> = ({ navLink }) => {
  if (navLink.dropdown !== undefined) {
    return (
      <div>
        <a>
          {navLink.title}
          <KeyboardArrowDownIcon className={styles.arrow_down} />
        </a>
        <Listbox>
          {navLink.dropdown.map((option) => (
            <li key={option.link}>
              <Link href={"/work/" + option.link}>
                <a>{option.title}</a>
              </Link>
            </li>
          ))}
        </Listbox>
      </div>
    );
  } else {
    return (
      <Link href={navLink.link}>
        <a>{navLink.title}</a>
      </Link>
    );
  }
};

export default NavbarLink;
