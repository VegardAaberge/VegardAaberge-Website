import React from "react";
import { WorkItem } from "../../container/Work/WorkItem";

import { Card, ListItem } from "@mui/material";

import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

interface Props {
  work: WorkItem;
}

const Home: React.FC<Props> = ({ work }) => {
  return (
    <Card variant="outlined">
      <List>
        <ListItem sx={{ paddingTop: 2 }}>
          <ListItemIcon>
            <ApartmentIcon sx={{ fontSize: 30 }} />
          </ListItemIcon>
          {work.company}
        </ListItem>
        <ListItem sx={{ paddingTop: 2 }}>
          <ListItemIcon>
            <CodeIcon sx={{ fontSize: 30 }} />
          </ListItemIcon>
          {work.skillsUsedStrings.join(", ")}
        </ListItem>
        <ListItem sx={{ paddingTop: 2 }}>
          <ListItemIcon>
            <GitHubIcon sx={{ fontSize: 30 }} />
          </ListItemIcon>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/
          </a>
        </ListItem>
        <ListItem sx={{ paddingTop: 2, paddingBottom: 2 }}>
          <ListItemIcon>
            <LanguageIcon sx={{ fontSize: 30 }} />
          </ListItemIcon>
          <a
            href="https://vegardaaberge.no"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://vegardaaberge.no
          </a>
        </ListItem>
      </List>
    </Card>
  );
};

export default Home;
