import React from "react";

import {
  AppBar,
  Box,
  Card,
  Container,
  Divider,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import WorkItemSelector from "./WorkItemSelector";
import { WorkItem } from "../container/Work/WorkItem";
import NavWorkList from "../components/NavWorkList/NavWorkList";
import MenuIcon from "@mui/icons-material/Menu";
import IconMenu from "./Components/IconMenu";

import styles from "../styles/App.module.scss";

interface Props {
  projectLink: string;
  works: WorkItem[];
}

const WorkApp: React.FC<Props> = ({ projectLink, works }) => {
  const currentWork = works.find((work) => work.projectLink == projectLink);
  if (currentWork === undefined) return <div>No Work was found</div>;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {currentWork.title}
          </Typography>
        </Toolbar>
        <IconMenu />
      </AppBar>
      <Box component="main" sx={{ p: 3 }} className={styles.work_wrap}>
        <Grid container sx={{ paddingInline: 3 }} maxWidth="xl">
          <Grid item md={9} sx={{ paddingRight: 3 }}>
            <WorkItemSelector work={currentWork} />
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

export default WorkApp;
