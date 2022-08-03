import React from "react";

import {
  AppBar,
  Box,
  Card,
  Container,
  Divider,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import WorkApp from "../workContainer/WorkApp";
import { red } from "@mui/material/colors";
import styles from "./AppWrap.module.scss";
import { WorkItem } from "../container/Work/WorkItem";
import NavWorkList from "../components/NavWorkList/NavWorkList";

interface Props {
  projectLink: string;
  works: WorkItem[];
}

const WorkWrap: React.FC<Props> = ({ projectLink, works }) => {
  const currentWork = works.find((work) => work.projectLink == projectLink);

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
            <WorkApp work={currentWork} />
          </Grid>
          <Grid item md={3} sx={{ display: { xs: "none", md: "block" } }}>
            <Card variant="outlined">
              <Typography variant="h5" align="center" sx={{ p: 3 }}>
                Portfolio projects
              </Typography>
              <Divider sx={{ marginInline: 3 }} />
              <NavWorkList projectLink={projectLink} works={works} />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WorkWrap;
