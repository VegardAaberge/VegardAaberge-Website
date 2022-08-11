import React from "react";
import { WorkItem } from "../../container/Work/WorkItem";

import {
  Card,
  ListItem,
  SxProps,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";

import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import DateRangeIcon from "@mui/icons-material/DateRange";

import workTheme from "../../styles/workTheme";

interface Props {
  work: WorkItem;
}

const Home: React.FC<Props> = ({ work }) => {
  const isSmall = useMediaQuery(workTheme.breakpoints.down("xl"));
  const padding = isSmall ? 1.5 : 2;
  const sxList: SxProps<Theme> = {
    paddingTop: padding,
    paddingBottom: padding,
  };
  const sxApartmentIcon: SxProps<Theme> = { fontSize: isSmall ? 25 : 35 };
  const sxListIcon: SxProps<Theme> = { minWidth: isSmall ? 46 : 56 };

  return (
    <Card variant="outlined">
      <List>
        <ListItem sx={sxListIcon}>
          <ListItemIcon sx={sxListIcon}>
            <ApartmentIcon sx={sxApartmentIcon} />
          </ListItemIcon>
          <p>{work.company}</p>
        </ListItem>
        <ListItem sx={sxList}>
          <ListItemIcon sx={sxListIcon}>
            <DateRangeIcon sx={sxApartmentIcon} />
          </ListItemIcon>
          <p>{work.period}</p>
        </ListItem>
        <ListItem sx={sxList}>
          <ListItemIcon sx={sxListIcon}>
            <CodeIcon sx={sxApartmentIcon} />
          </ListItemIcon>
          <p>{work.skillsUsedStrings.join(", ")}</p>
        </ListItem>
        {work.codeLink?.length > 0 && (
          <ListItem sx={sxList}>
            <ListItemIcon sx={sxListIcon}>
              <GitHubIcon sx={sxApartmentIcon} />
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
