import React from "react";
import { WorkItem } from "../../container/Work/WorkItem";

import { Card, ListItem, Typography } from "@mui/material";

import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import DateRangeIcon from "@mui/icons-material/DateRange";

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
          <p>{work.company}</p>
        </ListItem>
        <ListItem sx={{ paddingTop: 2 }}>
          <ListItemIcon>
            <DateRangeIcon sx={{ fontSize: 30 }} />
          </ListItemIcon>
          <p>{work.period}</p>
        </ListItem>
        <ListItem sx={{ paddingTop: 2 }}>
          <ListItemIcon>
            <CodeIcon sx={{ fontSize: 30 }} />
          </ListItemIcon>
          <p>{work.skillsUsedStrings.join(", ")}</p>
        </ListItem>
        {work.codeLink?.length > 0 && (
          <ListItem sx={{ paddingTop: 2 }}>
            <ListItemIcon>
              <GitHubIcon sx={{ fontSize: 30 }} />
            </ListItemIcon>
            <Typography
              style={{ wordWrap: "break-word" }}
              sx={{ width: "100%" }}
            >
              <a href={work.codeLink} target="_blank" rel="noreferrer">
                {work.codeLink}
              </a>
            </Typography>
          </ListItem>
        )}
      </List>
    </Card>
  );
};

export default Home;
