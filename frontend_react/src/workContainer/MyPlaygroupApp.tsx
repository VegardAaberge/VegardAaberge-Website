import React from "react";

import Grid from "@mui/material/Grid";
import { Card, Typography } from "@mui/material";

import { WorkItem } from "../container/Work/WorkItem";
import WorkSummary from "./Components/WorkSummary";
import WorkHeader from "./Components/WorkHeader";

import styles from "../styles/App.module.scss";

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
        <Card variant="outlined" sx={{ p: 3 }} className={styles.work_item}>
          <WorkHeader title={work.title} />
          <p>
            MyPlaygroup App is an app created for the business MyPlaygroup. The
            purpose of the app is mainly to manage customers classes, payments
            and plans. It also provided the users some information about their
            classes and how much they have paid.
          </p>

          <p>
            As iOS is not big in China and we have Kotlin Multiplatform, then I
            decided to built it natively for Android. I had experience with
            Android on Xamarin, but it was written in C#. To understand Android
            platform better I followed some tutorials from philipp lackner.
            After going through the Android Fundemandels playlist I discovered
            Jetpack Compose.
          </p>

          <p>
            Jetpack compose do not use xml/xaml as in Xamarin and Android
            Native. This means that no adapters is required and it doesn't use
            view bindings and instead rely on a state defined in the viewmodel.
            This created a better connection with the data and the view and
            reduced the amount of files required to show a view.
          </p>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            App
          </Typography>

          <p></p>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            Backend
          </Typography>

          <Typography variant="h6" align="center" sx={{ p: 1 }}>
            Ubuntu Server
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PortfolioWebsite;
