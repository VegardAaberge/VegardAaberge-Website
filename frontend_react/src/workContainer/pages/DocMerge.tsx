import React from "react";

import Grid from "@mui/material/Grid";
import { Card, useMediaQuery } from "@mui/material";

import { WorkItem } from "../../container/Work/WorkItem";
import WorkSummary from "../Components/WorkSummary";
import WorkHeader from "../Components/WorkHeader";
import { workImages } from "../../constants";
import { DynamicImageList } from "../../components";
import workTheme from "../../styles/workTheme";

import styles from "../WorkApp.module.scss";

interface Props {
  work: WorkItem;
}

const PortfolioWebsite: React.FC<Props> = ({ work }) => {
  const isMobile = useMediaQuery(workTheme.breakpoints.down("sm"));

  return (
    <Grid container spacing={isMobile ? 1 : 3}>
      <Grid item xl={4}>
        <Card variant="outlined">
          <WorkSummary work={work} />
        </Card>
      </Grid>
      <Grid item xl={8}>
        <Card variant="outlined" sx={{ p: 3 }}>
          <WorkHeader title={work.title} />
          <p>DocMerge Description</p>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PortfolioWebsite;
