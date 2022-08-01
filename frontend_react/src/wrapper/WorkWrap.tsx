import React from "react";

import {
  AppBar,
  Box,
  Container,
  createTheme,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import WorkApp from "../workContainer/WorkApp";
import AlignItemsList from "../workContainer/AlignItemsList";
import { red } from "@mui/material/colors";
import styles from "./AppWrap.module.scss";

interface Props {
  projectLink: string;
}

const primary = red[500]; // #f44336

const WorkWrap: React.FC<Props> = ({ projectLink }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {projectLink.replaceAll("_", " ")}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }} className={styles.work_wrap}>
        <Grid container sx={{ paddingInline: 3 }} maxWidth="xl">
          <Grid item md={9} sx={{ paddingRight: 3 }}>
            <WorkApp projectLink={projectLink} />
          </Grid>
          <Grid item md={3} sx={{ display: { xs: "none", md: "block" } }}>
            <AlignItemsList />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WorkWrap;
