import React from "react";

import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";

import { WorkItem } from "../../container/Work/WorkItem";
import WorkSummary from "../Components/WorkSummary";
import WorkHeader from "../Components/WorkHeader";
import { workImages } from "../../constants";

import { DynamicImageList } from "../../components";

import styles from "../../styles/App.module.scss";

interface Props {
  work: WorkItem;
}

const PortfolioWebsite: React.FC<Props> = ({ work }) => {
  return (
    <Grid container spacing={3}>
      <Grid item md={4}>
        <Card variant="outlined">
          <WorkSummary work={work} />
        </Card>
      </Grid>
      <Grid item md={8}>
        <Card variant="outlined" sx={{ p: 3 }}>
          <WorkHeader title={work.title} />
          <p>DocMerge Description</p>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PortfolioWebsite;
