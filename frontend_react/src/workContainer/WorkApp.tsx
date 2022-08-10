import React, { useState } from "react";

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
  useMediaQuery,
} from "@mui/material";
import WorkItemSelector from "./WorkItemSelector";
import { WorkItem } from "../container/Work/WorkItem";
import NavWorkList from "../components/NavWorkList/NavWorkList";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarMenu from "../components/Navbar/NavbarMenu/NavbarMenu";

import workTheme from "../styles/workTheme";

import styles from "../styles/App.module.scss";
import SideMenu from "../components/SideMenu/SideMenu";

interface Props {
  projectLink: string;
  works: WorkItem[];
}

const WorkApp: React.FC<Props> = ({ projectLink, works }) => {
  const [menuToggled, setMenuToggled] = useState(false);

  const isMobile = useMediaQuery(workTheme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(workTheme.breakpoints.down("md"));

  const currentWork = works.find((work) => work.projectLink == projectLink);
  if (currentWork === undefined) return <div>No Work was found</div>;

  const menuClicked = () => {
    setMenuToggled(true);
  };

  const menuToggleChanged = (isToggled: boolean) => {
    setMenuToggled(isToggled);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {menuToggled && (
        <SideMenu
          links={works.map((work) => work.title)}
          setToggle={menuToggleChanged}
        />
      )}

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
            onClick={menuClicked}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant={isMobile ? "body1" : "h6"}
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {currentWork.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ p: isMobile ? 2 : 3 }}
        className={styles.work_wrap}
      >
        <Grid container maxWidth="xl" sx={{ paddingInline: isMobile ? 0 : 3 }}>
          <Grid item md={9} sx={{ paddingRight: isTablet ? 0 : 3 }}>
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
