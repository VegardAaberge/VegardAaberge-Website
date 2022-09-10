import React, { useContext } from "react";

import {
  Box,
  Card,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import WorkItemSelector from "./WorkItemSelector";
import { WorkContextType } from "../context/WorkContextType";
import { WorkContext } from "../context/WorkContext";
import NavWorkList from "../components/NavWorkList/NavWorkList";
import { Navbar } from "../components";
import workTheme from "../styles/workTheme";

import styles from "./WorkApp.module.scss";

const WorkApp: React.FC = () => {
  console.log("WorkApp");
  const { works, projectLink } = useContext<WorkContextType>(WorkContext);
  console.log("WorkApp", works);

  const isMobile = useMediaQuery(workTheme.breakpoints.down("sm"));
  const isSm = useMediaQuery(workTheme.breakpoints.only("sm"));
  const isMd = useMediaQuery(workTheme.breakpoints.only("md"));

  const currentWork = works.find((work) => work.projectLink == projectLink);
  if (currentWork === undefined) return <div>Work item not found</div>;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar works={works} />

      <Box
        component="main"
        sx={{ p: isMobile ? 1 : 3, paddingTop: "100px" }}
        className={styles.work_wrap}
      >
        <Grid
          container
          maxWidth="xl"
          sx={{ paddingInline: isMd || isMobile ? 0 : 3 }}
        >
          <Grid
            item
            lg={9}
            md={8}
            sx={{ paddingRight: isSm || isMobile ? 0 : 3 }}
          >
            <WorkItemSelector work={currentWork} />
          </Grid>
          <Grid
            item
            lg={3}
            md={4}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Card variant="outlined">
              <Typography variant="h5" align="center" sx={{ p: 3 }}>
                Portfolio projects
              </Typography>
              <Divider sx={{ marginInline: 3 }} />
              <NavWorkList />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WorkApp;
