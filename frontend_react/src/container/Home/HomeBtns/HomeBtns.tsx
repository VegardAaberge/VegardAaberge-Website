import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Button from "@mui/material/Button";
import styles from "./HomeBtns.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const HomeBtns: React.FC = () => {
  const router = useRouter();

  return (
    <div className={styles.home_btns}>
      <Button variant="contained" startIcon={<GitHubIcon />}>
        <a
          href="https://github.com/VegardAaberge"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
        </a>
      </Button>

      <Button
        variant="contained"
        color="secondary"
        startIcon={<EmailOutlinedIcon />}
        onClick={() => router.push("#contact")}
      >
        Contact me
      </Button>
    </div>
  );
};

export default HomeBtns;
