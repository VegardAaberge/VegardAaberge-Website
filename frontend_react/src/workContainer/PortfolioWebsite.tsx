import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AlignItemsList from "./AlignItemsList";
import { Card, ListItem } from "@mui/material";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const PortfolioWebsite: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item md={4}>
        <Card variant="outlined">
          <List>
            <ListItem>
              <ListItemIcon>
                <ApartmentIcon />
              </ListItemIcon>
              Personal
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              React, Next.js, scss, javascript
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/
              </a>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LanguageIcon />
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
      </Grid>
      <Grid item md={8}>
        <Card variant="outlined" sx={{ p: 3 }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PortfolioWebsite;
