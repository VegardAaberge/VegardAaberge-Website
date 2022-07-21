import React from "react";
import "./HomeBtns.scss";

import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Button from "@mui/material/Button";

const HomeBtns: React.FC = () => {
  return (
    <div className="app__home-btns">
      <Button
        variant="contained"
        startIcon={<GitHubIcon />}
        onClick={() =>
          (window.location.href = "https://github.com/VegardAaberge")
        }
      >
        Visit my GitHub
      </Button>

      <Button
        variant="contained"
        color="secondary"
        startIcon={<EmailOutlinedIcon />}
        onClick={() => (window.location.href = "#contact")}
      >
        Contact me
      </Button>
    </div>
  );
};

export default HomeBtns;
